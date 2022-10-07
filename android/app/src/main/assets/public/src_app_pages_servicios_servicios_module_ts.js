"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_servicios_servicios_module_ts"],{

/***/ 25946:
/*!*************************************************************!*\
  !*** ./src/app/pages/servicios/servicios-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPageRoutingModule": () => (/* binding */ ServiciosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicios.page */ 55823);




const routes = [
    {
        path: '',
        component: _servicios_page__WEBPACK_IMPORTED_MODULE_0__.ServiciosPage
    }
];
let ServiciosPageRoutingModule = class ServiciosPageRoutingModule {
};
ServiciosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServiciosPageRoutingModule);



/***/ }),

/***/ 86453:
/*!*****************************************************!*\
  !*** ./src/app/pages/servicios/servicios.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPageModule": () => (/* binding */ ServiciosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _servicios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicios-routing.module */ 25946);
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.page */ 55823);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/components.module */ 45642);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/firebase.service */ 19446);









let ServiciosPageModule = class ServiciosPageModule {
};
ServiciosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _servicios_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiciosPageRoutingModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_servicios_page__WEBPACK_IMPORTED_MODULE_1__.ServiciosPage],
        providers: [
            app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService,
        ]
    })
], ServiciosPageModule);



/***/ }),

/***/ 55823:
/*!***************************************************!*\
  !*** ./src/app/pages/servicios/servicios.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPage": () => (/* binding */ ServiciosPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _servicios_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.page.html?ngResource */ 12875);
/* harmony import */ var _styles_servicios_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/servicios.page.scss?ngResource */ 76922);
/* harmony import */ var _styles_servicios_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/servicios.shell.scss?ngResource */ 2207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/firebase.service */ 19446);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/carrito/carrito.page */ 52905);
/* harmony import */ var app_services_carrito_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/carrito.service */ 21635);












let ServiciosPage = class ServiciosPage {
  constructor(firebaseService, modalCtrl, route, cartService) {
    this.firebaseService = firebaseService;
    this.modalCtrl = modalCtrl;
    this.route = route;
    this.cartService = cartService;
    this.searchQuery = '';
    this.segmentValue = '';
    this.cart = [];
    this.products = [];
  }

  get isShell() {
    return this ? true : false;
  }

  ngOnDestroy() {
    this.stateSubscriptionServicios.unsubscribe();
  }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.subscriptions = this.route.data.subscribe(resolvedRouteData => {
      const dataSource = this.firebaseService.getServiciosDataSource();
      const dataStore = this.firebaseService.getServiciosStore(dataSource);
      this.serviciosDataStore = dataStore;
      this.stateSubscriptionServicios = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.serviciosDataStore.state).subscribe(state => {
        this.servicios = state;
        this.servicios.forEach(element => {
          element.imagenes.sort();
        });
        this.serviciosList = state;
        this.searchList();
      }, error => console.log(error), () => console.log('stateSubscriptionServicios completed'));
    }, error => console.log(error));
  }

  segmentChanged(ev) {
    this.segmentValue = ev.detail.value;
    this.searchList();
  }

  searchList() {
    const query = this.searchQuery && this.searchQuery !== null ? this.searchQuery : '';
    this.serviciosList = this.filterList(this.servicios, query);
  }

  filterList(list, query) {
    const lista = list.filter(item => item.servicio.toLowerCase().includes(query.toLowerCase()));
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

  openCart() {
    var _this = this;

    return (0,_Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalCtrl.create({
        component: app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_5__.CarritoPage,
        cssClass: 'cart-modal'
      });
      modal.onWillDismiss().then(() => {});
      modal.present();
    })();
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precioVlr * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkout() {}

};

ServiciosPage.ctorParameters = () => [{
  type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: app_services_carrito_service__WEBPACK_IMPORTED_MODULE_6__.CarritoService
}];

ServiciosPage.propDecorators = {
  isShell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostBinding,
    args: ['class.is-shell']
  }],
  fab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ['detalles', {
      static: false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }]
  }]
};
ServiciosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-servicios',
  template: _servicios_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_servicios_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _styles_servicios_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ServiciosPage);


/***/ }),

