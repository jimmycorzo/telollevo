"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tiendas_tiendas_module_ts"],{

/***/ 80865:
/*!*********************************************************!*\
  !*** ./src/app/pages/tiendas/tiendas-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiendasPageRoutingModule": () => (/* binding */ TiendasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tiendas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiendas.page */ 24818);




const routes = [
    {
        path: '',
        component: _tiendas_page__WEBPACK_IMPORTED_MODULE_0__.TiendasPage,
    }
];
let TiendasPageRoutingModule = class TiendasPageRoutingModule {
};
TiendasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TiendasPageRoutingModule);



/***/ }),

/***/ 49134:
/*!*************************************************!*\
  !*** ./src/app/pages/tiendas/tiendas.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiendasPageModule": () => (/* binding */ TiendasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/components/components.module */ 45642);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _tiendas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiendas.page */ 24818);
/* harmony import */ var _tiendas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiendas-routing.module */ 80865);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/firebase.service */ 19446);








// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
const tiendasRoutes = [
    {
        path: '',
        component: _tiendas_page__WEBPACK_IMPORTED_MODULE_1__.TiendasPage
    }
];
let TiendasPageModule = class TiendasPageModule {
};
TiendasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _tiendas_routing_module__WEBPACK_IMPORTED_MODULE_2__.TiendasPageRoutingModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        ],
        declarations: [_tiendas_page__WEBPACK_IMPORTED_MODULE_1__.TiendasPage],
        providers: [
            app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService,
            // InAppBrowser
        ]
    })
], TiendasPageModule);



/***/ }),

/***/ 24818:
/*!***********************************************!*\
  !*** ./src/app/pages/tiendas/tiendas.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiendasPage": () => (/* binding */ TiendasPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tiendas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiendas.page.html?ngResource */ 90661);
/* harmony import */ var _styles_tiendas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/tiendas.page.scss?ngResource */ 38882);
/* harmony import */ var _styles_tiendas_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/tiendas.shell.scss?ngResource */ 44276);
/* harmony import */ var _styles_tiendas_responsive_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/tiendas.responsive.scss?ngResource */ 23676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/tiendas.model */ 95098);
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shell/data-store */ 29760);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/firebase.service */ 19446);
/* harmony import */ var app_services_carrito_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/carrito.service */ 21635);
/* harmony import */ var app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/carrito/carrito.page */ 52905);
/* harmony import */ var app_pages_buscar_buscar_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/buscar/buscar.page */ 28691);


















let TiendasPage = class TiendasPage {
  constructor(router, firebaseService, modalController, route, routerOutlet, cartService, modalCtrl) {
    this.router = router;
    this.firebaseService = firebaseService;
    this.modalController = modalController;
    this.route = route;
    this.routerOutlet = routerOutlet;
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
      const dataSource = this.firebaseService.getTiendasDataSource(this.categoriaId);
      const dataStore = this.firebaseService.getTiendasStore(this.categoriaId, dataSource);
      this.tiendasDataStore = dataStore; // We need to avoid having multiple firebase subscriptions open at the same time to avoid memory leaks
      // By using a switchMap to cancel previous subscription each time a new one arrives,
      // we ensure having just one subscription (the latest)

      const updateSearchObservable = this.searchFiltersObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(filters => {
        const filteredDataSource = this.firebaseService.searchTiendas(); // Send a shell until we have filtered data from Firebase

        const searchingShellModel = [new app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_5__.TiendasModel(), new app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_5__.TiendasModel()]; // Wait on purpose some time to ensure the shell animation gets shown while loading filtered data

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

      this.stateSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(this.tiendasDataStore.state, updateSearchObservable).subscribe(state => {
        state.forEach(element => {
          if (element != null && element.mishorarios != null) {
            const hora = String("0" + new Date().getHours()).slice(-2) + ':' + String("0" + new Date().getMinutes()).slice(-2);
            element.cerrada = !(hora >= element.mishorarios.desde && hora <= element.mishorarios.hasta); // element.mishorarios.desde = new Date('1968-11-16T' + element.mishorarios.desde).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            // element.mishorarios.hasta = new Date('1968-11-16T' + element.mishorarios.desde).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          } else element.cerrada = false;
        });
        this.items = state;
        console.log('Items de tiendas', state);
      }, error => console.log(error), () => console.log('stateSubscription completed'));
    }, error => console.log(error));
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
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalCtrl.create({
        component: app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_9__.CarritoPage,
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

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this2.modalCtrl.create({
        component: app_pages_buscar_buscar_page__WEBPACK_IMPORTED_MODULE_10__.BuscarPage,
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
  }

};

TiendasPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
}, {
  type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_7__.FirebaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRouterOutlet
}, {
  type: app_services_carrito_service__WEBPACK_IMPORTED_MODULE_8__.CarritoService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
}];

TiendasPage.propDecorators = {
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
TiendasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: 'app-tiendas',
  template: _tiendas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_tiendas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _styles_tiendas_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__, _styles_tiendas_responsive_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], TiendasPage);


/***/ }),

