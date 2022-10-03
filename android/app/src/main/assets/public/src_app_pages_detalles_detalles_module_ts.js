"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_detalles_detalles_module_ts"],{

/***/ 22176:
/*!***********************************************************!*\
  !*** ./src/app/pages/detalles/detalles-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallesPageRoutingModule": () => (/* binding */ DetallesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles.page */ 30629);




const routes = [
    {
        path: '',
        component: _detalles_page__WEBPACK_IMPORTED_MODULE_0__.DetallesPage
    }
];
let DetallesPageRoutingModule = class DetallesPageRoutingModule {
};
DetallesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetallesPageRoutingModule);



/***/ }),

/***/ 10735:
/*!***************************************************!*\
  !*** ./src/app/pages/detalles/detalles.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallesPageModule": () => (/* binding */ DetallesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _detalles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles-routing.module */ 22176);
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalles.page */ 30629);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/components.module */ 45642);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 341);










const routes = [
    {
        path: '',
        component: _detalles_page__WEBPACK_IMPORTED_MODULE_1__.DetallesPage,
    }
];
let DetallesPageModule = class DetallesPageModule {
};
DetallesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _detalles_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetallesPageRoutingModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes),
        ],
        declarations: [_detalles_page__WEBPACK_IMPORTED_MODULE_1__.DetallesPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], DetallesPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_detalles_detalles_module_ts.js.map