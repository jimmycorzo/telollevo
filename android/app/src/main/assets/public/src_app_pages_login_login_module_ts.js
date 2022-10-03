"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);

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
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
        exports: []
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _styles_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/login.page.scss?ngResource */ 72680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/util.service */ 67241);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);









let LoginPage = class LoginPage {
  constructor(platform, alertController, util, menuCtrl, authService) {
    this.platform = platform;
    this.alertController = alertController;
    this.util = util;
    this.menuCtrl = menuCtrl;
    this.authService = authService;
    console.log('constructor Login');
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
    console.log('ngOnInit Login');
  }

  ionViewDidEnter() {
    console.log('Ingresa a Login');
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
    this.platform.ready().then(() => {
      console.log('Cierra SplashScreen 2');
      _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide();
    });
  }

  signin() {
    console.log('signin Login');

    if (this.util.validateEmail(this.email) && this.password !== '') {
      this.util.openLoader();
      this.authService.login(this.email, this.password).then(userData => {
        localStorage.setItem('user', JSON.stringify(userData));
        this.util.navigate('tabs/directorios', false);
        this.email = '';
        this.password = '';
      }).catch(err => {
        if (err) {
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        }
      }).then(el => this.util.closeLoading());
    } else {
      this.util.presentToast('Ingrese correo electrónico y contraseña', true, 'bottom', 2100);
    }
  }

  forgotPassword() {
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Restablecer Contraseña',
        backdropDismiss: false,
        cssClass: 'darkModeAwareAlert',
        inputs: [{
          name: 'email',
          type: 'email',
          placeholder: 'Introduce tu correo electrónico'
        }],
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: userResult => {
            console.log('Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: userResult => {
            const value = _this.util.validateEmail(userResult.email);

            _this.authService.forgotPassword(userResult.email);

            return value;
          }
        }]
      });
      yield alert.present();
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_styles_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 72680:
/*!***************************************************************!*\
  !*** ./src/app/pages/login/styles/login.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.main-section {\n  height: 95vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card {\n  --background: var(--ion-color-light);\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border-radius: 0;\n  height: 100vh;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.input-field {\n  background-color: rgb(240, 240, 240);\n  border: 1px solid rgb(210, 210, 210);\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  .input-field {\n    background-color: var(--ion-color-medium);\n  }\n}\n\n.white-color {\n  color: white;\n}\n\n.small-text {\n  font-size: 13px;\n}\n\n.small-text a {\n  text-decoration: unset !important;\n}\n\n.row-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.img-logo {\n  width: 280px;\n  padding-bottom: 10px;\n}\n\n.btn-transition {\n  background: linear-gradient(to right, var(--ion-color-primary) 14%, var(--ion-color-primary) 96%);\n}\n\n.btn-color {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5Q0FBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBRUU7RUFDRSxpQ0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsaUdBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0FBREYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5tYWluLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDk1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC5pbnB1dC1maWVsZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH1cbn1cblxuLndoaXRlLWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc21hbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnJvdy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctbG9nbyB7XG4gIHdpZHRoOiAyODBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5idG4tdHJhbnNpdGlvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDE0JSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDk2JSk7XG59XG5cbi5idG4tY29sb3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuLy8gICBpb24tY2FyZCB7XG4vLyAgICAgd2lkdGg6IDYwMHB4O1xuLy8gICAgIG1hcmdpbjogYXV0bztcbi8vICAgfVxuLy8gfSJdfQ== */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"main-section\">\n    <ion-row class=\"row-section\">\n      <div class=\"fire-logo\">\n        <img src=\"assets/images/logo.webp\" class=\"img-logo\">\n        <ion-text color=\"dark\">\n          <h2 class=\"ion-no-margin ion-margin-vertical ion-text-center\">Ingresar</h2>\n        </ion-text>\n      </div>\n    </ion-row>\n    <div class=\"ion-padding\">\n      <ion-row>\n        <ion-col>\n          <ion-input clearInput type=\"email\" placeholder=\"Correo\" [(ngModel)]=\"email\"\n            class=\"input-field ion-padding-horizontal\" clear-input=\"true\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input clearInput type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"password\"\n            class=\"input-field ion-padding-horizontal\" clear-input=\"true\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-text color=\"medium\" (click)=\"forgotPassword()\" class=\"ion-float-end\">\n            <h6 class=\"small-text ion-no-margin ion-text-end\">¿Has olvidado tu contraseña?</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"signin()\" color=\"undefined\" class=\"btn-transition\"><strong\n              class=\"white-color\">Ingresar</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"line\"></div>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" fill=\"outline\" color=\"undefined\" (click)=\"util.navigate('signup')\"\n            class=\"btn-color\"><strong>¿Nuevo? Crear una Cuenta</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col>\n          <facebook-login (accessToken)=\"facebookLogin($event)\"></facebook-login>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <twitter-login (accessToken)=\"twitterLogin($event)\"></twitter-login>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <google-login (accessToken)=\"googleLogin($event)\"></google-login>\n        </ion-col>\n      </ion-row> -->\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map