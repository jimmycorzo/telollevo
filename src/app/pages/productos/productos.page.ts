import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription, merge, BehaviorSubject } from 'rxjs';
import { DataStore } from 'app/shell/data-store';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { MisProductosModel } from 'app/models/misproductos.model';
import { formatNumber } from '@angular/common';
import { DetallesPage } from 'app/pages/detalles/detalles.page';
import { ProductosModel } from 'app/models/productos.model';
import { CarritoPage } from 'app/pages/carrito/carrito.page';
import { CarritoService } from 'app/services/carrito.service';
import { BuscarPage } from 'app/pages/buscar/buscar.page';
import { TiendasModel } from 'app/models/tiendas.model';
import { SeleccionadoresModel, TitulosModel } from 'app/models/titulos.model';
import { FirebaseService } from 'app/services/firebase.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: [
    './styles/productos.page.scss',
    './styles/productos.shell.scss',
    './styles/productos.ios.scss',
    './styles/productos.md.scss'
  ],
})
export class ProductosPage implements OnInit {
  searchQuery = '';
  subscriptions: Subscription;
  segmentValue = '';
  productos: Array<MisProductosModel>;
  productosList: Array<MisProductosModel>;
  filtered: Array<MisProductosModel>;
  productosDataStore: DataStore<Array<MisProductosModel>>;
  stateSubscriptionProductos: Subscription;
  tiendaId: string;
  tienda: TiendasModel;
  claseId: string;
  clase: string;
  cerrada: boolean;
  abre: string;
  cierra: string;
  proximamente: boolean = false;
  cartItemCount: BehaviorSubject<number>;
  cart = [];
  products = [];

  seleccionadores: Array<SeleccionadoresModel>;
  titulos: Array<TitulosModel> = new Array<TitulosModel>();

  @HostBinding('class.is-shell') get isShell() {
    return (this) ? true : false;
  }

  @ViewChild('detalles', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    public firebaseService: FirebaseService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private cartService: CarritoService
  ) { }

  ngOnDestroy(): void {
    this.stateSubscriptionProductos.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.tiendaId = params.tiendaId;
        this.tienda = params.tienda;
        this.claseId = params.claseId;
        this.clase = params.clase;
        this.abre = params.abre;
        this.cierra = params.cierra;
        this.cerrada = JSON.parse(params.cerrada == 'undefined' ? false : params.cerrada);
        this.proximamente = JSON.parse(params.proximamente == 'undefined' ? false : params.proximamente);

        if (this.abre != 'null' && this.cierra != 'null') {
          const hora = String("0" + new Date().getHours()).slice(-2) + ':' + String("0" + new Date().getMinutes()).slice(-2);
          this.cerrada = !(hora >= this.abre && hora <= this.cierra);
        }
        else
          this.cerrada = false;

      }
    );
    this.loadProductos();
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

  }

  segmentChanged(ev) {
    this.segmentValue = ev.detail.value;
    // Check if there's any filter and apply it
    this.searchList();
  }

  searchList() {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';
    this.productosList = this.filterList(this.productos, query);
  }

  filterList(list, query) {
    const lista = list.filter(item =>
      item.producto.toLowerCase().includes(query.toLowerCase())
    );
    return lista;
  }

  ionViewWillLeave() {
    this.subscriptions.unsubscribe();
  }

  searchForm() {
    console.log('search form');
  }

  async openDetalleProducto(producto: ProductosModel) {
    let modal = await this.modalCtrl.create({
      component: DetallesPage,
      cssClass: 'cart-modal',
      componentProps: {
        'producto': producto,
        'cerrada': this.cerrada,
        'proximamente': this.proximamente,
        'abre': this.abre,
        'cierra': this.cierra
      }
    });
    modal.onWillDismiss().then(() => {
      // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CarritoPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
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

  loadProductos(event?) {
    this.subscriptions = this.route.data.subscribe(
      (resolvedRouteData) => {
        var lastVisible: string = '';
        if (this.productos) {
          var lastVisible = this.productos[this.productos.length - 1].producto;
        }
        const dataSource: Observable<Array<MisProductosModel>> = this.firebaseService.loadProductos(this.tiendaId, this.claseId, lastVisible);
        const dataStore: DataStore<Array<MisProductosModel>> = this.firebaseService.getProductosStore(dataSource);
        this.productosDataStore = dataStore;

        // Keep track of the subscription to unsubscribe onDestroy
        // Merge filteredData with the original dataStore state
        this.stateSubscriptionProductos = merge(
          this.productosDataStore.state,
        ).subscribe(
          (state) => {
            state.forEach(element => {
              var presentacionTxt = '';
              var valorUnidadTxt = '';
              if (element != null) {
                // element.producto = element.producto.toLowerCase();
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
                  valorUnidadTxt = formatNumber(Number((element.precioVlr / element.cantidad)), 'en-US', '1.0-2') + ' x un';
                }
                else {
                  presentacionTxt = presentacionTxt + element.presentacion + ' ' + element.unidad
                  valorUnidadTxt = formatNumber(Number((element.precioVlr / element.presentacion)), 'en-US', '1.0-2') + ' x ' + element.unidad;
                }
                element.presentacionTxt = presentacionTxt + ' ($' + valorUnidadTxt + ')';
                element.observaciones = '';
                element.tiendaId = this.tiendaId;
                element.tienda = this.tienda;

                this.firebaseService.getSeleccionadores(element.id)
                  .subscribe((result: any) => {
                    var tituloBase = '';
                    var titulos: Array<TitulosModel> = new Array<TitulosModel>();
                    this.titulos = new Array<TitulosModel>();
                    result.forEach(element => {
                      if (element != null) {
                        if (tituloBase != element.titulo) {
                          tituloBase = element.titulo;
                          const titulo = new TitulosModel();
                          titulo.titulo = element.titulo;
                          titulo.productoId = element.productoId;
                          titulo.seleccionado = '';
                          this.titulos.push(titulo);
                        }
                        var t: TitulosModel = this.titulos.find(t => t.titulo == tituloBase);
                        var s: SeleccionadoresModel = new SeleccionadoresModel();
                        s.id = element.id;
                        if (element.adicional > 0) {
                          s.seleccionador = element.seleccionador + ' (+$' + element.adicional + ')';
                        }
                        else {
                          s.seleccionador = element.seleccionador;
                        }
                        s.adicional = element.adicional;
                        s.seleccionado = false;
                        s.name = '';
                        t.seleccionadores.push(s);
                        // titulos.push(t);
                      }
                    });
                    element.titulos = this.titulos;
                  });

              }
            });
            if (this.productos)
              this.productos = this.productos.concat(state);
            else
              this.productos = state;
            this.productosList = this.productos;
            this.searchList();
            // console.log('lastvisible: ', lastVisible)
            if (event) {
              event.target.complete();
            }
          },
          (error) => console.log(error),
          () => console.log('stateSubscriptionProductos completed')
        );
      },
      (error) => console.log(error)
    );


  }

  loadMore(event) {
    setTimeout(() => {
      this.loadProductos(event);
      if (this.productos.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

  async openSearch(titulo: string, categoriaId: string, tiendaId: string) {

    let modal = await this.modalCtrl.create({
      component: BuscarPage,
      cssClass: 'cart-modal',
      componentProps: {
        'titulo': titulo,
        'categoriaId': categoriaId,
        'tiendaId': this.tiendaId
      }
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

}
