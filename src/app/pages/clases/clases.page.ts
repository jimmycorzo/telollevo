import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, ReplaySubject, Subscription, merge } from 'rxjs';
import { ClasesModel } from 'app/models/clases.model';
import { DataStore, ShellModel } from 'app/shell/data-store';
import { DepartamentosModel } from 'app/models/departamentos.model';
import { CarritoService } from 'app/services/carrito.service';
import { CarritoPage } from '../carrito/carrito.page';
import { BehaviorSubject } from 'rxjs';
import { BuscarPage } from '../buscar/buscar.page';
import { ProductosPage } from '../productos/productos.page';
import { FirebaseService } from 'app/services/firebase.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: [
    './styles/clases.page.scss',
    './styles/clases.shell.scss',
    './styles/clases.responsive.scss'
  ]
})
export class ClasesPage implements OnInit, OnDestroy {
  subscriptions: Subscription;
  rangeForm: FormGroup;
  showAgeFilter = false;
  tiendaId: string;
  tienda: string;
  cerrada: boolean;
  proximamente: boolean;
  abre: string;
  cierra: string;
  segmentValue = '';
  searchQuery = '';
  tiendaIdbase: string;

  searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  searchFiltersObservable: Observable<any> = this.searchSubject.asObservable();

  clasesDataStore: DataStore<Array<ClasesModel>>;
  departamentosDataStore: DataStore<Array<DepartamentosModel>>;
  stateSubscriptionDpts: Subscription;
  stateSubscriptionClases: Subscription;

  // Use Typescript intersection types to enable decorating the Array of firebase models with a shell model
  // (ref: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)
  departamentos: Array<DepartamentosModel>;
  clases: Array<ClasesModel> & ShellModel;
  clasesList: Array<ClasesModel> & ShellModel;
  dptoInicial: string;

  @HostBinding('class.is-shell') get isShell() {
    return (this.clases && this.clases.isShell) ? true : false;
  }

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    public firebaseService: FirebaseService,
    public modalController: ModalController,
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private cartService: CarritoService,
    private modalCtrl: ModalController
  ) { }

  ngOnDestroy(): void {
    this.stateSubscriptionDpts.unsubscribe();
    this.stateSubscriptionClases.unsubscribe();
  }

  async openClase(tiendaId, claseId, clase) {

    let modal = await this.modalCtrl.create({
      component: ProductosPage,
      cssClass: 'cart-modal',
      componentProps: {
        'tiendaId': this.tiendaId,
        'tienda': this.tienda,
        'claseId': claseId,
        'clase': clase,
        'abre': this.abre,
        'cierra': this.cierra,
        'cerrada': this.cerrada,
        'proximamente': this.proximamente,
      }
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.tiendaId = params.tiendaId;
        this.tienda = params.tienda;
        this.abre = params.abre;
        this.cierra = params.cierra;
        this.cerrada = JSON.parse(params.cerrada == 'undefined' ? false : params.cerrada);
        this.proximamente = JSON.parse(params.proximamente == 'undefined' ? false : params.proximamente);
      }
    );

    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

    this.subscriptions = this.route.data.subscribe(
      (resolvedRouteData) => {

        const dsDptos: Observable<Array<DepartamentosModel>> = this.firebaseService.getDepartamentosDataSource(this.tiendaId);

        const storeDptos: DataStore<Array<DepartamentosModel>> = this.firebaseService.getDepartamentosStore(dsDptos);

        this.departamentosDataStore = storeDptos;

        const dataSource: Observable<Array<ClasesModel>> = this.firebaseService.getClasesDataSource(this.tiendaId);

        const dataStore: DataStore<Array<ClasesModel>> = this.firebaseService.getClasesStore(dataSource);

        this.clasesDataStore = dataStore;

        // Keep track of the subscription to unsubscribe onDestroy
        // Merge filteredData with the original dataStore state
        this.stateSubscriptionDpts = merge(
          this.departamentosDataStore.state,
        ).subscribe(
          (state) => {
            this.departamentos = state.filter((x): x is DepartamentosModel => x !== null).sort(this.compareDepartamentos);
            this.dptoInicial = this.departamentos[0].id;
            this.segmentValue = this.departamentos[0].id;
            console.log(this.departamentos);
          },
          (error) => console.log(error),
          () => console.log('stateSubscriptionDpts completed')
        );
        this.stateSubscriptionClases = merge(
          this.clasesDataStore.state,
        ).subscribe(
          (state) => {
            this.clases = state.sort(this.compareClases);
            this.clasesList = this.clases;
            console.log(this.clasesList);
            console.log(this.clases);
            //this.searchList();
          },
          (error) => console.log(error),
          () => console.log('stateSubscriptionClases completed')
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

  compareClases(a, b) {
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
    this.clasesList = this.filterList(this.clases, query);
  }

  filterList(list, query) {
    const lista = list.filter(item =>
      item.clase.toLowerCase().includes(query.toLowerCase()) && item.departamentoId == this.segmentValue
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


}
