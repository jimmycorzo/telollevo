"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_productos_productos_module_ts"],{

/***/ 56536:
/*!*************************************************************!*\
  !*** ./src/app/pages/productos/productos-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPageRoutingModule": () => (/* binding */ ProductosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos.page */ 7869);




const routes = [
    {
        path: '',
        component: _productos_page__WEBPACK_IMPORTED_MODULE_0__.ProductosPage
    }
];
let ProductosPageRoutingModule = class ProductosPageRoutingModule {
};
ProductosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductosPageRoutingModule);



/***/ }),

/***/ 52084:
/*!*****************************************************!*\
  !*** ./src/app/pages/productos/productos.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPageModule": () => (/* binding */ ProductosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _productos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos-routing.module */ 56536);
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos.page */ 7869);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/components.module */ 45642);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/firebase.service */ 19446);










let ProductosPageModule = class ProductosPageModule {
};
ProductosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _productos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductosPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule
        ],
        declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_1__.ProductosPage],
        providers: [
            app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService,
            // CallNumber,
            // InAppBrowser
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ProductosPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_productos_productos_module_ts.js.map