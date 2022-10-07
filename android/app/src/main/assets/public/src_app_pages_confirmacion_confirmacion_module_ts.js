"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_confirmacion_confirmacion_module_ts"],{

/***/ 78745:
/*!*******************************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacionPageRoutingModule": () => (/* binding */ ConfirmacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirmacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmacion.page */ 62509);




const routes = [
    {
        path: '',
        component: _confirmacion_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmacionPage
    }
];
let ConfirmacionPageRoutingModule = class ConfirmacionPageRoutingModule {
};
ConfirmacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmacionPageRoutingModule);



/***/ }),

/***/ 80463:
/*!***********************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacionPageModule": () => (/* binding */ ConfirmacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _confirmacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmacion-routing.module */ 78745);
/* harmony import */ var _confirmacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmacion.page */ 62509);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/components.module */ 45642);








let ConfirmacionPageModule = class ConfirmacionPageModule {
};
ConfirmacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _confirmacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmacionPageRoutingModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_confirmacion_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmacionPage]
    })
], ConfirmacionPageModule);



/***/ }),

/***/ 62509:
/*!*********************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacionPage": () => (/* binding */ ConfirmacionPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirmacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmacion.page.html?ngResource */ 31768);
/* harmony import */ var _styles_confirmacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/confirmacion.page.scss?ngResource */ 81892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ConfirmacionPage = class ConfirmacionPage {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
  }

  ngOnInit() {}

  openCart() {
    var _this = this;

    return (0,_Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalCtrl.create({
        component: ConfirmacionPage,
        cssClass: 'cart-modal'
      });
      modal.onWillDismiss().then(() => {// this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      });
      modal.present();
    })();
  }

  continuar() {
    this.modalCtrl.dismiss();
  }

};

ConfirmacionPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}];

ConfirmacionPage.propDecorators = {
  pedido: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
ConfirmacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-confirmacion',
  template: _confirmacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_confirmacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ConfirmacionPage);


/***/ }),

/***/ 81892:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/confirmacion/styles/confirmacion.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.category-item .category-anchor .category-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: calc(var(--page-margin) / 4 * 3) var(--page-margin);\n  color: red;\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n}\n.ingresar {\n  color: var(--ion-color-primary) !important;\n  margin: 0px;\n  text-align: center;\n}\n.login-content {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUFOO0FBRU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsVUFBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7QUFBUjtBQUtJO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtBO0VBRUUsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFIRiIsImZpbGUiOiJjb25maXJtYWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBwYWRkaW5nOiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAgIC5pbmdyZXNhciB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxufSJdfQ== */";

/***/ }),

/***/ 31768:
/*!**********************************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Confirmación</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"login-content\">\n  <ion-row class=\"user-details-wrapper\">\n    <ion-col size=\"2\">\n    </ion-col>\n    <ion-col size=\"8\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell animation=\"spinner\" [src]=\"'./assets/images/logo.webp'\"></app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n  <h5 class=\"ingresar\">\n    <br />\n    Pedido No. <strong>{{pedido}}</strong>\n    <br />\n    <br />\n    Gracias por elegirnos.\n    <br />\n    <br />\n    Su pedido ha sido confirmado y pronto estará en camino.\n    <br />\n    <br />\n  </h5>\n\n  <ion-button #finalizar expand=\"full\" (click)='continuar()'>\n    Continuar\n  </ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_confirmacion_confirmacion_module_ts.js.map