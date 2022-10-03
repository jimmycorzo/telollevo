"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_productos_productos_page_ts"],{

/***/ 18627:
/*!*****************************************!*\
  !*** ./src/app/models/titulos.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosModel": () => (/* binding */ PedidosModel),
/* harmony export */   "SeleccionadoresModel": () => (/* binding */ SeleccionadoresModel),
/* harmony export */   "TitulosModel": () => (/* binding */ TitulosModel)
/* harmony export */ });
class TitulosModel {
    constructor() {
        this.seleccionadores = [];
    }
}
class SeleccionadoresModel {
    constructor() {
    }
}
class PedidosModel {
    constructor() {
    }
}


/***/ }),

/***/ 7869:
/*!***************************************************!*\
  !*** ./src/app/pages/productos/productos.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPage": () => (/* binding */ ProductosPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _productos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos.page.html?ngResource */ 48347);
/* harmony import */ var _styles_productos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/productos.page.scss?ngResource */ 82967);
/* harmony import */ var _styles_productos_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/productos.shell.scss?ngResource */ 70638);
/* harmony import */ var _styles_productos_ios_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/productos.ios.scss?ngResource */ 66167);
/* harmony import */ var _styles_productos_md_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/productos.md.scss?ngResource */ 52301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_pages_detalles_detalles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/detalles/detalles.page */ 30629);
/* harmony import */ var app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/carrito/carrito.page */ 52905);
/* harmony import */ var app_services_carrito_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/carrito.service */ 21635);
/* harmony import */ var app_pages_buscar_buscar_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/buscar/buscar.page */ 28691);
/* harmony import */ var app_models_titulos_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/models/titulos.model */ 18627);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/firebase.service */ 19446);


















