import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable, ReplaySubject, Subscription, merge } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { ClasificacionesModel } from 'app/models/clasificaciones.model';
// import { FirebaseCreateUserModal } from '../user/create/firebase-create-user.modal';
import { DataStore, ShellModel } from 'app/shell/data-store';
import { FirebaseService } from 'app/services/firebase.service';

import { CarritoService } from 'app/services/carrito.service';
import { CarritoPage } from 'app/pages/carrito/carrito.page';
import { BehaviorSubject } from 'rxjs';

import { BuscarPage } from 'app/pages/buscar/buscar.page';

@Component({
  selector: 'app-clasificaciones',
  templateUrl: './clasificaciones.page.html',
  styleUrls: [
    './styles/clasificaciones.page.scss',
    './styles/clasificaciones.shell.scss',
    './styles/clasificaciones.responsive.scss'
  ]
})
export class ClasificacionesPage implements OnInit, OnDestroy {
  rangeForm: FormGroup;
  searchQuery: string;
  showAgeFilter = false;
  categoriaId: string;
  categoria: string;

  searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  searchFiltersObservable: Observable<any> = this.searchSubject.asObservable();

  clasificacionesDataStore: DataStore<Array<ClasificacionesModel>>;
  stateSubscription: Subscription;

  // Use Typescript intersection types to enable docorating the Array of firebase models with a shell model
  // (ref: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)
  items: Array<ClasificacionesModel> & ShellModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.items && this.items.isShell) ? true : false;
  }

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    public router: Router,
    public firebaseService: FirebaseService,
    public modalController: ModalController,
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private cartService: CarritoService,
    private modalCtrl: ModalController
  ) { }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }

  async ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.categoriaId = params.categoriaId;
        this.categoria = params.categoria;
      }
    );

    var sucursal = await this.firebaseService.getSucursalAsync('slc');
    if (sucursal) {
      localStorage.setItem("sucursal", JSON.stringify(sucursal));
    }

    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

    this.searchQuery = '';

    this.rangeForm = new FormGroup({
      dual: new FormControl({ lower: 1, upper: 100 })
    });

    this.route.data.subscribe(
      (resolvedRouteData) => {

        const dataSource: Observable<Array<ClasificacionesModel>> = this.firebaseService.getClasificacionesDataSource('directorio');

        const dataStore: DataStore<Array<ClasificacionesModel>> = this.firebaseService.getClasificacionesStore(dataSource);

        this.clasificacionesDataStore = dataStore;

        // We need to avoid having multiple firebase subscriptions open at the same time to avoid memory leaks
        // By using a switchMap to cancel previous subscription each time a new one arrives,
        // we ensure having just one subscription (the latest)
        const updateSearchObservable = this.searchFiltersObservable.pipe(
          switchMap((filters) => {
            const filteredDataSource = this.firebaseService.searchClasificaciones(
              filters.lower,
              filters.upper
            );
            // Send a shell until we have filtered data from Firebase
            const searchingShellModel = [
              new ClasificacionesModel(),
              new ClasificacionesModel()
            ];
            // Wait on purpose some time to ensure the shell animation gets shown while loading filtered data
            const searchingDelay = 400;

            const dataSourceWithShellObservable = DataStore.AppendShell(filteredDataSource, searchingShellModel, searchingDelay);

            return dataSourceWithShellObservable.pipe(
              map(filteredItems => {
                // Just filter items by name if there is a search query and they are not shell values
                if (filters.query !== '' && !filteredItems.isShell) {
                  const queryFilteredItems = filteredItems.filter(item =>
                    item.clasificacion.toLowerCase().includes(filters.query.toLowerCase()
                    ));
                  // While filtering we strip out the isShell property, add it again
                  return Object.assign(queryFilteredItems, { isShell: filteredItems.isShell });
                } else {
                  return filteredItems;
                }
              })
            );
          })
        );

        // Keep track of the subscription to unsubscribe onDestroy
        // Merge filteredData with the original dataStore state
        this.stateSubscription = merge(
          this.clasificacionesDataStore.state,
          updateSearchObservable
        ).subscribe(
          (state) => {
            this.items = state;
            // console.log(state);
          },
          (error) => console.log(error),
          () => console.log('stateSubscription completed')
        );
      },
      (error) => console.log(error)
    );
  }

  searchList() {
    this.searchSubject.next({
      lower: this.rangeForm.controls.dual.value.lower,
      upper: this.rangeForm.controls.dual.value.upper,
      query: this.searchQuery
    });
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

  async openSearch(titulo: string, categoriaId: string, clasificacionId: string) {

    let modal = await this.modalCtrl.create({
      component: BuscarPage,
      cssClass: 'cart-modal',
      componentProps: {
        'titulo': titulo,
        'categoriaId': categoriaId,
        'clasificacionId': clasificacionId
      }
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  // openClasificacion(clasificacionId: string, clasificacion: string) {
  //   this.router.navigate(['/directorios/', clasificacionId, clasificacion], { replaceUrl: true });
  // }

}
