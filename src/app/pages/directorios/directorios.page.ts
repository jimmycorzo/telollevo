import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Observable, ReplaySubject, Subscription, merge, BehaviorSubject } from 'rxjs';
import { DataStore, ShellModel } from 'app/shell/data-store';
import { FirebaseService } from 'app/services/firebase.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { DirectoriosModel } from 'app/models/directorios.model';
import { CarritoService } from 'app/services/carrito.service';
import { CarritoPage } from 'app/pages/carrito/carrito.page';
import { TarjetaPage } from 'app/pages/tarjeta/tarjeta.page';

@Component({
  selector: 'app-directorios',
  templateUrl: './directorios.page.html',
  styleUrls: ['./styles/directorios.page.scss', './styles/directorios.shell.scss'],
})
export class DirectoriosPage implements OnInit {
  searchQuery = '';
  subscriptions: Subscription;
  segmentValue = '';
  directorios: Array<DirectoriosModel>;
  directoriosList: Array<DirectoriosModel>;
  filtered: Array<DirectoriosModel>;
  directoriosDataStore: DataStore<Array<DirectoriosModel>>;
  stateSubscriptionDirectorios: Subscription;
  clasificacionId: string;
  clasificacion: string;
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
  ) {
    console.log('Constructor Directorios');
  }

  ngOnDestroy(): void {
    this.stateSubscriptionDirectorios.unsubscribe();
  }

  ngOnInit() {
    console.log('ngOnInit Directorios');
    this.route.params.subscribe(
      (params: Params) => {
        this.clasificacionId = params.clasificacionId;
        this.clasificacion = params.clasificacion;
        // console.log(this.clasificacionId);
        // console.log(this.clasificacion);
      }
    );
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

    this.subscriptions = this.route.data.subscribe(
      (resolvedRouteData) => {

        const dataSource: Observable<Array<DirectoriosModel>> = this.firebaseService.getDirectoriosDataSource(this.clasificacion);

        const dataStore: DataStore<Array<DirectoriosModel>> = this.firebaseService.getDirectoriosStore(dataSource);

        this.directoriosDataStore = dataStore;

        // Keep track of the subscription to unsubscribe onDestroy
        // Merge filteredData with the original dataStore state
        this.stateSubscriptionDirectorios = merge(
          this.directoriosDataStore.state,
        ).subscribe(
          (state) => {
            state.forEach(element => {
              if (element != null) {
              }
            });

            this.directorios = state;
            this.directorios.forEach(element => {
              element.imagenes.sort();
            });
            this.directoriosList = state;
            this.searchList();
          },
          (error) => console.log(error),
          () => console.log('stateSubscriptionDirectorios completed')
        );
      },
      (error) => console.log(error)
    );
  }

  segmentChanged(ev) {
    this.segmentValue = ev.detail.value;
    // Check if there's any filter and apply it
    this.searchList();
  }

  searchList() {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';
    this.directoriosList = this.filterList(this.directorios, query);
  }


  filterList(list, query) {
    const lista = list.filter(item =>
      item.directorio.toLowerCase().includes(query.toLowerCase())
    );
    return lista;
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave() {
    this.subscriptions.unsubscribe();
  }

  searchForm() {
    console.log('search form');
  }

  async openDetalleDirectorio(directorio: DirectoriosModel) {
    let modal = await this.modalCtrl.create({
      component: TarjetaPage,
      cssClass: 'cart-modal',
      componentProps: {
        'directorio': directorio,
      }
    });
    modal.onWillDismiss().then(() => {
      // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
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


}
