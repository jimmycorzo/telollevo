import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable, ReplaySubject, Subscription, merge } from 'rxjs';

import { LinksModel } from 'app/models/links.model';
import { DataStore, ShellModel } from 'app/shell/data-store';
import { FirebaseService } from '@app/services/Firebase.service';

import { CarritoService } from 'app/services/carrito.service';
import { CarritoPage } from '../carrito/carrito.page';
import { BehaviorSubject } from 'rxjs';
import { BuscarPage } from '../buscar/buscar.page';
import { ProductosPage } from '../productos/productos.page';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: [
    './styles/links.page.scss',
    './styles/links.shell.scss',
    './styles/links.responsive.scss'
  ]
})
export class LinksPage implements OnInit, OnDestroy {
  subscriptions: Subscription;
  rangeForm: FormGroup;
  showAgeFilter = false;
  servicioId: string;
  servicio: string;
  segmentValue = '';
  searchQuery = '';
  servicioIdbase: string;

  searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  searchFiltersObservable: Observable<any> = this.searchSubject.asObservable();

  linksDataStore: DataStore<Array<LinksModel>>;
  stateSubscriptionLinks: Subscription;

  // Use Typescript intersection types to enable decorating the Array of firebase models with a shell model
  // (ref: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)
  links: Array<LinksModel> & ShellModel;
  linksList: Array<LinksModel> & ShellModel;
  dptoInicial: string;

  @HostBinding('class.is-shell') get isShell() {
    return (this.links && this.links.isShell) ? true : false;
  }

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    public tllService: FirebaseService,
    public modalController: ModalController,
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private cartService: CarritoService,
    private iab: InAppBrowser,
    private modalCtrl: ModalController
  ) { }

  ngOnDestroy(): void {
    this.stateSubscriptionLinks.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.servicioId = params.servicioId;
        this.servicio = params.servicio;
      }
    );

    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

    this.subscriptions = this.route.data.subscribe(
      (resolvedRouteData) => {

        const dataSource: Observable<Array<LinksModel>> = this.tllService.getLinksDataSource(this.servicioId);

        const dataStore: DataStore<Array<LinksModel>> = this.tllService.getLinksStore(dataSource);

        this.linksDataStore = dataStore;

        this.stateSubscriptionLinks = merge(
          this.linksDataStore.state,
        ).subscribe(
          (state) => {
            this.links = state.sort(this.compareLinks);
            this.linksList = this.links;
            this.searchList();
          },
          (error) => console.log(error),
          () => console.log('stateSubscriptionLinks completed')
        );
      },
      (error) => console.log(error)
    );
  }

  compareDepartamentos(a, b) {
    if (a == null || b == null) {
      return 0;
    }
    if (a.posicion < b.posicion) {
      return -1;
    }
    if (a.posicion > b.posicion) {
      return 1;
    }
    return 0;
  }

  compareLinks(a, b) {
    if (a.posicion < b.posicion) {
      return -1;
    }
    if (a.posicion > b.posicion) {
      return 1;
    }
    return 0;
  }

  segmentChanged(ev) {
    this.segmentValue = ev.detail.value;
    // Check if there's any filter and apply it
    this.searchList();
  }

  searchList() {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';
    this.linksList = this.filterList(this.links, query);
  }

  filterList(list, query) {
    const lista = list.filter(item =>
      item.clase.toLowerCase().includes(query.toLowerCase()) && item.servicioId == this.segmentValue
    );
    return lista;
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave() {
    this.subscriptions.unsubscribe();
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
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

  async openSearch(titulo: string, categoriaId: string, tiendaId: string) {

    let modal = await this.modalCtrl.create({
      component: BuscarPage,
      cssClass: 'cart-modal',
      componentProps: {
        'titulo': titulo,
        'categoriaId': categoriaId,
        'tiendaId': tiendaId
      }
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

  async openClase(tiendaId, claseId, clase) {

    let modal = await this.modalCtrl.create({
      component: ProductosPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

  openLink(link) {
    const browser = this.iab.create(link);
    // browser.executeScript(...);
    // browser.insertCSS(...);
    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });
    browser.on('loadstart').subscribe((event) => {
      console.log('loadstart', event);
      // if (event.url === compareURL) {
      //   console.log('url', event.url);
      //   // this.navCtrl.setRoot(ConfirmationPage, {
      //   //   orderId: this.orderId
      //   // })
      //   browser.close();
      //   console.log('browser closed');
      // }
    }, err => {
      console.error('error', err);
    });
    browser.on('loaderror').subscribe((event) => {
      alert('loaderror: ' + event.message);
    });
    browser.on('exit').subscribe((event) => {
      // alert('exit: ' + event);
    });

    browser.show();
  }

}
