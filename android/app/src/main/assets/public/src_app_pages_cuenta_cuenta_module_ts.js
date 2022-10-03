"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cuenta_cuenta_module_ts"],{

/***/ 97694:
/*!***********************************************!*\
  !*** ./src/app/models/country-phone.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryPhone": () => (/* binding */ CountryPhone)
/* harmony export */ });
// import libphonenumber from 'google-libphonenumber';
class CountryPhone {
    constructor(iso, name) {
        this.iso = iso;
        this.name = name;
        // const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(),
        //     PNF = libphonenumber.PhoneNumberFormat,
        //     PNT = libphonenumber.PhoneNumberType,
        //     country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE),
        //     // We need to define what kind of country phone number type we are going to use as a mask.
        //     // You can choose between many types including:
        //     //    - FIXED_LINE
        //     //    - MOBILE
        //     //    - For more types please refer to google libphonenumber repo
        //     // (https://bit.ly/2QZb6J9)
        //     example_number_formatted = phoneUtil.format(country_example_number, PNF.NATIONAL);
        //     // We need to define how are we going to format the phone number
        //     // You can choose between many formats including:
        //     //    - NATIONAL
        //     //    - INTERNATIONAL
        //     //    - E164
        //     //    - RFC3966
        // this.sample_phone = example_number_formatted;
        // this.code = '+' + country_example_number.getCountryCode();
    }
}


/***/ }),

/***/ 31162:
/*!*******************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPageRoutingModule": () => (/* binding */ CuentaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta.page */ 37399);




const routes = [
    {
        path: '',
        component: _cuenta_page__WEBPACK_IMPORTED_MODULE_0__.CuentaPage
    }
];
let CuentaPageRoutingModule = class CuentaPageRoutingModule {
};
CuentaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CuentaPageRoutingModule);



/***/ }),

/***/ 94178:
/*!***********************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPageModule": () => (/* binding */ CuentaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta-routing.module */ 31162);
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page */ 37399);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);








const routes = [
    {
        path: '',
        component: _cuenta_page__WEBPACK_IMPORTED_MODULE_1__.CuentaPage
    }
];
let CuentaPageModule = class CuentaPageModule {
};
CuentaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuentaPageRoutingModule,
        ],
        declarations: [_cuenta_page__WEBPACK_IMPORTED_MODULE_1__.CuentaPage],
        providers: []
    })
], CuentaPageModule);



/***/ }),

/***/ 37399:
/*!*********************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaPage": () => (/* binding */ CuentaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta.page.html?ngResource */ 24479);
/* harmony import */ var _cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta.page.scss?ngResource */ 98347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_models_country_phone_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/country-phone.model */ 97694);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/firebase.service */ 19446);
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/authentication.service */ 7053);
/* harmony import */ var app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util.service */ 67241);










let CuentaPage = class CuentaPage {
    constructor(firebaseService, router, authService, util) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.authService = authService;
        this.util = util;
        this.validations = {
            'tipo': [
                { type: 'required', message: 'Por favor seleccione el tipo de documento.' }
            ],
            'nombre': [
                { type: 'required', message: 'Por favor digite su nombre o razón social.' }
            ],
            'numero': [
                { type: 'required', message: 'Por favor digite el número de identificación.' }
            ],
            'direccion': [
                { type: 'required', message: 'Por favor digite la dirección de facturación.' }
            ],
            'correo': [
                { type: 'required', message: 'Por favor digite el correo electrónico de facturación.' },
                { type: 'pattern', message: 'Coloque un correo válido.' }
            ],
            'telefono': [
                { type: 'required', message: 'Por favor digite el número de teléfono de facturación.' },
                { type: 'invalidCountryPhone', message: 'El teléfono es incorrecto para el país seleccionado.' }
            ],
            'terms': [
                { type: 'pattern', message: 'Debe aceptar los términos y condiciones.' }
            ]
        };
    }
    ngOnInit() {
        this.validationsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator),
            'uid': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator),
            'tipo': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            'numero': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            'direccion': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            'pais': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            'terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('true')),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
        });
        this.firebaseService.getTipos()
            .subscribe(result => {
            this.tipos = result;
        });
        this.countries = [
            new app_models_country_phone_model__WEBPACK_IMPORTED_MODULE_2__.CountryPhone('co', 'Colombia'),
        ];
        this.firebaseService.getDato().subscribe(result => {
            this.datos = result[0];
            if (this.datos) {
                this.validationsForm.controls["id"].setValue(this.datos.id);
                this.validationsForm.controls["uid"].setValue(this.datos.uid);
                this.validationsForm.controls["tipo"].setValue(this.datos.tipo);
                this.validationsForm.controls["nombre"].setValue(this.datos.nombre);
                this.validationsForm.controls["numero"].setValue(this.datos.numero);
                this.validationsForm.controls["direccion"].setValue(this.datos.direccion);
                this.validationsForm.controls["correo"].setValue(this.datos.correo);
                this.validationsForm.controls["telefono"].setValue(this.datos.telefono);
                this.validationsForm.controls["pais"].setValue(this.datos.pais);
            }
        });
    }
    onSubmit(values) {
        this.firebaseService.createDato(values);
        this.util.navigate('tabs/directorios', false);
    }
    signOut() {
        this.authService.signout();
    }
};
CuentaPage.ctorParameters = () => [
    { type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService },
    { type: app_services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService }
];
CuentaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cuenta',
        template: _cuenta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cuenta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CuentaPage);



