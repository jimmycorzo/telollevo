"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_datos_datos_page_ts"],{

/***/ 15864:
/*!*******************************************!*\
  !*** ./src/app/pages/datos/datos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPage": () => (/* binding */ DatosPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _datos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos.page.html?ngResource */ 88776);
/* harmony import */ var _styles_datos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/datos.page.scss?ngResource */ 27648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/firebase.service */ 19446);
/* harmony import */ var app_services_wompi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/wompi.service */ 15676);










let DatosPage = class DatosPage {
  constructor(firebaseService, router, modalController, wompiService) {
    this.firebaseService = firebaseService;
    this.router = router;
    this.modalController = modalController;
    this.wompiService = wompiService;
    this.validations = {
      'tipo': [{
        type: 'required',
        message: 'Por favor seleccione el tipo de documento.'
      }],
      'institucion': [{
        type: 'required',
        message: 'Por favor seleccione una institución financiera.'
      }],
      'persona': [{
        type: 'required',
        message: 'Por favor seleccione el tipo de persona.'
      }],
      'nombre': [{
        type: 'required',
        message: 'Por favor digite su nombre o razón social.'
      }],
      'numero': [{
        type: 'required',
        message: 'Por favor digite el número de identificación.'
      }],
      'direccion': [{
        type: 'required',
        message: 'Por favor digite la dirección de facturación.'
      }],
      'correo': [{
        type: 'required',
        message: 'Por favor digite el correo electrónico de facturación.'
      }, {
        type: 'pattern',
        message: 'Coloque un correo válido.'
      }],
      'telefono': [{
        type: 'required',
        message: 'Por favor digite el número de teléfono de facturación.'
      }, {
        type: 'invalidCountryPhone',
        message: 'El número de teléfono es incorrecto.'
      }],
      'nequi': [{
        type: 'required',
        message: 'Por favor digite el número de teléfono asociado a cuenta de NEQUI.'
      }, {
        type: 'invalidCountryPhone',
        message: 'El número de teléfono es incorrecto.'
      }],
      'tarjeta': [{
        type: 'required',
        message: 'Por favor digite el número de tarjeta de débito o crédito.'
      }],
      'mes': [{
        type: 'required',
        message: 'Por favor digite el mes de expiración.'
      }],
      'cvc': [{
        type: 'required',
        message: 'digite el número de 3 ó 4 dígitos que encuentra al respaldo de la tarjeta.'
      }, {
        type: 'pattern',
        message: 'máximo 4 dígitos'
      }],
      'terms': [{
        type: 'pattern',
        message: 'Debe aceptar los términos y condiciones.'
      }]
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.personas = [{
        id: '0',
        persona: 'Persona Natural'
      }, {
        id: '1',
        persona: 'Persona Jurídica'
      }];

      _this.firebaseService.getDato().subscribe(result => {
        _this.datos = result[0];

        if (_this.datos) {
          _this.validationsForm.controls["id"].setValue(_this.datos.id);

          _this.validationsForm.controls["uid"].setValue(_this.datos.uid);

          _this.validationsForm.controls["nombre"].setValue(_this.datos.nombre);

          _this.validationsForm.controls["correo"].setValue(_this.datos.correo);

          _this.validationsForm.controls["telefono"].setValue(_this.datos.telefono);

          _this.validationsForm.controls["nequi"].setValue("");

          _this.validationsForm.controls["tipo"].setValue(_this.datos.tipo);

          _this.validationsForm.controls["numero"].setValue(_this.datos.numero);

          _this.validationsForm.controls["persona"].setValue(0);

          _this.validationsForm.controls["institucion"].setValue("");
        }
      });

      _this.firebaseService.getTipos().subscribe(result => {
        _this.tipos = result;
      });

      if (_this.pago == '2') {
        // Nequi
        _this.validationsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
          'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.nullValidator),
          'uid': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.nullValidator),
          'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'nequi': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('true')),
          'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
        });
      } else if (_this.pago == '3') {
        // PSE
        _this.validationsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
          'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.nullValidator),
          'uid': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.nullValidator),
          'tipo': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'institucion': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'numero': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'persona': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('true')),
          'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
        });
        _this.instituciones = yield _this.wompiService.pse_financial_institutions();
        _this.instituciones = _this.instituciones.filter(item => item.financial_institution_code != '0');
      } else if (_this.pago == '4') {
        // TC ó TD
        _this.validationsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
          'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.nullValidator),
          'uid': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.nullValidator),
          'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'tarjeta': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'mes': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'cvc': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'cuotas': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
          'terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('true')),
          'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
        });
      }

      const aceptacion = yield _this.wompiService.get_merchant();
      _this.urlTerminos = aceptacion['permalink'];
      _this.token = aceptacion['acceptance_token']; // console.log('URL Terminos', urlTerminos);
    })();
  }

  onSubmit(values) {
    if (this.pago == '2') {
      // Nequi
      var data = JSON.stringify({
        "email": values.correo,
        "name": values.nombre,
        "phone": values.telefono,
        "nequi": values.nequi,
        "cancel": false,
        "token": this.token,
        "pago": this.pago,
        "reference": "Pago por medio de la App -Te Lo Llevo-",
        "type": "NEQUI"
      });
      this.modalController.dismiss(data);
    } else if (this.pago == '3') {
      // PSE
      var data = JSON.stringify({
        "email": values.correo,
        "name": values.nombre,
        "phone": values.telefono,
        "user_type": values.persona,
        "user_legal_id_type": values.tipo,
        "user_legal_id": values.numero,
        "financial_institution_code": values.institucion,
        "cancel": false,
        "token": this.token,
        "pago": this.pago,
        "reference": "Pago por medio de la App -Te Lo Llevo-",
        "type": "PSE"
      });
      this.modalController.dismiss(data);
    } else if (this.pago == '4') {
      // TC/TD
      var data = JSON.stringify({
        "email": values.correo,
        "name": values.nombre,
        "phone": values.telefono,
        "number": values.tarjeta.replaceAll(' ', ''),
        "cvc": values.cvc.toString(),
        "exp_month": values.mes.substring(5, 7),
        "exp_year": values.mes.substring(2, 4),
        "card_holder": values.nombre,
        "cancel": false,
        "token": this.token,
        "installments": values.cuotas,
        "pago": this.pago,
        "reference": "Pago por medio de la App -Te Lo Llevo-",
        "type": "CARD"
      });
      this.modalController.dismiss(data);
    }
  }

  dismiss() {
    var data = JSON.stringify({
      "cancel": true
    });
    this.modalController.dismiss(data);
  }

};

