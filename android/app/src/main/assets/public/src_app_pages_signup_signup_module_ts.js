"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 90392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 64374);
/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 17110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 90392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 64374);
/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 64374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 45722);
/* harmony import */ var _styles_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/signup.page.scss?ngResource */ 41391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/util.service */ 67241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);







let SignupPage = class SignupPage {
    constructor(util, menuCtrl, authService) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
    }
    signup() {
        if (this.firstName !== '' && this.lastName !== '' && this.email !== '' && this.password !== '' && this.util.validateEmail(this.email)) {
            this.authService.createAccount(this.email, this.password).then(userData => {
                this.util.presentToast('Thanks for Signup', true, 'bottom', 2100);
                this.util.navigate('', false);
            }).catch(err => {
                if (err) {
                    this.util.presentToast(`${err}`, true, 'bottom', 2100);
                }
            });
        }
        else {
            this.util.presentToast('Wrong Input/Invalid Details', true, 'bottom', 2100);
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_styles_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 41391:
/*!*****************************************************************!*\
  !*** ./src/app/pages/signup/styles/signup.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.input-field {\n  background-color: rgb(240, 240, 240);\n  border: 1px solid rgb(210, 210, 210);\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  .input-field {\n    background-color: var(--ion-color-medium);\n  }\n}\n\n.main-section {\n  height: 95vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card {\n  --background: #fff;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.btn-transition {\n  background: linear-gradient(to right, var(--ion-color-primary) 14%, var(--ion-color-primary) 96%);\n}\n\n.btn-color {\n  color: var(--ion-color-primary);\n}\n\n.row-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.img-logo {\n  width: 280px;\n  padding-bottom: 10px;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUNBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlHQUFBO0FBQUY7O0FBR0E7RUFDRSwrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQUFGOztBQVVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLmlucHV0LWZpZWxkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxufVxuXG4ubWFpbi1zZWN0aW9uIHtcbiAgaGVpZ2h0OiA5NXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi10cmFuc2l0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTQlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgOTYlKTtcbn1cblxuLmJ0bi1jb2xvciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5yb3ctc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nLWxvZ28ge1xuICB3aWR0aDogMjgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4vLyAuZmlyZS1sb2dvIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuLy8gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 45722:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"main-section\">\n    <ion-row class=\"row-section\">\n      <div class=\"img-logo\">\n        <img src=\"assets/images/logo.webp\" class=\"img-logo\">\n        <ion-text color=\"dark\">\n          <h2 class=\"ion-no-margin ion-text-center ion-margin-vertical\">Registrarse</h2>\n        </ion-text>\n      </div>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input type=\"text\" placeholder=\"Nombres\" [(ngModel)]=\"firstName\" class=\"input-field ion-padding-horizontal\">\n        </ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input type=\"text\" placeholder=\"Apellidos\" [(ngModel)]=\"lastName\"\n          class=\"input-field ion-padding-horizontal\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input clearInput type=\"email\" placeholder=\"Correo\" [(ngModel)]=\"email\"\n          class=\"input-field ion-padding-horizontal\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input clearInput type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"password\"\n          class=\"input-field ion-padding-horizontal\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <div class=\"ion-padding\">\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" color=\"undefined\" class=\"btn-transition\" (click)=\"signup()\"><strong>Crear una\n              Cuenta</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" fill=\"outline\" color=\"undefined\" (click)=\"util.navigate('login')\"\n            class=\"btn-color\"><strong>¿Tiene una cuenta? Ingresar</strong></ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map