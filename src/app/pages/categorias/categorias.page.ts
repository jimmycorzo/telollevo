import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject, Subscription, merge, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CategoriasModel } from 'app/models/categorias.model';
import { DataStore, ShellModel } from 'app/shell/data-store';
import { CarritoService } from 'app/services/carrito.service';
import { CarritoPage } from 'app/pages/carrito/carrito.page';
import { DireccionesModel } from 'app/models/direcciones.model';
import { environment } from '@env/environment';
import { FirebaseService } from 'app/services/firebase.service';
// import { MapsPage } from '../maps/maps.page';

@Component({
  selector: 'app-categorias',
  templateUrl: 'categorias.page.html',
  styleUrls: [
    './styles/categorias.page.scss',
    './styles/categorias.shell.scss',
    './styles/categorias.responsive.scss'
  ]
})

export class CategoriasPage implements OnInit, OnDestroy {
  rangeForm: FormGroup;
  searchQuery: string;
  showAgeFilter = false;
  searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  searchFiltersObservable: Observable<any> = this.searchSubject.asObservable();
  categoriasDataStore: DataStore<Array<CategoriasModel>>;
  direccionesDataStore: DataStore<Array<DireccionesModel>>;
  stateSubscription: Subscription;
  direcciones: Array<DireccionesModel>;
  items: Array<CategoriasModel> & ShellModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.items && this.items.isShell) ? true : false;
  }

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  direccionSeleccionada: DireccionesModel;
  stateSubscriptionDirecciones: Subscription;
  stateSubscriptionSucursales: Subscription;
  version: string;

  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    public router: Router,
    public firebaseService: FirebaseService,
    public modalController: ModalController,
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private cartService: CarritoService,
    private modalCtrl: ModalController,
  ) {
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }

  async ngOnInit() {
    this.version = environment.version;

    this.searchQuery = '';

    this.rangeForm = new FormGroup({
      dual: new FormControl({ lower: 1, upper: 100 })
    });

    this.route.data.subscribe(
      (resolvedRouteData) => {

        const dataSource: Observable<CategoriasModel[]> = this.firebaseService.getCategoriasDataSource();

        const dataStore: DataStore<Array<CategoriasModel>> = this.firebaseService.getCategoriasStore(dataSource);

        this.categoriasDataStore = dataStore;

        const updateSearchObservable = this.searchFiltersObservable.pipe(
          switchMap((filters) => {
            const filteredDataSource = this.firebaseService.searchCategorias(
              filters.texto
            );
            const searchingShellModel = [
              new CategoriasModel(),
              new CategoriasModel()
            ];
            const searchingDelay = 400;

            const dataSourceWithShellObservable = DataStore.AppendShell(filteredDataSource, searchingShellModel, searchingDelay);

            return dataSourceWithShellObservable.pipe(
              map(filteredItems => {
                if (filters.query !== '' && !filteredItems.isShell) {
                  const queryFilteredItems = filteredItems.filter(item =>
                    item.categoria.toLowerCase().includes(filters.query.toLowerCase()
                    ));
                  return Object.assign(queryFilteredItems, { isShell: filteredItems.isShell });
                } else {
                  return filteredItems;
                }
              })
            );
          })
        );

        this.stateSubscription = merge(
          this.categoriasDataStore.state,
          updateSearchObservable
        ).subscribe(
          (state) => {
            this.items = state.filter(x => x.categoria !== 'Directorio' && x.categoria !== 'Restaurantes' && x.categoria !== 'Servicios Públicos') as Array<CategoriasModel> & ShellModel;
            console.log('Items de tiendas', state);
          },
          (error) => console.log(error),
          () => console.log('stateSubscription completed')
        );
      },
      (error) => console.log(error)
    );

    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
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

  openTiendas(categoriaId: string, categoria: string) {
    this.router.navigate(['/tiendas/', categoriaId, categoria], { replaceUrl: true });
  }

  direccion_seleccionada(event) {
    if (event.detail.value == '000000') // Nueva Dirección
    {
      localStorage.setItem('direccion', JSON.stringify('000001'));
      var direccion: DireccionesModel;
      this.openMaps(direccion);
    }
    if (event.detail.value == '000001') // En Sitio
    {
      localStorage.setItem('direccion', JSON.stringify(event.detail.value));
    }
    else {
      localStorage.setItem('direccion', JSON.stringify(event.detail.value));
    }
  }

  sucursal_seleccionada(event) {
    localStorage.setItem('sucursal', JSON.stringify(event.detail));
  }

  async openMaps(direccion: DireccionesModel) {
    if (direccion == null) {
      direccion = new DireccionesModel();
    }
    // let modal = await this.modalCtrl.create({
    //   component: MapsPage,
    //   cssClass: 'cart-modal',
    //   componentProps: {
    //     'direccion': direccion,
    //   }
    // });
    // modal.onWillDismiss().then(() => {
    //   if (direccion.id == '000000') // Nueva Dirección
    //   {
    //     localStorage.setItem('direccion', JSON.stringify('000001'));
    //   }
    //   else {
    //     var direccion1 = JSON.parse(localStorage.getItem('direccion'));
    //     this.direcciones = this.direcciones.concat(direccion1).sort(this.compareDirecciones);
    //   }
    // });
    // modal.present();
  }

  compareSucursales(a, b) {
    if (a.sucursal < b.sucursal) {
      return -1;
    }
    if (a.sucursal > b.sucursal) {
      return 1;
    }
    return 0;
  }

  compareDirecciones(a, b) {
    if (a.direccion < b.direccion) {
      return -1;
    }
    if (a.direccion > b.direccion) {
      return 1;
    }
    return 0;
  }
}
