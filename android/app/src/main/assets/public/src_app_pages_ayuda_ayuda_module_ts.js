"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_ayuda_ayuda_module_ts"],{

/***/ 33528:
/*!*****************************************************!*\
  !*** ./src/app/pages/ayuda/ayuda-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AyudaPageRoutingModule": () => (/* binding */ AyudaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ayuda_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ayuda.page */ 65088);




const routes = [
    {
        path: '',
        component: _ayuda_page__WEBPACK_IMPORTED_MODULE_0__.AyudaPage
    }
];
let AyudaPageRoutingModule = class AyudaPageRoutingModule {
};
AyudaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AyudaPageRoutingModule);



/***/ }),

/***/ 78367:
/*!*********************************************!*\
  !*** ./src/app/pages/ayuda/ayuda.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AyudaPageModule": () => (/* binding */ AyudaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ayuda_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ayuda-routing.module */ 33528);
/* harmony import */ var _ayuda_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ayuda.page */ 65088);







let AyudaPageModule = class AyudaPageModule {
};
AyudaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ayuda_routing_module__WEBPACK_IMPORTED_MODULE_0__.AyudaPageRoutingModule
        ],
        declarations: [_ayuda_page__WEBPACK_IMPORTED_MODULE_1__.AyudaPage]
    })
], AyudaPageModule);



/***/ }),

/***/ 65088:
/*!*******************************************!*\
  !*** ./src/app/pages/ayuda/ayuda.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AyudaPage": () => (/* binding */ AyudaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ayuda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ayuda.page.html?ngResource */ 35514);
/* harmony import */ var _ayuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ayuda.page.scss?ngResource */ 38729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AyudaPage = class AyudaPage {
    constructor() { }
    ngOnInit() {
    }
};
AyudaPage.ctorParameters = () => [];
AyudaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ayuda',
        template: _ayuda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ayuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AyudaPage);



/***/ }),

/***/ 38729:
/*!********************************************************!*\
  !*** ./src/app/pages/ayuda/ayuda.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJheXVkYS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 35514:
/*!********************************************************!*\
  !*** ./src/app/pages/ayuda/ayuda.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"Productos\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Ayuda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ayuda_ayuda_module_ts.js.map