/***/ 38882:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tiendas/styles/tiendas.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-tiendas-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n}\n\n.tiendas-list {\n  --ion-grid-column-padding: var(--page-tiendas-gutter);\n  padding: calc(var(--page-tiendas-gutter) * 3);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.tiendas-list::-webkit-scrollbar {\n  display: none;\n}\n\n.tiendas-list .tienda-name {\n  margin: auto;\n  font-size: 22px;\n  display: inline-block;\n  color: black;\n  z-index: 2000;\n  left: 20px;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  /* This is the dangerous one in WebKit, as it breaks things wherever */\n  /* Instead use this non-standard one: */\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: none;\n  hyphens: none;\n  word-break: keep-all;\n  width: 140px;\n  top: 40px;\n  position: absolute;\n}\n\n.tiendas-list .category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.tiendas-list .category-item .category-anchor .category-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: calc(var(--page-margin) / 4 * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n  text-align: center;\n}\n\n.tiendas-list .category-item .category-anchor .category-prox {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 800;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: calc(var(--page-margin) / 4 * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n  text-align: center;\n}\n\n.tiendas-list .travel-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 0,175,255;\n}\n\n.tiendas-list .fashion-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 203,50,143;\n}\n\n.tiendas-list .food-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 235,187,0;\n}\n\n.tiendas-list .deals-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 112,223,112;\n}\n\n.tiendas-list .real-estate-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 217,69,58;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpZW5kYXMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHVDQUFBO0VBRUEsbURBQUE7RUFFQSxtREFBQTtFQUNBLDJEQUFBO0FBTEY7O0FBU0E7RUFDRSxxREFBQTtFQUVBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUNqQkEsd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEU0Y7O0FDTkU7RUFDRSxhQUFBO0FEUUo7O0FBSUU7RUFDTSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHlCQUFBO0VBQ0Esc0VBQUE7RUFFQSx1Q0FBQTtFQUdBLGlFQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFFQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBUFI7O0FBYUk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQVhOOztBQWFNO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtFQUNBLGdDQUFBO0VBQ0EsaURBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBWFI7O0FBY007RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFaUjs7QUFrQkU7RUFDRSxxQ0FBQTtFQUNBLHlDQUFBO0FBaEJKOztBQW1CRTtFQUNFLHFDQUFBO0VBQ0EsMENBQUE7QUFqQko7O0FBb0JFO0VBQ0UscUNBQUE7RUFDQSx5Q0FBQTtBQWxCSjs7QUFxQkU7RUFDRSxxQ0FBQTtFQUNBLDJDQUFBO0FBbkJKOztBQXNCRTtFQUNFLHFDQUFBO0VBQ0EseUNBQUE7QUFwQkoiLCJmaWxlIjoidGllbmRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcblxuICAtLXBhZ2UtdGllbmRhcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4udGllbmRhcy1saXN0IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS10aWVuZGFzLWd1dHRlcik7XG5cbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXRpZW5kYXMtZ3V0dGVyKSAqIDMpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG4gIC50aWVuZGEtbmFtZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICAgICAgbGVmdDoyMHB4O1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICAgICAgLW1zLXdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgLyogVGhpcyBpcyB0aGUgZGFuZ2Vyb3VzIG9uZSBpbiBXZWJLaXQsIGFzIGl0IGJyZWFrcyB0aGluZ3Mgd2hlcmV2ZXIgKi9cbiAgICAgICAgLy8gd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAvKiBJbnN0ZWFkIHVzZSB0aGlzIG5vbi1zdGFuZGFyZCBvbmU6ICovXG4gICAgICAgIC8vIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAgICAgLyogQWRkcyBhIGh5cGhlbiB3aGVyZSB0aGUgd29yZCBicmVha3MsIGlmIHN1cHBvcnRlZCAoTm8gQmxpbmspICovXG4gICAgICAgIC1tb3otaHlwaGVuczpub25lO1xuICAgICAgICAtbXMtaHlwaGVuczpub25lO1xuICAgICAgICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG4gICAgICAgIGh5cGhlbnM6bm9uZTtcbiAgICAgICAgd29yZC1icmVhazprZWVwLWFsbDtcblxuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXG5cblxufVxuXG4gIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHBhZGRpbmc6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpICogMykgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuY2F0ZWdvcnktcHJveCB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBwYWRkaW5nOiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC50cmF2ZWwtY2F0ZWdvcnkge1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjMDAwNjA4NGQ7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAwLDE3NSwyNTU7XG4gIH1cblxuICAuZmFzaGlvbi1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICMwMDA2MDg0ZDtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIwMyw1MCwxNDM7XG4gIH1cblxuICAuZm9vZC1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICMwMDA2MDg0ZDtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIzNSwxODcsMDtcbiAgfVxuXG4gIC5kZWFscy1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICMwMDA2MDg0ZDtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDExMiwyMjMsMTEyO1xuICB9XG5cbiAgLnJlYWwtZXN0YXRlLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwMDYwODRkO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjE3LDY5LDU4O1xuICB9XG59XG4iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 23676:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tiendas/styles/tiendas.responsive.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .tiendas-list .category-item .category-anchor .category-title {\n    font-size: 14px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .tiendas-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .tiendas-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .tiendas-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n    padding: var(--page-margin) calc(var(--page-margin) * 3 / 2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpZW5kYXMucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFhUTtJQUNFLGVBQUE7RUFoQlI7QUFDRjtBQXNCQSxxREFBQTtBQWNBLGtEQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw0REFBQTtFQTVDUjtBQUNGO0FBa0RBLHFDQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw0REFBQTtFQTNEUjtBQUNGO0FBaUVBLGlEQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw0REFBQTtFQTFFUjtBQUNGIiwiZmlsZSI6InRpZW5kYXMucmVzcG9uc2l2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxuXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAudGllbmRhcy1saXN0IHtcbiAgICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAudGllbmRhcy1saXN0IHtcbiAgICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC8gMikgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLnRpZW5kYXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLnRpZW5kYXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 44276:
/*!********************************************************************!*\
  !*** ./src/app/pages/tiendas/styles/tiendas.shell.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "app-image-shell.category-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n  padding: 10px !important;\n  box-shadow: 3px 3px 8px #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpZW5kYXMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdGQUFBO0VBQ0Esc0RBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FBQ0YiLCJmaWxlIjoidGllbmRhcy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLmNhdGVnb3J5LWNvdmVyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYiksIC4yNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjODg4ODg4O1xufVxuIl19 */";

/***/ }),