let ProductosPage = class ProductosPage {
  constructor(firebaseService, modalCtrl, route, cartService) {
    this.firebaseService = firebaseService;
    this.modalCtrl = modalCtrl;
    this.route = route;
    this.cartService = cartService;
    this.searchQuery = '';
    this.segmentValue = '';
    this.proximamente = false;
    this.cart = [];
    this.products = [];
    this.titulos = new Array();
  }

  get isShell() {
    return this ? true : false;
  }

  ngOnDestroy() {
    this.stateSubscriptionProductos.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tiendaId = params.tiendaId;
      this.tienda = params.tienda;
      this.claseId = params.claseId;
      this.clase = params.clase;
      this.abre = params.abre;
      this.cierra = params.cierra;
      this.cerrada = JSON.parse(params.cerrada == 'undefined' ? false : params.cerrada);
      this.proximamente = JSON.parse(params.proximamente == 'undefined' ? false : params.proximamente);

      if (this.abre != 'null' && this.cierra != 'null') {
        const hora = String("0" + new Date().getHours()).slice(-2) + ':' + String("0" + new Date().getMinutes()).slice(-2);
        this.cerrada = !(hora >= this.abre && hora <= this.cierra);
      } else this.cerrada = false;
    });
    this.loadProductos();
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  segmentChanged(ev) {
    this.segmentValue = ev.detail.value; // Check if there's any filter and apply it

    this.searchList();
  }

  searchList() {
    const query = this.searchQuery && this.searchQuery !== null ? this.searchQuery : '';
    this.productosList = this.filterList(this.productos, query);
  }

  filterList(list, query) {
    const lista = list.filter(item => item.producto.toLowerCase().includes(query.toLowerCase()));
    return lista;
  }

  ionViewWillLeave() {
    this.subscriptions.unsubscribe();
  }

  searchForm() {
    console.log('search form');
  }

  openDetalleProducto(producto) {
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalCtrl.create({
        component: app_pages_detalles_detalles_page__WEBPACK_IMPORTED_MODULE_6__.DetallesPage,
        cssClass: 'cart-modal',
        componentProps: {
          'producto': producto,
          'cerrada': _this.cerrada,
          'proximamente': _this.proximamente,
          'abre': _this.abre,
          'cierra': _this.cierra
        }
      });
      modal.onWillDismiss().then(() => {// this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      });
      modal.present();
    })();
  }

  openCart() {
    var _this2 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this2.modalCtrl.create({
        component: app_pages_carrito_carrito_page__WEBPACK_IMPORTED_MODULE_7__.CarritoPage,
        cssClass: 'cart-modal'
      });
      modal.onWillDismiss().then(() => {// this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      });
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

  loadProductos(event) {
    this.subscriptions = this.route.data.subscribe(resolvedRouteData => {
      var lastVisible = '';

      if (this.productos) {
        var lastVisible = this.productos[this.productos.length - 1].producto;
      }

      const dataSource = this.firebaseService.loadProductos(this.tiendaId, this.claseId, lastVisible);
      const dataStore = this.firebaseService.getProductosStore(dataSource);
      this.productosDataStore = dataStore; // Keep track of the subscription to unsubscribe onDestroy
      // Merge filteredData with the original dataStore state

      this.stateSubscriptionProductos = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.productosDataStore.state).subscribe(state => {
        state.forEach(element => {
          var presentacionTxt = '';
          var valorUnidadTxt = '';

          if (element != null) {
            // element.producto = element.producto.toLowerCase();
            element.descuentoPorc = 0;
            var hoy = new Date().toISOString().substring(0, 10);
            var desde = element.desde == "" ? hoy : element.desde;
            var hasta = element.hasta == "" ? hoy : element.hasta;

            if (element.descuento > 0 && hoy >= desde && hoy <= hasta) {
              element.descuentoPorc = element.descuento;
              element.descuentoVlr = element.precio;
              element.precioVlr = element.precio * (1.0 - element.descuento);
            } else {
              element.descuentoVlr = 0;
              element.precioVlr = element.precio;
            }

            if (element.cantidad > 1) {
              presentacionTxt = presentacionTxt + element.cantidad + ' unidades de ' + element.presentacion + ' ' + element.unidad + ' c/u';
              valorUnidadTxt = (0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.formatNumber)(Number(element.precioVlr / element.cantidad), 'en-US', '1.0-2') + ' x un';
            } else {
              presentacionTxt = presentacionTxt + element.presentacion + ' ' + element.unidad;
              valorUnidadTxt = (0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.formatNumber)(Number(element.precioVlr / element.presentacion), 'en-US', '1.0-2') + ' x ' + element.unidad;
            }

            element.presentacionTxt = presentacionTxt + ' ($' + valorUnidadTxt + ')';
            element.observaciones = '';
            element.tiendaId = this.tiendaId;
            element.tienda = this.tienda;
            this.firebaseService.getSeleccionadores(element.id).subscribe(result => {
              var tituloBase = '';
              var titulos = new Array();
              this.titulos = new Array();
              result.forEach(element => {
                if (element != null) {
                  if (tituloBase != element.titulo) {
                    tituloBase = element.titulo;
                    const titulo = new app_models_titulos_model__WEBPACK_IMPORTED_MODULE_10__.TitulosModel();
                    titulo.titulo = element.titulo;
                    titulo.productoId = element.productoId;
                    titulo.seleccionado = '';
                    this.titulos.push(titulo);
                  }

                  var t = this.titulos.find(t => t.titulo == tituloBase);
                  var s = new app_models_titulos_model__WEBPACK_IMPORTED_MODULE_10__.SeleccionadoresModel();
                  s.id = element.id;

                  if (element.adicional > 0) {
                    s.seleccionador = element.seleccionador + ' (+$' + element.adicional + ')';
                  } else {
                    s.seleccionador = element.seleccionador;
                  }

                  s.adicional = element.adicional;
                  s.seleccionado = false;
                  s.name = '';
                  t.seleccionadores.push(s); // titulos.push(t);
                }
              });
              element.titulos = this.titulos;
            });
          }
        });
        if (this.productos) this.productos = this.productos.concat(state);else this.productos = state;
        this.productosList = this.productos;
        this.searchList(); // console.log('lastvisible: ', lastVisible)

        if (event) {
          event.target.complete();
        }
      }, error => console.log(error), () => console.log('stateSubscriptionProductos completed'));
    }, error => console.log(error));
  }

  loadMore(event) {
    setTimeout(() => {
      this.loadProductos(event);

      if (this.productos.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

  openSearch(titulo, categoriaId, tiendaId) {
    var _this3 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this3.modalCtrl.create({
        component: app_pages_buscar_buscar_page__WEBPACK_IMPORTED_MODULE_9__.BuscarPage,
        cssClass: 'cart-modal',
        componentProps: {
          'titulo': titulo,
          'categoriaId': categoriaId,
          'tiendaId': _this3.tiendaId
        }
      });
      modal.onWillDismiss().then(() => {
        _this3.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      });
      modal.present();
    })();
  }

};

ProductosPage.ctorParameters = () => [{
  type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_11__.FirebaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
}, {
  type: app_services_carrito_service__WEBPACK_IMPORTED_MODULE_8__.CarritoService
}];

ProductosPage.propDecorators = {
  isShell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.HostBinding,
    args: ['class.is-shell']
  }],
  fab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: ['detalles', {
      static: false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ElementRef
    }]
  }]
};
ProductosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-productos',
  template: _productos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_productos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _styles_productos_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__, _styles_productos_ios_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__, _styles_productos_md_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__]
})], ProductosPage);


