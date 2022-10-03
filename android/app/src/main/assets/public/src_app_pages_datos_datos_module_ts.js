"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_datos_datos_module_ts"],{

/***/ 47169:
/*!*****************************************************!*\
  !*** ./src/app/pages/datos/datos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPageRoutingModule": () => (/* binding */ DatosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos.page */ 15864);




const routes = [
    {
        path: '',
        component: _datos_page__WEBPACK_IMPORTED_MODULE_0__.DatosPage
    }
];
let DatosPageRoutingModule = class DatosPageRoutingModule {
};
DatosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DatosPageRoutingModule);



/***/ }),

/***/ 21048:
/*!*********************************************!*\
  !*** ./src/app/pages/datos/datos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPageModule": () => (/* binding */ DatosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _datos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos-routing.module */ 47169);
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos.page */ 15864);







let DatosPageModule = class DatosPageModule {
};
DatosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _datos_routing_module__WEBPACK_IMPORTED_MODULE_0__.DatosPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            // BrMaskerModule
        ],
        declarations: [_datos_page__WEBPACK_IMPORTED_MODULE_1__.DatosPage]
    })
], DatosPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_datos_datos_module_ts.js.map