DatosPage.ctorParameters = () => [{
  type: app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: app_services_wompi_service__WEBPACK_IMPORTED_MODULE_4__.WompiService
}];

DatosPage.propDecorators = {
  pago: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
DatosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-datos',
  template: _datos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_datos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DatosPage);


/***/ }),

/***/ 15676:
/*!*******************************************!*\
  !*** ./src/app/services/wompi.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WompiService": () => (/* binding */ WompiService)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let WompiService = class WompiService {
  constructor(http) {
    this.http = http;
  }

  ngOnInit() {
    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  get_transaction(transacion_id) {
    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var keys = yield JSON.parse(localStorage.getItem('keys'));
      const privateKey = keys.key;
      const publicKey = keys.key_pub;
      let httpOptionsPublic = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: publicKey
        })
      }; // this.http.get("https://production.wompi.co/v1/pse/financial_institutions", httpOptionsPublic)
      //   .subscribe(data => {
      //     console.log((data['data'] as Array<FinancialInstitutionModel>));
      //   }, error => {
      //     console.log(error);
      //   });
    })();
  }

  get_merchant() {
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var keys = yield JSON.parse(localStorage.getItem('keys'));
      const privateKey = keys.key;
      const publicKey = keys.key_pub;
      const httpOptionsNone = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      const url = "https://production.wompi.co/v1/merchants/" + publicKey.toString().replace('Bearer ', '');
      return new Promise((resolve, reject) => {
        _this.http.get(url, httpOptionsNone).subscribe(data => {
          return resolve(data['data']['presigned_acceptance']);
        });
      });
    })();
  }

  get_token_card(numero, cvc, mes, ano, nombre) {
    var _this2 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var keys = yield JSON.parse(localStorage.getItem('keys'));
      const privateKey = keys.key;
      const publicKey = keys.key_pub;
      let httpOptionsPublic = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: publicKey
        })
      };
      var data = JSON.stringify({
        "number": numero,
        "cvc": cvc,
        "exp_month": mes,
        "exp_year": ano,
        "card_holder": nombre
      });
      const url = "https://production.wompi.co/v1/tokens/cards";
      return new Promise((resolve, reject) => {
        _this2.http.post(url, data, httpOptionsPublic).subscribe(data => {
          return resolve(data['data']);
        }, error => {
          return resolve(error);
        });
      });
    })();
  }

  get_token_nequi(telefono) {
    var _this3 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var keys = yield JSON.parse(localStorage.getItem('keys'));
      const privateKey = keys.key;
      const publicKey = keys.key_pub;
      let httpOptionsPublic = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: publicKey
        })
      };
      var data = JSON.stringify({
        "phone_number": telefono
      });
      const url = "https://production.wompi.co/v1/tokens/nequi";
      return new Promise((resolve, reject) => {
        _this3.http.post(url, data, httpOptionsPublic).subscribe(data => {
          return resolve(data['data']);
        }, error => {
          return resolve(error);
        });
      });
    })();
  }

  pse_financial_institutions() {
    var _this4 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var keys = yield JSON.parse(localStorage.getItem('keys'));
      const privateKey = keys.key;
      const publicKey = keys.key_pub;
      let httpOptionsPublic = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: publicKey
        })
      };
      return new Promise((resolve, reject) => {
        _this4.http.get("https://production.wompi.co/v1/pse/financial_institutions", httpOptionsPublic).subscribe(data => {
          return resolve(data['data']);
        }, error => {
          console.log(error);
        });
      });
    })();
  }

  transactions(postData) {
    var _this5 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var keys = yield JSON.parse(localStorage.getItem('keys'));
      const privateKey = keys.key;
      const publicKey = keys.key_pub;
      let httpOptionsPublic = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: publicKey
        })
      };
      return new Promise((resolve, reject) => {
        _this5.http.post("https://production.wompi.co/v1/transactions", postData, httpOptionsPublic).subscribe(data => {
          return resolve(data['data']);
        }, error => {
          console.log(error);
        });
      });
    })();
  }

  transactions_get(transactionId) {
    var _this6 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let httpOptionsNone = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      return new Promise((resolve, reject) => {
        _this6.http.get("https://production.wompi.co/v1/transactions/" + transactionId, httpOptionsNone).subscribe(data => {
          return resolve(data['data']);
        }, error => {
          console.log(error);
        });
      });
    })();
  }

};

