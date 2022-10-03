"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_historial_historial_module_ts"],{

/***/ 15863:
/*!*************************************************************!*\
  !*** ./src/app/pages/historial/historial-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialPageRoutingModule": () => (/* binding */ HistorialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historial.page */ 64650);




const routes = [
    {
        path: '',
        component: _historial_page__WEBPACK_IMPORTED_MODULE_0__.HistorialPage
    }
];
let HistorialPageRoutingModule = class HistorialPageRoutingModule {
};
HistorialPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistorialPageRoutingModule);



/***/ }),

/***/ 68571:
/*!*****************************************************!*\
  !*** ./src/app/pages/historial/historial.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialPageModule": () => (/* binding */ HistorialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _historial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historial-routing.module */ 15863);
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historial.page */ 64650);







let HistorialPageModule = class HistorialPageModule {
};
HistorialPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _historial_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistorialPageRoutingModule
        ],
        declarations: [_historial_page__WEBPACK_IMPORTED_MODULE_1__.HistorialPage]
    })
], HistorialPageModule);



/***/ }),

/***/ 64650:
/*!***************************************************!*\
  !*** ./src/app/pages/historial/historial.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistorialPage": () => (/* binding */ HistorialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _historial_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historial.page.html?ngResource */ 93845);
/* harmony import */ var _historial_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historial.page.scss?ngResource */ 21471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let HistorialPage = class HistorialPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    chat() {
        this.router.navigate(['chat']);
    }
};
HistorialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HistorialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-historial',
        template: _historial_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_historial_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistorialPage);



/***/ }),

/***/ 21471:
/*!****************************************************************!*\
  !*** ./src/app/pages/historial/historial.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 93845:
/*!****************************************************************!*\
  !*** ./src/app/pages/historial/historial.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"Productos\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Historial de Pedidos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button #chat1 expand=\"full\" (click)=\"chat()\">\n    Chatear con el Tendero\n  </ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_historial_historial_module_ts.js.map