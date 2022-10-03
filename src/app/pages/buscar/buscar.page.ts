import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MisProductosModel } from 'app/models/misproductos.model';
import { Observable, Subscription, merge } from 'rxjs';
import { DataStore } from 'app/shell/data-store';
import { FirebaseService } from 'app/services/firebase.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { formatNumber } from '@angular/common';
import { ProductosModel } from 'app/models/buscar.model';
import { DetallesPage } from 'app/pages/detalles/detalles.page';
import { CarritoService } from 'app/services/carrito.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: [
    './styles/buscar.page.scss',
    './styles/buscar.shell.scss',
    './styles/buscar.responsive.scss'
  ]
})
export class BuscarPage implements OnInit {
  // Data passed in by componentProps
  @Input() titulo: string;
  @Input() categoriaId: string;
  @Input() tiendaId: string;

  searchQuery = '';
  subscriptions: Subscription;
  segmentValue = '';
  productos: Array<MisProductosModel>;
  productosList: Array<MisProductosModel>;
  filtered: Array<MisProductosModel>;
  productosDataStore: DataStore<Array<MisProductosModel>>;
  stateSubscriptionProductos: Subscription;
  cart = [];
  products = [];

  @HostBinding('class.is-shell') get isShell() {
    return (this.productos) ? true : false;
  }

  productoSearch: string;

  @ViewChild('detalles', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    public firebaseService: FirebaseService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private cartService: CarritoService
  ) { }

  ngOnDestroy(): void {
    // this.stateSubscriptionProductos.unsubscribe();
  }

  ngOnInit() {
    this.titulo = "Buscar";
  }

  searchList() {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';
    const dataSource: Observable<Array<MisProductosModel>> = this.firebaseService.getProductosDataSourceSearch(this.categoriaId, this.tiendaId, query);
    const dataStore: DataStore<Array<MisProductosModel>> = this.firebaseService.getProductosStoreSearch(dataSource);
    this.productosDataStore = dataStore;

    if (this.stateSubscriptionProductos)
      this.stateSubscriptionProductos.unsubscribe();
    this.stateSubscriptionProductos = merge(
      this.productosDataStore.state,
    ).subscribe(
      (state) => {
        state.forEach(element => {
          var presentacionTxt = '';
          var valorUnidadTxt = '';
          if (element != null) {
            element.descuentoPorc = 0;
            var hoy: string = new Date().toISOString().substring(0, 10);
            var desde: string = element.desde == "" ? hoy : element.desde;
            var hasta: string = element.hasta == "" ? hoy : element.hasta;
            if (element.descuento > 0 && hoy >= desde && hoy <= hasta) {
              element.descuentoPorc = element.descuento;
              element.descuentoVlr = element.precio;
              element.precioVlr = (element.precio * (1.0 - element.descuento));
            }
            else {
              element.descuentoVlr = 0;
              element.precioVlr = element.precio;
            }
            if (element.cantidad > 1) {
              presentacionTxt = presentacionTxt + element.cantidad + ' unidades de ' + element.presentacion + ' ' + element.unidad + ' c/u'
              valorUnidadTxt = element.precioVlr / element.cantidad + ' x un';
            }
            else {
              presentacionTxt = presentacionTxt + element.presentacion + ' ' + element.unidad
              valorUnidadTxt = formatNumber(Number((element.precioVlr / element.presentacion)), 'en-US', '1.0-2') + ' x ' + element.unidad;
            }
            element.presentacionTxt = presentacionTxt + ' ($' + valorUnidadTxt + ')';
          }
        });

        this.productos = state;
        this.productosList = state;
      },
      (error) => console.log(error),
      () => console.log('stateSubscriptionProductos completed')
    );
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  ionViewWillLeave() {
    // this.subscriptions.unsubscribe();
  }

  async openDetalleBuscar(producto: ProductosModel) {
    let modal = await this.modalCtrl.create({
      component: DetallesPage,
      cssClass: 'cart-modal',
      componentProps: {
        'producto': producto
      }
    });
    modal.onWillDismiss().then(() => {
    });
    modal.present();
  }




  getTotal() {
    return this.cart.reduce((i, j) => i + j.precioVlr * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkout() {

  }


}