WompiService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}];

WompiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], WompiService);


/***/ }),

/***/ 27648:
/*!***************************************************************!*\
  !*** ./src/app/pages/datos/styles/datos.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".item-block {\n  height: auto;\n}\n\n.select-block {\n  white-space: normal !important;\n}\n\n.item-ios.item-block .item-inner {\n  height: auto;\n}\n\n.select-option {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUlJLDhCQUFBO0FBRko7O0FBT0E7RUFDSSxZQUFBO0FBSko7O0FBT0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFKRiIsImZpbGUiOiJkYXRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1ibG9jayB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2VsZWN0LWJsb2Nre1xuICAgIC8vIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAvLyBoZWlnaHQ6IDNlbTtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAvLyB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnNlbGVjdC1vcHRpb24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 88776:
/*!********************************************************!*\
  !*** ./src/app/pages/datos/datos.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">Regresar</ion-button>\n    </ion-buttons>\n    <ion-title>Ingresa tus datos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"forms-validations-content\">\n  <form class=\"validations-form\" [formGroup]=\"validationsForm\" (submit)=\"onSubmit(validationsForm.value)\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Nombre o Razón Social</ion-label>\n        <ion-input type=\"text\" formControlName=\"nombre\" clearInput></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.nombre\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('nombre').hasError(validation.type) && (validationsForm.get('nombre').dirty || validationsForm.get('nombre').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Correo Electrónico</ion-label>\n        <ion-input type=\"text\" formControlName=\"correo\" clearInput inputmode=\"email\">\n        </ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.correo\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('correo').hasError(validation.type) && (validationsForm.get('correo').dirty || validationsForm.get('correo').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <div>\n        <ion-item class=\"input-item item-label-floating\">\n          <ion-label position=\"floating\">Celular</ion-label>\n          <ion-input clearInput type=\"text\" formControlName=\"telefono\"></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.telefono\">\n            <div class=\"error-message\"\n              *ngIf=\"validationsForm.get('telefono').hasError(validation.type) && (validationsForm.get('telefono').dirty || validationsForm.get('telefono').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ion-list>\n\n    <!-- PSE -->\n    <ion-list class=\"inputs-list\" lines=\"full\" *ngIf=\"pago=='3'\">\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Tipo de Persona</ion-label>\n        <ion-select formControlName=\"persona\" cancelText=\"Cancelar\" okText=\"Aceptar\">\n          <ion-select-option *ngFor=\"let persona of personas\" [value]=\"persona.id\">{{persona.persona}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.persona\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('persona').hasError(validation.type) && (validationsForm.get('persona').dirty || validationsForm.get('persona').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Tipo de Documento</ion-label>\n        <ion-select style=\"width: 100% !important;min-width: 100% !important; \" formControlName=\"tipo\"\n          cancelText=\"Cancelar\" okText=\"Aceptar\">\n          <ion-select-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\" class=\"select-block\">{{tipo.tipo}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Número Documento</ion-label>\n        <ion-input type=\"text\" formControlName=\"numero\" clearInput></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.numero\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('numero').hasError(validation.type) && (validationsForm.get('numero').dirty || validationsForm.get('numero').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Institución Financiera</ion-label>\n        <ion-select formControlName=\"institucion\" cancelText=\"Cancelar\" okText=\"Aceptar\">\n          <ion-select-option *ngFor=\"let institucion of instituciones\" [value]=\"institucion.financial_institution_code\">\n            {{institucion.financial_institution_name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.institucion\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('institucion').hasError(validation.type) && (validationsForm.get('institucion').dirty || validationsForm.get('institucion').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <!-- NEQUI -->\n    <ion-list class=\"inputs-list\" lines=\"full\" *ngIf=\"pago=='2'\">\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Teléfono asociado a cuenta de NEQUI</ion-label>\n        <ion-input clearInput type=\"text\" formControlName=\"nequi\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.nequi\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('nequi').hasError(validation.type) && (validationsForm.get('nequi').dirty || validationsForm.get('nequi').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <!-- CREDIT/DEBIT CARD -->\n    <ion-list class=\"inputs-list\" lines=\"full\" *ngIf=\"pago=='4'\">\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Número de Tarjeta</ion-label>\n        <ion-input clearInput type=\"text\" formControlName=\"tarjeta\" [brmasker]=\"{mask:'0000 0000 0000 0000', len:19}\">\n        </ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.tarjeta\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('tarjeta').hasError(validation.type) && (validationsForm.get('tarjeta').dirty || validationsForm.get('tarjeta').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Expira</ion-label>\n        <ion-input clearInput type=\"month\" formControlName=\"mes\" placeholder=\"Mes\" inputmode=\"numeric\" step=\"1\"\n          value=\"1\">\n        </ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.mes\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('mes').hasError(validation.type) && (validationsForm.get('mes').dirty || validationsForm.get('mes').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Código CVC</ion-label>\n        <ion-input clearInput type=\"number\" formControlName=\"cvc\" maxlength=\"4\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.cvc\">\n          <div class=\"error-cvcsage\"\n            *ngIf=\"validationsForm.get('cvc').hasError(validation.type) && (validationsForm.get('cvc').dirty || validationsForm.get('cvc').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <ion-item class=\"input-item item-label-floating\">\n        <ion-label position=\"floating\">Número de Cuotas</ion-label>\n        <ion-input clearInput type=\"number\" formControlName=\"cuotas\" min=\"1\" max=\"36\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n    <!-- Términos y condiciones -->\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item terms-item\">\n        <ion-label>Acepto los <a href=\"{{this.urlTerminos}}\">términos y condiciones</a>\n        </ion-label>\n        <ion-checkbox formControlName=\"terms\"></ion-checkbox>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.terms\">\n          <div class=\"error-message\"\n            *ngIf=\"validationsForm.get('terms').hasError(validation.type) && (validationsForm.get('terms').dirty || validationsForm.get('terms').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!validationsForm.valid\">\n      Continuar al pago</ion-button>\n  </form>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_datos_datos_page_ts.js.map