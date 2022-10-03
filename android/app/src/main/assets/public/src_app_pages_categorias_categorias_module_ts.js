"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_categorias_categorias_module_ts"],{

/***/ 37122:
/*!***************************************************************!*\
  !*** ./src/app/pages/categorias/categorias-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPageRoutingModule": () => (/* binding */ CategoriasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias.page */ 41533);




const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_0__.CategoriasPage,
    }
];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {
};
CategoriasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CategoriasPageRoutingModule);



/***/ }),

/***/ 11653:
/*!*******************************************************!*\
  !*** ./src/app/pages/categorias/categorias.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPageModule": () => (/* binding */ CategoriasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias.page */ 41533);
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias-routing.module */ 37122);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/components.module */ 45642);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/firebase.service */ 19446);









let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_1__.CategoriasPageRoutingModule,
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_0__.CategoriasPage],
        providers: [
            app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService,
            // InAppBrowser
        ]
    })
], CategoriasPageModule);



/***/ }),

/***/ 41533:
/*!*****************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPage": () => (/* binding */ CategoriasPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _categorias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias.page.html?ngResource */ 30659);
/* harmony import */ var _styles_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/categorias.page.scss?ngResource */ 40831);
/* harmony import */ var _styles_categorias_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/categorias.shell.scss?ngResource */ 52273);
/* harmony import */ var _styles_categorias_responsive_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/categorias.responsive.scss?ngResource */ 51914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var app_models_categorias_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/categorias.model */ 93604);
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shell/data-store */ 29760);
/* harmony import */ var app_services_carrito_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/carrito.service */ 21635);
/* harmony import */ var app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/carrito/carrito.page */ 52905);
/* harmony import */ var app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/models/direcciones.model */ 4160);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/firebase.service */ 19446);



















let CategoriasPage = class CategoriasPage {
  constructor(router, firebaseService, modalController, route, routerOutlet, cartService, modalCtrl) {
    this.router = router;
    this.firebaseService = firebaseService;
    this.modalController = modalController;
    this.route = route;
    this.routerOutlet = routerOutlet;
    this.cartService = cartService;
    this.modalCtrl = modalCtrl;
    this.showAgeFilter = false;
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1);
    this.searchFiltersObservable = this.searchSubject.asObservable();
    this.cart = [];
    this.products = [];
  }

  get isShell() {
    return this.items && this.items.isShell ? true : false;
  }

  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.version = _env_environment__WEBPACK_IMPORTED_MODULE_10__.environment.version;
      _this.searchQuery = '';
      _this.rangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
        dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({
          lower: 1,
          upper: 100
        })
      });

      _this.route.data.subscribe(resolvedRouteData => {
        const dataSource = _this.firebaseService.getCategoriasDataSource();

        const dataStore = _this.firebaseService.getCategoriasStore(dataSource);

        _this.categoriasDataStore = dataStore;

        const updateSearchObservable = _this.searchFiltersObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(filters => {
          const filteredDataSource = _this.firebaseService.searchCategorias(filters.texto);

          const searchingShellModel = [new app_models_categorias_model__WEBPACK_IMPORTED_MODULE_5__.CategoriasModel(), new app_models_categorias_model__WEBPACK_IMPORTED_MODULE_5__.CategoriasModel()];
          const searchingDelay = 400;
          const dataSourceWithShellObservable = app_shell_data_store__WEBPACK_IMPORTED_MODULE_6__.DataStore.AppendShell(filteredDataSource, searchingShellModel, searchingDelay);
          return dataSourceWithShellObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(filteredItems => {
            if (filters.query !== '' && !filteredItems.isShell) {
              const queryFilteredItems = filteredItems.filter(item => item.categoria.toLowerCase().includes(filters.query.toLowerCase()));
              return Object.assign(queryFilteredItems, {
                isShell: filteredItems.isShell
              });
            } else {
              return filteredItems;
            }
          }));
        }));

        _this.stateSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(_this.categoriasDataStore.state, updateSearchObservable).subscribe(state => {
          _this.items = state.filter(x => x.categoria !== 'Directorio' && x.categoria !== 'Restaurantes' && x.categoria !== 'Servicios Públicos');
          console.log('Items de tiendas', state);
        }, error => console.log(error), () => console.log('stateSubscription completed'));
      }, error => console.log(error));

      _this.products = _this.cartService.getProducts();
      _this.cart = _this.cartService.getCart();
      _this.cartItemCount = _this.cartService.getCartItemCount();
    })();
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

  openCart() {
    var _this2 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this2.modalCtrl.create({
        component: app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_8__.CarritoPage,
        cssClass: 'cart-modal'
      });
      modal.onWillDismiss().then(() => {
        _this2.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      });
      modal.present();
    })();
  }

  openTiendas(categoriaId, categoria) {
    this.router.navigate(['/tiendas/', categoriaId, categoria], {
      replaceUrl: true
    });
  }

  direccion_seleccionada(event) {
    if (event.detail.value == '000000') // Nueva Dirección
      {
        localStorage.setItem('direccion', JSON.stringify('000001'));
        var direccion;
        this.openMaps(direccion);
      }

    if (event.detail.value == '000001') // En Sitio
      {
        localStorage.setItem('direccion', JSON.stringify(event.detail.value));
      } else {
      localStorage.setItem('direccion', JSON.stringify(event.detail.value));
    }
  }

  sucursal_seleccionada(event) {
    localStorage.setItem('sucursal', JSON.stringify(event.detail));
  }

  openMaps(direccion) {
    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (direccion == null) {
        direccion = new app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_9__.DireccionesModel();
      } // let modal = await this.modalCtrl.create({
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

    })();
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

};

CategoriasPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
}, {
  type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_11__.FirebaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonRouterOutlet
}, {
  type: app_services_carrito_service__WEBPACK_IMPORTED_MODULE_7__.CarritoService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController
}];

CategoriasPage.propDecorators = {
  isShell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.HostBinding,
    args: ['class.is-shell']
  }],
  fab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ['cart', {
      static: false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ElementRef
    }]
  }]
};
CategoriasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: 'app-categorias',
  template: _categorias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _styles_categorias_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__, _styles_categorias_responsive_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], CategoriasPage);


/***/ }),

/***/ 40831:
/*!*************************************************************************!*\
  !*** ./src/app/pages/categorias/styles/categorias.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-categorias-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n}\n\n.categorias-list {\n  --ion-grid-column-padding: var(--page-categorias-gutter);\n  padding: calc(var(--page-categorias-gutter) * 3);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.categorias-list::-webkit-scrollbar {\n  display: none;\n}\n\n.categorias-list .category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.categorias-list .category-item .category-anchor .category-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: calc(var(--page-margin) / 4 * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n}\n\n.categorias-list .travel-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 0,175,255;\n}\n\n.categorias-list .fashion-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 203,50,143;\n}\n\n.categorias-list .food-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 235,187,0;\n}\n\n.categorias-list .deals-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 112,223,112;\n}\n\n.categorias-list .real-estate-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 217,69,58;\n}\n\n.categorias-list ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.categorias-list .cart-icon {\n  font-size: 50px;\n}\n\n.categorias-list .cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpYXMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHVDQUFBO0VBRUEsc0RBQUE7RUFFQSxtREFBQTtFQUNBLDJEQUFBO0FBTEY7O0FBU0E7RUFDRSx3REFBQTtFQUVBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUNqQkEsd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEU0Y7O0FDTkU7RUFDRSxhQUFBO0FEUUo7O0FBTUk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUpOOztBQU1NO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtFQUNBLGdDQUFBO0VBQ0EsaURBQUE7RUFDQSxxQ0FBQTtBQUpSOztBQVNFO0VBQ0UscUNBQUE7RUFDQSx5Q0FBQTtBQVBKOztBQVVFO0VBQ0UscUNBQUE7RUFDQSwwQ0FBQTtBQVJKOztBQVdFO0VBQ0UscUNBQUE7RUFDQSx5Q0FBQTtBQVRKOztBQVlFO0VBQ0UscUNBQUE7RUFDQSwyQ0FBQTtBQVZKOztBQWFFO0VBQ0UscUNBQUE7RUFDQSx5Q0FBQTtBQVhKOztBQWVFO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFiRjs7QUFnQkE7RUFDRSxlQUFBO0FBZEY7O0FBaUJBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFmRiIsImZpbGUiOiJjYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZS9taXhpbnMvc2Nyb2xsYmFyc1wiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuXG4gIC0tcGFnZS1jYXRlZ29yaWFzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcblxuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5jYXRlZ29yaWFzLWxpc3Qge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLWNhdGVnb3JpYXMtZ3V0dGVyKTtcblxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtY2F0ZWdvcmlhcy1ndXR0ZXIpICogMyk7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcblxuICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBwYWRkaW5nOiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRyYXZlbC1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICMwMDA2MDg0ZDtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDAsMTc1LDI1NTtcbiAgfVxuXG4gIC5mYXNoaW9uLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwMDYwODRkO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjAzLDUwLDE0MztcbiAgfVxuXG4gIC5mb29kLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwMDYwODRkO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjM1LDE4NywwO1xuICB9XG5cbiAgLmRlYWxzLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwMDYwODRkO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMTEyLDIyMywxMTI7XG4gIH1cblxuICAucmVhbC1lc3RhdGUtY2F0ZWdvcnkge1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjMDAwNjA4NGQ7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMTcsNjksNTg7XG4gIH1cblxuXG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cbiBcbi5jYXJ0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4gXG4uY2FydC1sZW5ndGgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1pbi13aWR0aDogMjVweDtcbiAgei1pbmRleDogMTA7XG59XG59XG4iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 51914:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/categorias/styles/categorias.responsive.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .categorias-list .category-item .category-anchor .category-title {\n    font-size: 14px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .categorias-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categorias-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categorias-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpYXMucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFhUTtJQUNFLGVBQUE7RUFoQlI7QUFDRjtBQXNCQSxxREFBQTtBQWNBLGtEQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw0REFBQTtFQTVDUjtBQUNGO0FBa0RBLHFDQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw0REFBQTtFQTNEUjtBQUNGO0FBaUVBLGlEQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw0REFBQTtFQTFFUjtBQUNGIiwiZmlsZSI6ImNhdGVnb3JpYXMucmVzcG9uc2l2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxuXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuY2F0ZWdvcmlhcy1saXN0IHtcbiAgICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuY2F0ZWdvcmlhcy1saXN0IHtcbiAgICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC8gMikgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNhdGVnb3JpYXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNhdGVnb3JpYXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 52273:
/*!**************************************************************************!*\
  !*** ./src/app/pages/categorias/styles/categorias.shell.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "app-image-shell.category-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpYXMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdGQUFBO0VBQ0Esc0RBQUE7QUFDRiIsImZpbGUiOiJjYXRlZ29yaWFzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwuY2F0ZWdvcnktY292ZXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiKSwgLjI1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuIl19 */";

/***/ }),

/***/ 30659:
/*!******************************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Tiendas\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\" (click)=\"openCart()\" #cart>\n      <ion-button>\n        <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n        <ion-icon name=\"cart-outline\" class=\"cart-icon\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"categorias-list\">\n    <ion-col class=\"category-item deals-category\" *ngFor=\"let item of items\" size=\"{{item.tamano}}\">\n      <app-image-shell [display]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"item.imagen\">\n        <app-aspect-ratio [ratio]=\"{w:100, h:35}\">\n          <a class=\"category-anchor\" (click)=\"openTiendas(item.id, item.categoria)\">\n            <h2 class=\"category-title\">{{item.categoria}}</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<!-- <ion-footer>\n  <div style=\"text-align: center;font-size: 10px;\">\n    Versión {{version}}\n  </div>\n</ion-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categorias_categorias_module_ts.js.map