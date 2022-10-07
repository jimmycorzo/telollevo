"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_restaurantes_restaurantes_module_ts"],{

/***/ 84723:
/*!**********************************************!*\
  !*** ./src/app/models/restaurantes.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantesModel": () => (/* binding */ RestaurantesModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);

class RestaurantesModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 69045:
/*!*******************************************************************!*\
  !*** ./src/app/pages/restaurantes/restaurantes-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantesPageRoutingModule": () => (/* binding */ RestaurantesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _restaurantes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurantes.page */ 30487);




const routes = [
    {
        path: '',
        component: _restaurantes_page__WEBPACK_IMPORTED_MODULE_0__.RestaurantesPage,
    }
];
let RestaurantesPageRoutingModule = class RestaurantesPageRoutingModule {
};
RestaurantesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestaurantesPageRoutingModule);



/***/ }),

/***/ 25400:
/*!***********************************************************!*\
  !*** ./src/app/pages/restaurantes/restaurantes.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantesPageModule": () => (/* binding */ RestaurantesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/components/components.module */ 45642);
/* harmony import */ var app_pages_restaurantes_restaurantes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/restaurantes/restaurantes.page */ 30487);
/* harmony import */ var _restaurantes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurantes-routing.module */ 69045);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/firebase.service */ 19446);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);









// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
const restaurantesRoutes = [
    {
        path: '',
        component: app_pages_restaurantes_restaurantes_page__WEBPACK_IMPORTED_MODULE_1__.RestaurantesPage
    }
];
let RestaurantesPageModule = class RestaurantesPageModule {
};
RestaurantesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _restaurantes_routing_module__WEBPACK_IMPORTED_MODULE_2__.RestaurantesPageRoutingModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        ],
        declarations: [app_pages_restaurantes_restaurantes_page__WEBPACK_IMPORTED_MODULE_1__.RestaurantesPage],
        providers: [
            app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService,
            // InAppBrowser
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], RestaurantesPageModule);



/***/ }),

/***/ 30487:
/*!*********************************************************!*\
  !*** ./src/app/pages/restaurantes/restaurantes.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantesPage": () => (/* binding */ RestaurantesPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _restaurantes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurantes.page.html?ngResource */ 67283);
/* harmony import */ var _styles_restaurantes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/restaurantes.page.scss?ngResource */ 61368);
/* harmony import */ var _styles_restaurantes_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/restaurantes.shell.scss?ngResource */ 84148);
/* harmony import */ var _styles_restaurantes_responsive_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/restaurantes.responsive.scss?ngResource */ 68744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var app_models_restaurantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/restaurantes.model */ 84723);
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shell/data-store */ 29760);
/* harmony import */ var app_services_carrito_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/carrito.service */ 21635);
/* harmony import */ var app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/carrito/carrito.page */ 52905);
/* harmony import */ var _buscar_buscar_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../buscar/buscar.page */ 28691);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/firebase.service */ 19446);


















