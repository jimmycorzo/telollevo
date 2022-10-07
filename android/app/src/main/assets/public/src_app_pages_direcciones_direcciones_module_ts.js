"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_direcciones_direcciones_module_ts"],{

/***/ 29757:
/*!*********************************************************!*\
  !*** ./src/app/pages/direcciones/direcciones.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DireccionesPageModule": () => (/* binding */ DireccionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _direcciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direcciones.page */ 91408);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _direcciones_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direcciones.resolver */ 15874);








let DireccionesPageModule = class DireccionesPageModule {
};
DireccionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([
                {
                    path: '',
                    component: _direcciones_page__WEBPACK_IMPORTED_MODULE_0__.DireccionesPage,
                    resolve: {
                        data: _direcciones_resolver__WEBPACK_IMPORTED_MODULE_1__.DireccionesResolver
                    }
                }
            ])
        ],
        declarations: [_direcciones_page__WEBPACK_IMPORTED_MODULE_0__.DireccionesPage],
        providers: [
            _direcciones_resolver__WEBPACK_IMPORTED_MODULE_1__.DireccionesResolver,
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA]
    })
], DireccionesPageModule);



/***/ }),

/***/ 91408:
/*!*******************************************************!*\
  !*** ./src/app/pages/direcciones/direcciones.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DireccionesPage": () => (/* binding */ DireccionesPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _direcciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direcciones.page.html?ngResource */ 48843);
/* harmony import */ var _styles_direcciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/direcciones.page.scss?ngResource */ 81297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/firebase.service */ 19446);









let DireccionesPage = class DireccionesPage {
  constructor(route, modalCtrl, firebaseService, alertController) {
    this.route = route;
    this.modalCtrl = modalCtrl;
    this.firebaseService = firebaseService;
    this.alertController = alertController;
  }

  ngOnInit() {
    this.subscriptions = this.route.data.pipe( // Extract data for this page
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(resolvedRouteData => {
      return resolvedRouteData['data'].source;
    })).subscribe(pageData => {
      this.direcciones = pageData;
    }, error => console.log(error));
  }

  openMaps(direccion) {// if (direccion == null) {
    //   direccion = new DireccionesModel();
    // }
    // let modal = await this.modalCtrl.create({
    //   component: MapsPage,
    //   cssClass: 'cart-modal',
    //   componentProps: {
    //     'direccion': direccion,
    //   }
    // });
    // modal.onWillDismiss().then(() => {
    //   // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    // });
    // modal.present();

    return (0,_Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  showConfirm(direccion) {
    var _this = this;

    return (0,_Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Eliminar Dirección',
        subHeader: '¿desea eliminar esta dirección?',
        message: direccion.direccion,
        animated: true,
        buttons: [{
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí',
          handler: () => {
            _this.firebaseService.deleteDireccion(direccion);
          }
        }]
      });
      yield alert.present();
    })();
  }

  delete(direccion) {
    var _this2 = this;

    return (0,_Users_jimmy_code_telollevo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.showConfirm(direccion);
    })();
  } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions


  ionViewWillLeave() {
    this.subscriptions.unsubscribe();
  }

};

DireccionesPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

DireccionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-direcciones',
  template: _direcciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_direcciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DireccionesPage);


/***/ }),

/***/ 15874:
/*!***********************************************************!*\
  !*** ./src/app/pages/direcciones/direcciones.resolver.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DireccionesResolver": () => (/* binding */ DireccionesResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/firebase.service */ 19446);



let DireccionesResolver = class DireccionesResolver {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    resolve() {
        // Base Observable (where we get data from)
        const dataObservable = this.firebaseService.getDirecciones();
        return { source: dataObservable };
    }
};
DireccionesResolver.ctorParameters = () => [
    { type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_0__.FirebaseService }
];
DireccionesResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], DireccionesResolver);



/***/ }),

/***/ 81297:
/*!***************************************************************************!*\
  !*** ./src/app/pages/direcciones/styles/direcciones.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.direcciones-content ion-item-divider {\n  --background: var(--ion-color-light);\n  --padding-start: var(--page-margin);\n}\n\n.direcciones-content .direccion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.direcciones-content .direccion-item .direccion-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\n.direcciones-content .direccion-item .details-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.direcciones-content .direccion-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-secondary);\n}\n\n.direcciones-content .direccion-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.direcciones-content .direccion-item .phone-wrapper {\n  align-self: flex-start;\n}\n\n.direcciones-content .direccion-item .phone-wrapper .direccion-phone {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVDQUFBO0FBREY7O0FBTUU7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FBSEo7O0FBTUU7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FBTEo7O0FBT0k7RUFDRSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxtQkFBQTtBQU5OOztBQVNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQVBOOztBQVNNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNELGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQVBQOztBQVVNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFSUjs7QUFZSTtFQUNFLHNCQUFBO0FBVk47O0FBWU07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFWUiIsImZpbGUiOiJkaXJlY2Npb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5kaXJlY2Npb25lcy1jb250ZW50IHtcbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLmRpcmVjY2lvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgIC5kaXJlY2Npb24taXRlbS13cmFwcGVyIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIFx0Zm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGhvbmUtd3JhcHBlciB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAuZGlyZWNjaW9uLXBob25lIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 48843:
/*!********************************************************************!*\
  !*** ./src/app/pages/direcciones/direcciones.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"categorias\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Mis Direcciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"direcciones-content\">\n  <ng-container *ngIf=\"direcciones\">\n    <ion-item-group>\n      <ion-item class=\"direccion-item\" lines=\"none\" *ngFor=\"let direccion of direcciones\">\n        <ion-row class=\"direccion-item-wrapper\">\n          <ion-col class=\"details-wrapper\" (click)=\"openMaps(direccion)\">\n            <h2 class=\"details-name\">{{ direccion.direccion }}</h2>\n            <p class=\"details-description\">{{ direccion.detalle }}</p>\n          </ion-col>\n          <ion-col size=\"3\" class=\"phone-wrapper\">\n            <h3 class=\"direccion-phone\">{{ direccion.telefono }}</h3>\n            <ion-button  (click)=\"delete(direccion)\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    </ion-item-group>\n    <ion-button expand=\"block\" fill=\"outline\" (click)=\"openMaps(null)\">\n      Agregar Nueva Dirección</ion-button>\n  </ng-container>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_direcciones_direcciones_module_ts.js.map