/***/ }),

/***/ 98347:
/*!**********************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\nion-header ion-toolbar {\n  --background: transparent;\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n  border-top: calc(var(--app-header-height) + var(--ion-safe-area-top));\n  border-top-style: solid;\n  border-top-color: var(--ion-color-primary);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  text-transform: uppercase;\n  font-size: 16px;\n  color: var(--ion-color-secondary);\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n::ng-deep .select-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: 16px;\n}\n\n::ng-deep .select-alert .alert-head {\n  padding-top: calc(var(--select-alert-margin) / 4 * 3);\n  padding-bottom: calc(var(--select-alert-margin) / 4 * 3);\n  padding-inline-start: var(--select-alert-margin);\n  padding-inline-end: var(--select-alert-margin);\n}\n\n::ng-deep .select-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n::ng-deep .select-alert .alert-head,\n::ng-deep .select-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n::ng-deep .select-alert .alert-message {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1ZW50YS5wYWdlLnNjc3MiLCIuLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC1hbGVydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQUhGOztBQVFFO0VBQ0UseUJBQUE7QUFMSjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHFFQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtBQUxGOztBQVNBO0VBQ0Usb0NBQUE7QUFORjs7QUFRRTtFQUNFLDJDQUFBO0FBTko7O0FBUUk7RUFDRSw2Q0FBQTtFQUVBLDJFQUFBO0FBUE47O0FBU007RUFDRSx5QkFBQTtBQVBSOztBQVNRO0VBQ0UseUJBQUE7RUFDRixlQUFBO0VBQ0EsaUNBQUE7QUFQUjs7QUFXTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQVRSOztBQVlNO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQVZSOztBQWNRO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFaVjs7QUFjVTtFQUNFLGdEQUFBO0VBQ0EsY0FBQTtBQVpaOztBQWtCUTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxnREFBQTtBQWhCVjs7QUFtQlE7RUFDRSxrQkFBQTtBQWpCVjs7QUFzQkk7RUFDRSwwQkFBQTtBQXBCTjs7QUEyQkE7RUMxRkUsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VENEZBLCtDQUFBO0VBQ0EsbURBQUE7RUFDQSwyQkFBQTtBQXhCRjs7QUNwRUU7RUFDRSxxREFBQTtFQUNBLHdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSw4Q0FBQTtBRHNFSjs7QUNuRUU7RUFDRSxnQ0FBQTtBRHFFSjs7QUNsRUU7O0VBRUUsZ0RBQUE7QURvRUo7O0FDL0RJO0VBQ0UsV0FBQTtBRGlFTjs7QUMzREk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUQ2RE47O0FDMURJO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBRDBETjs7QUFGRTtFQUNFLGFBQUE7QUFJSiIsImZpbGUiOiJjdWVudGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0XCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4vLyBVc2UgYSBjb2xvcmVkIGJvcmRlci10b3AgdG8gZml4IHdlaXJkIHRyYW5zaXRpb25zIGJldHdlZW4gdG9vbGJhcnMgdGhhdCBoYXZlIGRpZmZlcmVudCBiYWNrZ3JvdW5kIGNvbG9yc1xuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3JkZXItdG9wOiBjYWxjKHZhcigtLWFwcC1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnZhbGlkYXRpb25zLWZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG5cbiAgICAgICAgLmhlYWRlci10aXRsZSB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIFx0XHRmb250LXNpemU6IDE2cHg7XG4gICAgICBcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgfVxuXG4gICAgICAudGVybXMtaXRlbSB7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXHR9XG5cbiAgICAgIC5jb3VudGVyLWl0ZW0ge1xuICAgICAgICBhcHAtY291bnRlci1pbnB1dCB7XG4gICAgICAgICAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudGVyLXZhbHVlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VibWl0LWJ0biB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWxlcnRzIGFuZCBpbiBnZW5lcmFsIGFsbCBvdmVybGF5cyBhcmUgYXR0YWNoZWQgdG8gdGhlIGJvZHkgb3IgaW9uLWFwcCBkaXJlY3RseVxuLy8gV2UgbmVlZCB0byB1c2UgOjpuZy1kZWVwIHRvIGFjY2VzcyBpdCBmcm9tIGhlcmVcbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IHtcbiAgQGluY2x1ZGUgc2VsZWN0LWFsZXJ0KCk7XG5cbiAgLy8gVmFyaWFibGVzIHNob3VsZCBiZSBpbiBhIGRlZXBlciBzZWxlY3RvciBvciBhZnRlciB0aGUgbWl4aW4gaW5jbHVkZSB0byBvdmVycmlkZSBkZWZhdWx0IHZhbHVlc1xuICAtLXNlbGVjdC1hbGVydC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XG5cbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIkBtaXhpbiBzZWxlY3QtYWxlcnQoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiAjMDAwO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XG5cbiAgLmFsZXJ0LWhlYWQge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgfVxuXG4gIC5hbGVydC10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XG4gIH1cblxuICAuYWxlcnQtaGVhZCxcbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIC8vIGlPUyBzdHlsZXNcbiAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hdGVyaWFsIHN0eWxlc1xuICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xuICAgIC5hbGVydC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cblxuICAgIC5hbGVydC1idXR0b24ge1xuICAgICAgLy8gVmFsdWVzIHRha2VuIGZyb20gSW9uaWMgc21hbGwgYnV0dG9uIHByZXNldFxuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMC45ZW07XG4gICAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgIGhlaWdodDogMi4xZW07XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 24479:
/*!**********************************************************!*\
  !*** ./src/app/pages/cuenta/cuenta.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"directorios\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Mi Cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"forms-validations-content\">\n  <form class=\"validations-form\" [formGroup]=\"validationsForm\" (submit)=\"onSubmit(validationsForm.value)\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-list-header>\n        <ion-label class=\"header-title\">Mis Datos de Facturación</ion-label>\n      </ion-list-header>\n\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Tipo de Documento</ion-label>\n        <ion-select formControlName=\"tipo\" cancelText=\"Cancelar\" okText=\"Aceptar\">\n          <ion-select-option *ngFor=\"let item of tipos\" [value]=\"item.id\">{{item.tipo}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Número</ion-label>\n        <ion-input type=\"text\" formControlName=\"numero\" clearInput></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.numero\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('numero').hasError(validation.type) && (validationsForm.get('numero').dirty || validationsForm.get('numero').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <!-- When this bug (https://github.com/ionic-team/ionic-framework/issues/22117) gets fixed, remove .item-label-floating class -->\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Nombre o Razón Social</ion-label>\n        <ion-input type=\"text\" formControlName=\"nombre\" clearInput></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.nombre\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('nombre').hasError(validation.type) && (validationsForm.get('nombre').dirty || validationsForm.get('nombre').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <!-- When this bug (https://github.com/ionic-team/ionic-framework/issues/22117) gets fixed, remove .item-label-floating class -->\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Dirección</ion-label>\n        <ion-input type=\"text\" formControlName=\"direccion\" clearInput></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.direccion\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('direccion').hasError(validation.type) && (validationsForm.get('direccion').dirty || validationsForm.get('direccion').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <!-- When this bug (https://github.com/ionic-team/ionic-framework/issues/22117) gets fixed, remove .item-label-floating class -->\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Correo Electrónico</ion-label>\n        <ion-input type=\"text\" formControlName=\"correo\" clearInput inputmode=\"email\">\n        </ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.correo\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('correo').hasError(validation.type) && (validationsForm.get('correo').dirty || validationsForm.get('correo').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <!-- </ion-list>\n\n    <ion-list class=\"inputs-list\" lines=\"full\"> -->\n\n      <div>\n        <!-- When this bug (https://github.com/ionic-team/ionic-framework/issues/22117) gets fixed, remove .item-label-floating class -->\n        <ion-item class=\"input-item item-label-floating\">\n          <ion-label position=\"floating\">País</ion-label>\n          <ion-select formControlName=\"pais\" cancelText=\"Cancelar\" okText=\"Aceptar\">\n            <ion-select-option *ngFor=\"let item of countries\" [value]=\"item.iso\">{{item.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- When this bug (https://github.com/ionic-team/ionic-framework/issues/22117) gets fixed, remove .item-label-floating class -->\n        <ion-item class=\"input-item item-label-floating\">\n          <ion-label position=\"floating\">Teléfono</ion-label>\n          <ion-input clearInput type=\"text\" formControlName=\"telefono\"></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.telefono\">\n            <div class=\"error-message\"\n              *ngIf=\"validationsForm.get('telefono').hasError(validation.type) && (validationsForm.get('telefono').dirty || validationsForm.get('telefono').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ion-list>\n\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-list-header>\n        <ion-label class=\"header-title\">Términos y Condiciones</ion-label>\n      </ion-list-header>\n\n      <ion-item class=\"input-item terms-item\">\n        <ion-label>Acepto los términos y condiciones</ion-label>\n        <ion-checkbox formControlName=\"terms\"></ion-checkbox>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.terms\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('terms').hasError(validation.type) && (validationsForm.get('terms').dirty || validationsForm.get('terms').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!validationsForm.valid\">\n      Guardar</ion-button>\n  </form>\n\n  <ion-col size=\"12\">\n    <ion-button class=\"sign-out-btn\" expand=\"block\" fill=\"outline\" color=\"bright-blue\" (click)=\"signOut()\">Cerrar Sesión\n    </ion-button>\n  </ion-col>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cuenta_cuenta_module_ts.js.map