let RestaurantesPage = class RestaurantesPage {
  constructor(router, firebaseService, modalController, route, cartService, modalCtrl) {
    this.router = router;
    this.firebaseService = firebaseService;
    this.modalController = modalController;
    this.route = route;
    this.cartService = cartService;
    this.modalCtrl = modalCtrl;
    this.showAgeFilter = false;
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.ReplaySubject(1);
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
    this.route.params.subscribe(params => {
      this.categoriaId = params.categoriaId;
      this.categoria = params.categoria;
    });
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.searchQuery = '';
    this.rangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl({
        lower: 1,
        upper: 100
      })
    });
    this.route.data.subscribe(resolvedRouteData => {
      const dataSource = this.firebaseService.getTiendasDataSource('restaurantes');
      const dataStore = this.firebaseService.getTiendasStore('restaurantes', dataSource);
      this.restaurantesDataStore = dataStore; // We need to avoid having multiple firebase subscriptions open at the same time to avoid memory leaks
      // By using a switchMap to cancel previous subscription each time a new one arrives,
      // we ensure having just one subscription (the latest)

      const updateSearchObservable = this.searchFiltersObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(filters => {
        const filteredDataSource = this.firebaseService.searchTiendas(); // Send a shell until we have filtered data from Firebase

        const searchingShellModel = [new app_models_restaurantes_model__WEBPACK_IMPORTED_MODULE_5__.RestaurantesModel(), new app_models_restaurantes_model__WEBPACK_IMPORTED_MODULE_5__.RestaurantesModel()]; // Wait on purpose some time to ensure the shell animation gets shown while loading filtered data

        const searchingDelay = 400;
        const dataSourceWithShellObservable = app_shell_data_store__WEBPACK_IMPORTED_MODULE_6__.DataStore.AppendShell(filteredDataSource, searchingShellModel, searchingDelay);
        return dataSourceWithShellObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(filteredItems => {
          // Just filter items by name if there is a search query and they are not shell values
          if (filters.query !== '' && !filteredItems.isShell) {
            const queryFilteredItems = filteredItems.filter(item => item.tienda.toLowerCase().includes(filters.query.toLowerCase())); // While filtering we strip out the isShell property, add it again

            return Object.assign(queryFilteredItems, {
              isShell: filteredItems.isShell
            });
          } else {
            return filteredItems;
          }
        }));
      })); // Keep track of the subscription to unsubscribe onDestroy
      // Merge filteredData with the original dataStore state

      this.stateSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(this.restaurantesDataStore.state, updateSearchObservable).subscribe(state => {
        state.forEach(element => {
          if (element != null && element.mishorarios != null) {
            const hora = String("0" + new Date().getHours()).slice(-2) + ':' + String("0" + new Date().getMinutes()).slice(-2);
            element.cerrada = !(hora >= element.mishorarios.desde && hora <= element.mishorarios.hasta); // element.mishorarios.desde = new Date('1968-11-16T' + element.mishorarios.desde).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            // element.mishorarios.hasta = new Date('1968-11-16T' + element.mishorarios.desde).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          } else element.cerrada = false;
        });
        this.items = state;
        this.itemsList = state;
        this.searchList();
        console.log('Items de restaurantes', state);
      }, error => console.log(error), () => console.log('stateSubscription completed'));
    }, error => console.log(error));
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {
    var _this = this;

    return (0,_Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalCtrl.create({
        component: app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_8__.CarritoPage,
        cssClass: 'cart-modal'
      });
      modal.onWillDismiss().then(() => {
        _this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      });
      modal.present();
    })();
  }

  openSearch(titulo, categoriaId, tiendaId) {
    var _this2 = this;

    return (0,_Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this2.modalCtrl.create({
        component: _buscar_buscar_page__WEBPACK_IMPORTED_MODULE_9__.BuscarPage,
        cssClass: 'cart-modal',
        componentProps: {
          'titulo': titulo,
          'categoriaId': categoriaId,
          'tiendaId': tiendaId
        }
      });
      modal.onWillDismiss().then(() => {
        _this2.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      });
      modal.present();
    })();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  } // openTienda(tiendaId: string, tienda: string) {
  //   if (this.categoriaId != 'colegios')
  //     this.router.navigate(['/clases/', tiendaId, tienda], { replaceUrl: true });
  // }


  searchList() {
    const query = this.searchQuery && this.searchQuery !== null ? this.searchQuery : '';
    this.itemsList = this.filterList(this.items, query);
  }

  filterList(list, query) {
    const lista = list.filter(item => item.tienda.toLowerCase().includes(query.toLowerCase()));
    return lista;
  }

};

RestaurantesPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
}, {
  type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__.FirebaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
}, {
  type: app_services_carrito_service__WEBPACK_IMPORTED_MODULE_7__.CarritoService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
}];

RestaurantesPage.propDecorators = {
  isShell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.HostBinding,
    args: ['class.is-shell']
  }],
  fab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild,
    args: ['cart', {
      static: false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ElementRef
    }]
  }]
};
RestaurantesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: 'app-restaurantes',
  template: _restaurantes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_restaurantes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _styles_restaurantes_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__, _styles_restaurantes_responsive_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], RestaurantesPage);


/***/ }),