/***/ }),

/***/ 66167:
/*!**********************************************************************!*\
  !*** ./src/app/pages/productos/styles/productos.ios.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0b3MuaW9zLnNjc3MifQ== */";

/***/ }),

/***/ 52301:
/*!*********************************************************************!*\
  !*** ./src/app/pages/productos/styles/productos.md.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0b3MubWQuc2NzcyJ9 */";

/***/ }),

/***/ 82967:
/*!***********************************************************************!*\
  !*** ./src/app/pages/productos/styles/productos.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-clases-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n  --page-actions-padding: 5px;\n  --page-departamentos-gutter: calc(var(--page-margin) / 2);\n  --page-pictures-gutter: calc(var(--page-margin) / 2);\n}\n\n.productos-list {\n  --ion-grid-column-padding: var(--page-clases-gutter);\n  border-radius: 7px;\n  padding: 10px;\n  box-shadow: 3px 3px 8px #888888;\n  margin-top: 2px;\n  margin-bottom: 10px;\n  padding: calc(var(--page-clases-gutter) * 3);\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.productos-list::-webkit-scrollbar {\n  display: none;\n}\n\n.productos-list .producto-image-wrapper .image-anchor {\n  display: flexbox;\n  position: relative;\n}\n\n.productos-list .producto-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n}\n\n.productos-list .producto-data-wrapper .producto-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.productos-list .producto-data-wrapper .producto-info .producto-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 18px !important;\n  text-transform: capitalize !important;\n}\n\n.productos-list .producto-data-wrapper .producto-info .producto-presentacion {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 16px !important;\n}\n\n.productos-list .producto-data-wrapper .producto-info .producto-precio {\n  margin: 0px;\n  color: red;\n  font-size: 18px !important;\n  float: left;\n}\n\n.productos-list .producto-data-wrapper .producto-info .producto-descuento {\n  margin: 0 0 0 10px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 16px !important;\n  text-decoration: line-through;\n  float: left;\n}\n\n.productos-list .producto-porcentaje {\n  position: absolute;\n  font-size: 14px !important;\n  z-index: 1002;\n  right: -15px !important;\n  top: -15px !important;\n  --inner-border-width: 0 0 0 0;\n  --background: var(--ion-item-background, var(--ion-background-color, #transparent));\n}\n\n.productos-list .producto-agotado {\n  font-size: 18px !important;\n  --background: var(--ion-item-background, var(--ion-background-color, #transparent));\n  float: right;\n}\n\n.productos-list .producto-actions-wrapper {\n  font-size: 14px;\n  max-width: 10ex;\n  max-width: 10ch;\n}\n\n.productos-list .producto-actions-wrapper .producto-action {\n  margin: 0px;\n}\n\n.producto-friends-segment {\n  --background: var(--page-segment-background);\n  position: sticky;\n  top: 0;\n  z-index: 8;\n}\n\n.producto-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --indicator-color: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc(var(--page-margin) * 3 - var(--page-segment-indicator-height));\n}\n\nion-searchbar.friends-searchbar {\n  padding: calc(var(--page-margin) * 1.5) var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n}\n\nion-item.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\n.counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\ninput[type=number] {\n  -webkit-appearance: textfield !important;\n  appearance: textfield !important;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.wrapper-plusminus {\n  border: black solid thin;\n  width: 30vw;\n  padding: 0px;\n  display: flex;\n  border-radius: 10px;\n  float: right;\n  top: -5px;\n  position: relative;\n}\n\n.plusminus {\n  height: 100%;\n  width: 30%;\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  color: #5f5fce;\n  outline: none;\n}\n\n.num {\n  width: 39%;\n  border: none;\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rvcy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvc2Nyb2xsYmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsdUNBQUE7RUFFQSxrREFBQTtFQUVBLG1EQUFBO0VBQ0EsMkRBQUE7RUFFQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7QUFORjs7QUFXQTtFQUNFLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSw0Q0FBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUMzQkEsd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEZ0JGOztBQ2JFO0VBQ0UsYUFBQTtBRGVKOztBQVVVO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVJaOztBQVlJO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtBQVZOOztBQWdCUTtFQUNFLDJDQUFBO0FBZFY7O0FBaUJRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtBQWZWOztBQWtCUTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLDBCQUFBO0FBaEJWOztBQW1CUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBakJWOztBQW9CUTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQWxCVjs7QUF3Qkk7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUVBLG1GQUFBO0FBdkJOOztBQTJCSTtFQUNFLDBCQUFBO0VBQ0EsbUZBQUE7RUFDQSxZQUFBO0FBekJOOztBQTRCSTtFQUNFLGVBQUE7RUFLQSxlQUFBO0VBQ0EsZUFBQTtBQTlCTjs7QUFnQ007RUFDRSxXQUFBO0FBOUJSOztBQXFDQTtFQUNFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQWxDRjs7QUFvQ0U7RUFDRSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSx3Q0FBQTtFQUVBLDBCQUFBO0VBQ0EsK0VBQUE7QUFuQ0o7O0FBdUNBO0VBQ0UsMERBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBQXBDRjs7QUF1Q0E7RUFDRSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FBcENGOztBQXNDRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQXBDSjs7QUF5Q0k7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUF0Q047O0FBd0NNO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EscUJBQUE7RUFDQyw4QkFBQTtBQXRDTDs7QUF5Q007RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0FBdkNSOztBQTBDTTtFQUNFLGlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrREFBQTtBQXhDUjs7QUFpREE7RUFDRSx3Q0FBQTtFQUVBLGdDQUFBO0FBOUNGOztBQWlEQTs7RUFFSSx3QkFBQTtBQTlDSjs7QUFpREE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQS9DSjs7QUFrREE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQS9DSjs7QUFrREE7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDRixrQkFBQTtBQWhEQSIsImZpbGUiOiJwcm9kdWN0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG5cbiAgLS1wYWdlLWNsYXNlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKTtcblxuICAtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nOiA1cHg7XG4gIC0tcGFnZS1kZXBhcnRhbWVudG9zLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5wcm9kdWN0b3MtbGlzdCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtY2xhc2VzLWd1dHRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggIzg4ODg4ODtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1jbGFzZXMtZ3V0dGVyKSAqIDMpO1xuICAvLyBoZWlnaHQ6IDEwMHB4O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuXG4gIC5wcm9kdWN0by1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIC5pbWFnZS1hbmNob3Ige1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4Ym94O1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAucHJvZHVjdG8tZGF0YS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLy8ganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuXG4gICAgICAucHJvZHVjdG8taW5mbyB7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0by1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3RvLXByZXNlbnRhY2lvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0by1wcmVjaW8ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5wcm9kdWN0by1kZXNjdWVudG8ge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZHVjdG8tcG9yY2VudGFqZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgIHotaW5kZXg6IDEwMDI7XG4gICAgICByaWdodDogLTE1cHggIWltcG9ydGFudDtcbiAgICAgIHRvcDogLTE1cHggIWltcG9ydGFudDsgXG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcblxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI3RyYW5zcGFyZW50KSk7XG5cbiAgICB9XG5cbiAgICAucHJvZHVjdG8tYWdvdGFkbyB7XG4gICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICN0cmFuc3BhcmVudCkpO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5wcm9kdWN0by1hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAvLyBNYWtlIHN1cmUgd2UgYWx3YXlzIGhhdmUgc3BhY2UgZm9yIDEwIGNoYXJhY3RlcnNcbiAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cbiAgICAgIG1heC13aWR0aDogMTBleDsgLy8gVGhlICd4JyBjaGFyYWN0ZXIgaXMgc2VtaS1zcXVhcmUgY2hhclxuICAgICAgbWF4LXdpZHRoOiAxMGNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcblxuICAgICAgLnByb2R1Y3RvLWFjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgIH1cblxufVxuXG5cbi5wcm9kdWN0by1mcmllbmRzLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC0tY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xuICB9XG59XG5cbmlvbi1zZWFyY2hiYXIuZnJpZW5kcy1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDEuNSkgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uZnJpZW5kcy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbn1cblxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbS5mcmllbmQtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuXG59XG5cbiAgICAuY291bnRlci1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAuY291bnRlci1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICB9XG5cbiAgICAgIC5jb3VudGVyLXZhbHVlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG5cbiAgICAgIGFwcC1jb3VudGVyLWlucHV0IHtcbiAgICAgICAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XG4gIH1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cblxuLndyYXBwZXItcGx1c21pbnVzIHtcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIHRoaW47XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRvcDogLTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wbHVzbWludXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICM1ZjVmY2U7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLm51bSB7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDM5JTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 70638:
/*!************************************************************************!*\
  !*** ./src/app/pages/productos/styles/productos.shell.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "app-image-shell.productos-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rvcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0ZBQUE7RUFDQSxzREFBQTtBQUNGIiwiZmlsZSI6InByb2R1Y3Rvcy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnByb2R1Y3Rvcy1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2IpLCAuMjUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4iXX0= */";

