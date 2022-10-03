import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription, merge, BehaviorSubject } from 'rxjs';
import { DataStore } from 'app/shell/data-store';
import { FirebaseService } from 'app/services/firebase.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiciosModel } from 'app/models/servicios.model';
import { CarritoPage } from 'app/pages/carrito/carrito.page';
import { CarritoService } from 'app/services/carrito.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./styles/servicios.page.scss', './styles/servicios.shell.scss'],
})
export class ServiciosPage implements OnInit {
  searchQuery = '';
  subscriptions: Subscription;
  segmentValue = '';
  servicios: Array<ServiciosModel>;
  serviciosList: Array<ServiciosModel>;
  filtered: Array<ServiciosModel>;
  serviciosDataStore: DataStore<Array<ServiciosModel>>;
  stateSubscriptionServicios: Subscription;
  cartItemCount: BehaviorSubject<number>;
  cart = [];
  products = [];

  @HostBinding('class.is-shell') get isShell() {
    return (this) ? true : false;
  }

  @ViewChild('detalles', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    public firebaseService: FirebaseService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private cartService: CarritoService,
  ) { }

  ngOnDestroy(): void {
    this.stateSubscriptionServicios.unsubscribe();
  }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

    this.subscriptions = this.route.data.subscribe(
      (resolvedRouteData) => {

        const dataSource: Observable<Array<ServiciosModel>> = this.firebaseService.getServiciosDataSource();

        const dataStore: DataStore<Array<ServiciosModel>> = this.firebaseService.getServiciosStore(dataSource);

        this.serviciosDataStore = dataStore;

        this.stateSubscriptionServicios = merge(
          this.serviciosDataStore.state,
        ).subscribe(
          (state) => {
            this.servicios = state;
            this.servicios.forEach(element => {
              element.imagenes.sort();
            });
            this.serviciosList = state;
            this.searchList();
          },
          (error) => console.log(error),
          () => console.log('stateSubscriptionServicios completed')
        );
      },
      (error) => console.log(error)
    );
  }

  segmentChanged(ev) {
    this.segmentValue = ev.detail.value;
    this.searchList();
  }

  searchList() {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';
    this.serviciosList = this.filterList(this.servicios, query);
  }

  filterList(list, query) {
    const lista = list.filter(item =>
      item.servicio.toLowerCase().includes(query.toLowerCase())
    );
    return lista;
  }

  ionViewWillLeave() {
    this.subscriptions.unsubscribe();
  }

  searchForm() {
    console.log('search form');
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }


  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CarritoPage,
      cssClass: 'cart-modal'
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
