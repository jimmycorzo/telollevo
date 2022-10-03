import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, ReplaySubject, Subscription, merge } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { RestaurantesModel } from 'app/models/restaurantes.model';
import { DataStore, ShellModel } from 'app/shell/data-store';
import { CarritoService } from 'app/services/carrito.service';
import { CarritoPage } from 'app/pages/carrito/carrito.page';
import { BehaviorSubject } from 'rxjs';
import { BuscarPage } from '../buscar/buscar.page';
import { FirebaseService } from 'app/services/firebase.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: [
    './styles/restaurantes.page.scss',
    './styles/restaurantes.shell.scss',
    './styles/restaurantes.responsive.scss'
  ]
})
export class RestaurantesPage implements OnInit, OnDestroy {
  rangeForm: FormGroup;
  searchQuery: string;
  showAgeFilter = false;
  categoriaId: string;
  categoria: string;
  searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  searchFiltersObservable: Observable<any> = this.searchSubject.asObservable();
  restaurantesDataStore: DataStore<Array<RestaurantesModel>>;
  stateSubscription: Subscription;
  items: Array<RestaurantesModel> & ShellModel;
  itemsList: Array<RestaurantesModel> & ShellModel;

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
    private cartService: CarritoService,
    private modalCtrl: ModalController
  ) { }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.categoriaId = params.categoriaId;
        this.categoria = params.categoria;
      }
    );

    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

    this.searchQuery = '';

    this.rangeForm = new FormGroup({
      dual: new FormControl({ lower: 1, upper: 100 })
    });

    this.route.data.subscribe(
      (resolvedRouteData) => {

        const dataSource: Observable<Array<RestaurantesModel>> = this.firebaseService.getTiendasDataSource('restaurantes');

        const dataStore: DataStore<Array<RestaurantesModel>> = this.firebaseService.getTiendasStore('restaurantes', dataSource);

        this.restaurantesDataStore = dataStore;

        // We need to avoid having multiple firebase subscriptions open at the same time to avoid memory leaks
        // By using a switchMap to cancel previous subscription each time a new one arrives,
        // we ensure having just one subscription (the latest)
        const updateSearchObservable = this.searchFiltersObservable.pipe(
          switchMap((filters) => {
            const filteredDataSource = this.firebaseService.searchTiendas(
            );
            // Send a shell until we have filtered data from Firebase
            const searchingShellModel = [
              new RestaurantesModel(),
              new RestaurantesModel()
            ];
            // Wait on purpose some time to ensure the shell animation gets shown while loading filtered data
            const searchingDelay = 400;

            const dataSourceWithShellObservable = DataStore.AppendShell(filteredDataSource, searchingShellModel, searchingDelay);

            return dataSourceWithShellObservable.pipe(
              map(filteredItems => {
                // Just filter items by name if there is a search query and they are not shell values
                if (filters.query !== '' && !filteredItems.isShell) {
                  const queryFilteredItems = filteredItems.filter(item =>
                    item.tienda.toLowerCase().includes(filters.query.toLowerCase()
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
          this.restaurantesDataStore.state,
          updateSearchObservable
        ).subscribe(
          (state) => {
            state.forEach(element => {
              if (element != null && element.mishorarios != null) {
                const hora = String("0" + new Date().getHours()).slice(-2) + ':' + String("0" + new Date().getMinutes()).slice(-2);
                element.cerrada = !(hora >= element.mishorarios.desde && hora <= element.mishorarios.hasta);
                // element.mishorarios.desde = new Date('1968-11-16T' + element.mishorarios.desde).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                // element.mishorarios.hasta = new Date('1968-11-16T' + element.mishorarios.desde).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
              }
              else
                element.cerrada = false;
            });
            this.items = state;
            this.itemsList = state;
            this.searchList();
            console.log('Items de restaurantes', state);
          },
          (error) => console.log(error),
          () => console.log('stateSubscription completed')
        );
      },
      (error) => console.log(error)
    );
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

  closeModal() {
    this.modalCtrl.dismiss();
  }

  // openTienda(tiendaId: string, tienda: string) {
  //   if (this.categoriaId != 'colegios')
  //     this.router.navigate(['/clases/', tiendaId, tienda], { replaceUrl: true });
  // }

  searchList() {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';
    this.itemsList = this.filterList(this.items, query);
  }

  filterList(list, query) {
    const lista = list.filter(item =>
      item.tienda.toLowerCase().includes(query.toLowerCase())
    );
    return lista;
  }


}
