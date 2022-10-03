"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_buscar_buscar_module_ts-src_app_services_carrito_service_ts"],{

/***/ 91754:
/*!*******************************************************!*\
  !*** ./src/app/pages/buscar/buscar-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPageRoutingModule": () => (/* binding */ BuscarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar.page */ 28691);




const routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_0__.BuscarPage
    }
];
let BuscarPageRoutingModule = class BuscarPageRoutingModule {
};
BuscarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuscarPageRoutingModule);



/***/ }),

/***/ 58593:
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPageModule": () => (/* binding */ BuscarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-routing.module */ 91754);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar.page */ 28691);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/components.module */ 45642);








let BuscarPageModule = class BuscarPageModule {
};
BuscarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuscarPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_1__.BuscarPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], BuscarPageModule);



/***/ }),

/***/ 21635:
/*!*********************************************!*\
  !*** ./src/app/services/carrito.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoService": () => (/* binding */ CarritoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let CarritoService = class CarritoService {
    constructor() {
        this.data = [
            { id: 0, tienda: '', tiendaId: '', productoId: '', producto: 'Pizza Salami', precioVlr: 8.99, amount: 0, imagen: '', observaciones: '', titulos: {} },
            { id: 1, tienda: '', tiendaId: '', productoId: '', producto: 'Pizza Classic', precioVlr: 5.49, amount: 0, imagen: '', observaciones: '', titulos: {} },
            { id: 2, tienda: '', tiendaId: '', productoId: '', producto: 'Sliced Bread', precioVlr: 4.99, amount: 0, imagen: '', observaciones: '', titulos: {} },
            { id: 3, tienda: '', tiendaId: '', productoId: '', producto: 'Salad', precioVlr: 6.99, amount: 0, imagen: '', observaciones: '', titulos: {} }
        ];
        this.cart = [];
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    }
    getProducts() {
        return this.data;
    }
    getCart() {
        return this.cart;
    }
    getCartItemCount() {
        return this.cartItemCount;
    }
    addProduct(product) {
        let added = false;
        for (let p of this.cart) {
            if (p.id === product.id) {
                p.amount += 1;
                added = true;
                break;
            }
        }
        if (!added) {
            product.amount = 1;
            this.cart.push(product);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    decreaseProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                p.amount -= 1;
                if (p.amount == 0) {
                    this.cart.splice(index, 1);
                }
            }
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
    }
    clear() {
        for (let [index, p] of this.cart.entries()) {
            // console.log('p:', index, p);
            this.cartItemCount.next(this.cartItemCount.value - p.amount);
            p.amount = 0;
        }
        for (let index = this.cart.length - 1; index >= 0; index--) {
            this.cart.splice(index, 1);
        }
    }
};
CarritoService.ctorParameters = () => [];
CarritoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CarritoService);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_buscar_buscar_module_ts-src_app_services_carrito_service_ts.js.map