/***/ 76922:
/*!***********************************************************************!*\
  !*** ./src/app/pages/servicios/styles/servicios.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-clases-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n  --page-actions-padding: 5px;\n  --page-departamentos-gutter: calc(var(--page-margin) / 2);\n  --page-pictures-gutter: calc(var(--page-margin) / 2);\n}\n\n.deals-category {\n  --page-category-background: #0006084d;\n  --page-category-background-rgb: 112,223,112;\n}\n\n.category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.category-item .category-anchor .clase-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: calc(var(--page-margin) / 4 * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n}\n\n.servicios-list {\n  --ion-grid-column-padding: var(--page-tiendas-gutter);\n  padding: calc(var(--page-tiendas-gutter) * 3);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.servicios-list::-webkit-scrollbar {\n  display: none;\n}\n\n.servicios-list .tienda-name {\n  margin: auto;\n  font-size: 22px;\n  display: inline-block;\n  color: black;\n  z-index: 2000;\n  left: 20px;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  /* This is the dangerous one in WebKit, as it breaks things wherever */\n  /* Instead use this non-standard one: */\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: none;\n  hyphens: none;\n  word-break: keep-all;\n  width: 140px;\n  top: 40px;\n  position: absolute;\n}\n\n.servicios-list .category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.servicios-list .category-item .category-anchor .category-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: calc(var(--page-margin) / 4 * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n  text-align: center;\n}\n\n.servicios-list .servicio-image-wrapper .image-anchor {\n  display: flexbox;\n  position: relative;\n}\n\n.servicios-list .servicio-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n}\n\n.servicios-list .servicio-data-wrapper .servicio-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.servicios-list .servicio-data-wrapper .servicio-info .servicio-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 18px !important;\n  text-transform: capitalize !important;\n}\n\n.servicios-list .servicio-data-wrapper .servicio-info .servicio-presentacion {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 16px !important;\n}\n\n.servicios-list .servicio-data-wrapper .servicio-info .servicio-precio {\n  margin: 0px;\n  color: red;\n  font-size: 18px !important;\n  float: left;\n}\n\n.servicios-list .servicio-data-wrapper .servicio-info .servicio-descuento {\n  margin: 0 0 0 10px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 16px !important;\n  text-decoration: line-through;\n  float: left;\n}\n\n.servicios-list .servicio-porcentaje {\n  position: absolute;\n  font-size: 14px !important;\n  z-index: 1002;\n  right: -15px !important;\n  top: -15px !important;\n  --inner-border-width: 0 0 0 0;\n  --background: var(--ion-item-background, var(--ion-background-color, #transparent));\n}\n\n.servicios-list .servicio-actions-wrapper {\n  font-size: 14px;\n  max-width: 10ex;\n  max-width: 10ch;\n}\n\n.servicios-list .servicio-actions-wrapper .servicio-action {\n  margin: 0px;\n}\n\n.servicio-friends-segment {\n  --background: var(--page-segment-background);\n  position: sticky;\n  top: 0;\n  z-index: 8;\n}\n\n.servicio-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --indicator-color: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc(var(--page-margin) * 3 - var(--page-segment-indicator-height));\n}\n\nion-searchbar.friends-searchbar {\n  padding: calc(var(--page-margin) * 1.5) var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n}\n\nion-item.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\ninput[type=number] {\n  -webkit-appearance: textfield !important;\n  appearance: textfield !important;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.wrapper-plusminus {\n  border: black solid thin;\n  width: 30vw;\n  padding: 0px;\n  display: flex;\n  border-radius: 10px;\n  float: right;\n  top: -5px;\n  position: relative;\n}\n\n.plusminus {\n  height: 100%;\n  width: 30%;\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  color: #5f5fce;\n  outline: none;\n}\n\n.num {\n  width: 39%;\n  border: none;\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2lvcy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvc2Nyb2xsYmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsdUNBQUE7RUFFQSxrREFBQTtFQUVBLG1EQUFBO0VBQ0EsMkRBQUE7RUFFQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7QUFORjs7QUFTRTtFQUNFLHFDQUFBO0VBQ0EsMkNBQUE7QUFOSjs7QUFTSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBTk47O0FBUU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtFQUNBLHFDQUFBO0FBTlI7O0FBWUE7RUFDRSxxREFBQTtFQUVBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUMvQ0Esd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEb0NGOztBQ2pDRTtFQUNFLGFBQUE7QURtQ0o7O0FBT0U7RUFDTSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHlCQUFBO0VBQ0Esc0VBQUE7RUFFQSx1Q0FBQTtFQUdBLGlFQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFFQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBVlI7O0FBZ0JJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFkTjs7QUFnQk07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFkUjs7QUFxQlU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBbkJaOztBQXVCSTtFQUNFLGdDQUFBO0VBQ0EsMkNBQUE7QUFyQk47O0FBMkJRO0VBQ0UsMkNBQUE7QUF6QlY7O0FBNEJRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtBQTFCVjs7QUE2QlE7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQkFBQTtBQTNCVjs7QUE4QlE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQTVCVjs7QUErQlE7RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUE3QlY7O0FBbUNRO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFFRCxtRkFBQTtBQWxDVDs7QUFzQ1E7RUFDRixlQUFBO0VBS0EsZUFBQTtFQUNBLGVBQUE7QUF4Q047O0FBMENNO0VBQ0UsV0FBQTtBQXhDUjs7QUErQ0E7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUE1Q0Y7O0FBOENFO0VBQ0UsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esd0NBQUE7RUFFQSwwQkFBQTtFQUNBLCtFQUFBO0FBN0NKOztBQWlEQTtFQUNFLDBEQUFBO0FBOUNGOztBQWlEQTtFQUNFLCtCQUFBO0VBQ0EsMkNBQUE7QUE5Q0Y7O0FBaURBO0VBQ0Usb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBOUNGOztBQWlEQTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQTlDRjs7QUFnREU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUE5Q0o7O0FBdURBO0VBQ0Usd0NBQUE7RUFFQSxnQ0FBQTtBQXBERjs7QUF1REE7O0VBRUksd0JBQUE7QUFwREo7O0FBdURBO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFyREo7O0FBd0RBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFyREo7O0FBd0RBO0VBRUUsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Ysa0JBQUE7QUF0REEiLCJmaWxlIjoic2VydmljaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZS9taXhpbnMvc2Nyb2xsYmFyc1wiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuXG4gIC0tcGFnZS1jbGFzZXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYik7XG5cbiAgLS1wYWdlLWFjdGlvbnMtcGFkZGluZzogNXB4O1xuICAtLXBhZ2UtZGVwYXJ0YW1lbnRvcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbn1cbiAgLmRlYWxzLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwMDYwODRkO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMTEyLDIyMywxMTI7XG4gIH1cbiAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgIC5jYXRlZ29yeS1hbmNob3Ige1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAuY2xhc2UtdGl0bGUge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgcGFkZGluZzogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgKiAzKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5zZXJ2aWNpb3MtbGlzdCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtdGllbmRhcy1ndXR0ZXIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS10aWVuZGFzLWd1dHRlcikgKiAzKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuICAudGllbmRhLW5hbWUge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICAgIGxlZnQ6MjBweDtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgIC1tcy13b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgIC8qIFRoaXMgaXMgdGhlIGRhbmdlcm91cyBvbmUgaW4gV2ViS2l0LCBhcyBpdCBicmVha3MgdGhpbmdzIHdoZXJldmVyICovXG4gICAgICAgIC8vIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgLyogSW5zdGVhZCB1c2UgdGhpcyBub24tc3RhbmRhcmQgb25lOiAqL1xuICAgICAgICAvLyB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gICAgICAgIC8qIEFkZHMgYSBoeXBoZW4gd2hlcmUgdGhlIHdvcmQgYnJlYWtzLCBpZiBzdXBwb3J0ZWQgKE5vIEJsaW5rKSAqL1xuICAgICAgICAtbW96LWh5cGhlbnM6bm9uZTtcbiAgICAgICAgLW1zLWh5cGhlbnM6bm9uZTtcbiAgICAgICAgLXdlYmtpdC1oeXBoZW5zOiBub25lO1xuICAgICAgICBoeXBoZW5zOm5vbmU7XG4gICAgICAgIHdvcmQtYnJlYWs6a2VlcC1hbGw7XG5cbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxuXG5cbn1cblxuIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHBhZGRpbmc6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpICogMykgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZXJ2aWNpby1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIC5pbWFnZS1hbmNob3Ige1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4Ym94O1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAuc2VydmljaW8tZGF0YS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLy8ganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuXG4gICAgICAuc2VydmljaW8taW5mbyB7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZXJ2aWNpby1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICAgICB9XG5cbiAgICAgICAgLnNlcnZpY2lvLXByZXNlbnRhY2lvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZXJ2aWNpby1wcmVjaW8ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zZXJ2aWNpby1kZXNjdWVudG8ge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgLnNlcnZpY2lvLXBvcmNlbnRhamUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAyO1xuICAgICAgICAgIHJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHRvcDogLTE1cHggIWltcG9ydGFudDsgXG4gICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG5cbiAgXHQgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjdHJhbnNwYXJlbnQpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLnNlcnZpY2lvLWFjdGlvbnMtd3JhcHBlciB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgMTAgY2hhcmFjdGVyc1xuICAgICAgLy8gQXMgY2ggKHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgJzAnKSB1bml0IGlzIG5vdCAxMDAlIHN1cHBvcnRlZCwgd2Ugd2lsbCB1c2UgZXggKGhlaWdodCBvZiB0aGUgJ3gnIGNoYXJhY3RlcikgYXMgYSBmYWxsYmFja1xuICAgICAgLy8gU2VlOiBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9jc3MvdW5pdHMtdmFsdWVzL1xuICAgICAgbWF4LXdpZHRoOiAxMGV4OyAvLyBUaGUgJ3gnIGNoYXJhY3RlciBpcyBzZW1pLXNxdWFyZSBjaGFyXG4gICAgICBtYXgtd2lkdGg6IDEwY2g7IC8vIGNoIGlzIHRoZSBvbmx5IGZvbnQgdW5pdCBiYXNlZCBvbiB0aGUgd2lkdGggb2YgY2hhcmFjdGVyc1xuXG4gICAgICAuc2VydmljaW8tYWN0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG59XG5cblxuLnNlcnZpY2lvLWZyaWVuZHMtc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAtIHZhcigtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0KSk7XG4gIH1cbn1cblxuaW9uLXNlYXJjaGJhci5mcmllbmRzLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMS41KSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5mcmllbmRzLWxpc3Qge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xufVxuXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG5cbn1cblxuXG5cblxuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XG4gIH1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cblxuLndyYXBwZXItcGx1c21pbnVzIHtcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIHRoaW47XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRvcDogLTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wbHVzbWludXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICM1ZjVmY2U7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLm51bSB7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDM5JTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 2207:
/*!************************************************************************!*\
  !*** ./src/app/pages/servicios/styles/servicios.shell.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "app-image-shell.category-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n  padding: 10px !important;\n  box-shadow: 3px 3px 8px #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2lvcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0ZBQUE7RUFDQSxzREFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QUFDRiIsImZpbGUiOiJzZXJ2aWNpb3Muc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5jYXRlZ29yeS1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2IpLCAuMjUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggIzg4ODg4ODtcbn1cbiJdfQ== */";

/***/ }),

/***/ 12875:
/*!****************************************************************!*\
  !*** ./src/app/pages/servicios/servicios.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Servicios Públicos\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\" (click)=\"openCart()\" #cart>\n      <ion-button>\n        <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n        <ion-icon name=\"cart-outline\" class=\"cart-icon\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n  <ion-searchbar class=\"servicios-searchbar\" placeholder=\"Buscar en Servicios\" animated [(ngModel)]=\"searchQuery\"\n    (ionChange)=\"searchList()\"></ion-searchbar>\n</ion-header>\n\n<ion-content class=\"content-wrapper\">\n\n  <ion-row class=\"categorias-list\">\n    <ion-col class=\"category-item\" *ngFor=\"let servicio of serviciosList\" size=\"12\"\n      [routerLink]=\"['/links/', servicio.id, servicio.servicio]\">\n      <app-image-shell [display]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"servicio?.imagenes[0]\">\n        <app-aspect-ratio [ratio]=\"{w:100, h:35}\">\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_servicios_servicios_module_ts.js.map