/***/ 61368:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/restaurantes/styles/restaurantes.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-tiendas-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n}\n\n.tiendas-list {\n  --ion-grid-column-padding: var(--page-tiendas-gutter);\n  padding: calc(var(--page-tiendas-gutter) * 3);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.tiendas-list::-webkit-scrollbar {\n  display: none;\n}\n\n.tiendas-list .tienda-name {\n  margin: auto;\n  font-size: 22px;\n  display: inline-block;\n  color: black;\n  z-index: 2000;\n  left: 20px;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  /* This is the dangerous one in WebKit, as it breaks things wherever */\n  /* Instead use this non-standard one: */\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: none;\n  hyphens: none;\n  word-break: keep-all;\n  width: 140px;\n  top: 40px;\n  position: absolute;\n}\n\n.tiendas-list .category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.tiendas-list .category-item .category-anchor .category-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: calc(var(--page-margin) / 4 * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n  text-align: center;\n}\n\n.tiendas-list .category-item .category-anchor .category-prox {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 800;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: calc(var(--page-margin) / 4 * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n  text-align: center;\n}\n\n.tiendas-list .travel-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 0,175,255;\n}\n\n.tiendas-list .fashion-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 203,50,143;\n}\n\n.tiendas-list .food-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 235,187,0;\n}\n\n.tiendas-list .deals-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 112,223,112;\n}\n\n.tiendas-list .real-estate-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 217,69,58;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnRlcy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvc2Nyb2xsYmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsdUNBQUE7RUFFQSxtREFBQTtFQUVBLG1EQUFBO0VBQ0EsMkRBQUE7QUFMRjs7QUFTQTtFQUNFLHFEQUFBO0VBRUEsNkNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQ2pCQSx3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QURTRjs7QUNORTtFQUNFLGFBQUE7QURRSjs7QUFJRTtFQUNNLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEseUJBQUE7RUFDQSxzRUFBQTtFQUVBLHVDQUFBO0VBR0EsaUVBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUVBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFQUjs7QUFhSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBWE47O0FBYU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFYUjs7QUFjTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQVpSOztBQWtCRTtFQUNFLHFDQUFBO0VBQ0EseUNBQUE7QUFoQko7O0FBbUJFO0VBQ0UscUNBQUE7RUFDQSwwQ0FBQTtBQWpCSjs7QUFvQkU7RUFDRSxxQ0FBQTtFQUNBLHlDQUFBO0FBbEJKOztBQXFCRTtFQUNFLHFDQUFBO0VBQ0EsMkNBQUE7QUFuQko7O0FBc0JFO0VBQ0UscUNBQUE7RUFDQSx5Q0FBQTtBQXBCSiIsImZpbGUiOiJyZXN0YXVyYW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG5cbiAgLS1wYWdlLXRpZW5kYXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYik7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnRpZW5kYXMtbGlzdCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtdGllbmRhcy1ndXR0ZXIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS10aWVuZGFzLWd1dHRlcikgKiAzKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuICAudGllbmRhLW5hbWUge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICAgIGxlZnQ6MjBweDtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgIC1tcy13b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgIC8qIFRoaXMgaXMgdGhlIGRhbmdlcm91cyBvbmUgaW4gV2ViS2l0LCBhcyBpdCBicmVha3MgdGhpbmdzIHdoZXJldmVyICovXG4gICAgICAgIC8vIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgLyogSW5zdGVhZCB1c2UgdGhpcyBub24tc3RhbmRhcmQgb25lOiAqL1xuICAgICAgICAvLyB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gICAgICAgIC8qIEFkZHMgYSBoeXBoZW4gd2hlcmUgdGhlIHdvcmQgYnJlYWtzLCBpZiBzdXBwb3J0ZWQgKE5vIEJsaW5rKSAqL1xuICAgICAgICAtbW96LWh5cGhlbnM6bm9uZTtcbiAgICAgICAgLW1zLWh5cGhlbnM6bm9uZTtcbiAgICAgICAgLXdlYmtpdC1oeXBoZW5zOiBub25lO1xuICAgICAgICBoeXBoZW5zOm5vbmU7XG4gICAgICAgIHdvcmQtYnJlYWs6a2VlcC1hbGw7XG5cbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxuXG5cbn1cblxuICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBwYWRkaW5nOiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmNhdGVnb3J5LXByb3gge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgcGFkZGluZzogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgKiAzKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAudHJhdmVsLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwMDYwODRkO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMCwxNzUsMjU1O1xuICB9XG5cbiAgLmZhc2hpb24tY2F0ZWdvcnkge1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjMDAwNjA4NGQ7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMDMsNTAsMTQzO1xuICB9XG5cbiAgLmZvb2QtY2F0ZWdvcnkge1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjMDAwNjA4NGQ7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMzUsMTg3LDA7XG4gIH1cblxuICAuZGVhbHMtY2F0ZWdvcnkge1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjMDAwNjA4NGQ7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAxMTIsMjIzLDExMjtcbiAgfVxuXG4gIC5yZWFsLWVzdGF0ZS1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICMwMDA2MDg0ZDtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIxNyw2OSw1ODtcbiAgfVxufVxuIiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 68744:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/restaurantes/styles/restaurantes.responsive.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .clases-list .category-item .category-anchor .category-title {\n    font-size: 14px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .clases-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .clases-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .clases-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnRlcy5yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsNENBQUE7QUFDQTtFQWFRO0lBQ0UsZUFBQTtFQWhCUjtBQUNGO0FBc0JBLHFEQUFBO0FBY0Esa0RBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDREQUFBO0VBNUNSO0FBQ0Y7QUFrREEscUNBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDREQUFBO0VBM0RSO0FBQ0Y7QUFpRUEsaURBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDREQUFBO0VBMUVSO0FBQ0YiLCJmaWxlIjoicmVzdGF1cmFudGVzLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNsYXNlcy1saXN0IHtcbiAgICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuY2xhc2VzLWxpc3Qge1xuICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgIC5jYXRlZ29yeS1hbmNob3Ige1xuICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKSA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuY2xhc2VzLWxpc3Qge1xuICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgIC5jYXRlZ29yeS1hbmNob3Ige1xuICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKSA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5jbGFzZXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 84148:
/*!******************************************************************************!*\
  !*** ./src/app/pages/restaurantes/styles/restaurantes.shell.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "app-image-shell.clases-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n  border-radius: 7px;\n  padding: 10px !important;\n  box-shadow: 3px 3px 8px #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnRlcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0ZBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBQUNGIiwiZmlsZSI6InJlc3RhdXJhbnRlcy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLmNsYXNlcy1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2IpLCAuMjUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjODg4ODg4O1xufVxuIl19 */";

/***/ }),