/***/ 90661:
/*!************************************************************!*\
  !*** ./src/app/pages/tiendas/tiendas.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tiendas\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{this.categoria}}\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"openSearch(this.categoria, this.categoriaId, '')\" #search>\n      <ion-button>\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\" (click)=\"openCart()\" #cart>\n      <ion-button>\n        <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n        <ion-icon name=\"cart-outline\" class=\"cart-icon\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"content-wrapper\">\n  <ion-row class=\"tiendas-list\">\n    <ion-col class=\"category-item deals-category\" *ngFor=\"let item of items\" size=\"{{item.tamano}}\"\n      [routerLink]=\"['/clases/', item.id, item.tienda, item?.cerrada, item?.mishorarios?.desde, item?.mishorarios?.hasta, item?.proximamente]\">\n      <app-image-shell [display]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"item.imagen\">\n        <app-aspect-ratio [ratio]=\"{w:100, h:32}\" *ngIf=\"item.tamano==12\">\n          <a class=\"category-anchor\" *ngIf=\"item?.tienda\">\n            <h2 class=\"category-title\" *ngIf=\"item?.cerrada && item?.mishorarios?.desde && !item?.proximamente\">cerrado.\n              abre\n              {{item?.mishorarios?.desde }}</h2>\n            <h2 class=\"category-title\" *ngIf=\"item?.cerrada && !item?.mishorarios?.desde && !item?.proximamente\">Hoy no\n              hay servicio</h2>\n            <h2 class=\"category-prox\" *ngIf=\"item?.proximamente\">Próximamente</h2>\n          </a>\n        </app-aspect-ratio>\n        <app-aspect-ratio [ratio]=\"{w:100, h:100}\" *ngIf=\"item.tamano==6\">\n          <a class=\"category-anchor\" *ngIf=\"item?.tienda\">\n            <h2 class=\"category-title\" *ngIf=\"item?.cerrada && item?.mishorarios?.desde && !item?.proximamente\">cerrado.\n              abre\n              {{item?.mishorarios?.desde }}</h2>\n            <h2 class=\"category-title\" *ngIf=\"item?.cerrada && !item?.mishorarios?.desde && !item?.proximamente\">Hoy no\n              hay servicio</h2>\n            <h2 class=\"category-prox\" *ngIf=\"item?.proximamente\">Próximamente</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tiendas_tiendas_module_ts.js.map