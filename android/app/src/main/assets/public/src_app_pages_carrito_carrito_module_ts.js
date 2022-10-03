"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_carrito_carrito_module_ts"],{

/***/ 66135:
/*!*********************************************************!*\
  !*** ./src/app/pages/carrito/carrito-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoPageRoutingModule": () => (/* binding */ CarritoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito.page */ 52905);




const routes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_0__.CarritoPage
    }
];
let CarritoPageRoutingModule = class CarritoPageRoutingModule {
};
CarritoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarritoPageRoutingModule);



/***/ }),

/***/ 74646:
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoPageModule": () => (/* binding */ CarritoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _carrito_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito-routing.module */ 66135);
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrito.page */ 52905);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/components.module */ 45642);
/* harmony import */ var _app_services_Firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/Firebase.service */ 27937);









// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
const carritoRoutes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_1__.CarritoPage
    }
];
let CarritoPageModule = class CarritoPageModule {
};
CarritoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _carrito_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarritoPageRoutingModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_carrito_page__WEBPACK_IMPORTED_MODULE_1__.CarritoPage, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
        providers: [
            _app_services_Firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService,
            // InAppBrowser
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], CarritoPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_carrito_carrito_module_ts.js.map