/***/ 67283:
/*!**********************************************************************!*\
  !*** ./src/app/pages/restaurantes/restaurantes.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Restaurantes\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\" (click)=\"openCart()\" #cart>\n      <ion-button>\n        <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n        <ion-icon name=\"cart-outline\" class=\"cart-icon\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n  <ion-searchbar class=\"servicios-searchbar\" placeholder=\"Buscar en Restaurantes\" animated [(ngModel)]=\"searchQuery\"\n    (ionChange)=\"searchList()\"></ion-searchbar>\n</ion-header>\n<ion-content class=\"content-wrapper\">\n  <ion-row class=\"tiendas-list\">\n    <ion-col class=\"category-item deals-category\" *ngFor=\"let item of itemsList\" size=\"{{item.tamano}}\"\n      [routerLink]=\"['/clases/', item.id, item.tienda, item?.cerrada, item?.mishorarios?.desde, item?.mishorarios?.hasta, item?.proximamente]\">\n      <app-image-shell [display]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"item.imagen\">\n        <app-aspect-ratio [ratio]=\"{w:100, h:32}\" *ngIf=\"item.tamano==12\">\n          <a class=\"category-anchor\" *ngIf=\"item?.tienda\">\n            <h2 class=\"category-title\" *ngIf=\"item?.cerrada && item?.mishorarios?.desde && !item?.proximamente\">cerrado.\n              abre\n              {{item?.mishorarios?.desde }}</h2>\n            <h2 class=\"category-title\" *ngIf=\"item?.cerrada && !item?.mishorarios?.desde && !item?.proximamente\">Hoy no\n              hay servicio</h2>\n            <h2 class=\"category-prox\" *ngIf=\"item?.proximamente\">Próximamente</h2>\n          </a>\n        </app-aspect-ratio>\n        <app-aspect-ratio [ratio]=\"{w:100, h:100}\" *ngIf=\"item.tamano==6\">\n          <a class=\"category-anchor\" *ngIf=\"item?.tienda\">\n            <h2 class=\"category-title\" *ngIf=\"item?.cerrada && item?.mishorarios?.desde && !item?.proximamente\">cerrado.\n              abre\n              {{item?.mishorarios?.desde }}</h2>\n            <h2 class=\"category-title\" *ngIf=\"item?.cerrada && !item?.mishorarios?.desde && !item?.proximamente\">Hoy no\n              hay servicio</h2>\n            <h2 class=\"category-prox\" *ngIf=\"item?.proximamente\">Próximamente</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_restaurantes_restaurantes_module_ts.js.map