/***/ }),

/***/ 48347:
/*!****************************************************************!*\
  !*** ./src/app/pages/productos/productos.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"clases\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{this.clase}}\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"openSearch(this.clase, '', this.tiendaId)\" #search>\n      <ion-button>\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\" (click)=\"openCart()\" #cart>\n      <ion-button>\n        <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n        <ion-icon name=\"cart-outline\" class=\"cart-icon\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"productos-list\" *ngFor=\"let producto of productos\">\n    <ion-col class=\"producto-image-wrapper\" size=\"3\" (click)=\"openDetalleProducto(producto)\">\n      <ion-item class=\"producto-porcentaje\">\n        <ion-badge slot=\"end\" *ngIf=\"producto.descuentoPorc > 0\">-{{producto.descuentoPorc | percent }}\n        </ion-badge>\n      </ion-item>\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell [display]=\"'cover'\" class=\"productos-cover\" animation=\"spinner\" [src]=\"producto?.imagen\"\n          [alt]=\"'producto'\">\n        </app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n\n    <ion-col class=\"producto-data-wrapper\" size=\"9\">\n      <div class=\"producto-info\" (click)=\"openDetalleProducto(producto)\">\n        <h2 class=\"producto-name\">\n          <app-text-shell [data]=\"producto?.producto\"></app-text-shell>\n        </h2>\n        <h3 class=\"producto-presentacion\">\n          <app-text-shell [data]=\"producto?.presentacionTxt\"></app-text-shell>\n        </h3>\n        <h3 class=\"producto-precio\">\n          <a>{{producto.precioVlr | currency:'$':'symbol':'3.0'}}</a>\n        </h3>\n        <h3 class=\"producto-descuento\" *ngIf=\"producto.descuentoVlr > 0\">\n          {{producto.descuentoVlr | currency:'$':'symbol':'3.0'}}\n        </h3>\n      </div>\n      <div class=\"counter-item\" *ngIf=\"!(producto.agotado || this.cerrada)\">\n        <app-counter-input (ngModel)=\"producto.amount\" [producto]=\"producto\" min=0 max=99>\n        </app-counter-input>\n      </div>\n      <div class=\"producto-agotado\" *ngIf=\"producto.agotado && !this.proximamente\">\n        <ion-badge> agotado\n        </ion-badge>\n      </div>\n      <div class=\"producto-agotado\" *ngIf=\"this.cerrada && !this.proximamente\">\n        <ion-badge> tienda cerrada\n        </ion-badge>\n      </div>\n      <div class=\"producto-agotado\" *ngIf=\"this.proximamente\">\n        <ion-badge> Próximamente\n        </ion-badge>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargar mas productos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_productos_productos_page_ts.js.map