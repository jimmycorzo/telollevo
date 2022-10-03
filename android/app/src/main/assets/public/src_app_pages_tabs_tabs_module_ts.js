"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 15448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 64101);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ 83200);





// Send unauthorized users to login
const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectUnauthorizedTo)(['/login']);
// Automatically log in users
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectLoggedInTo)(['/login']);
const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'directorios',
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("default-src_app_pages_buscar_buscar_page_ts"), __webpack_require__.e("src_app_pages_clasificaciones_clasificaciones_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../clasificaciones/clasificaciones.module */ 70528)).then(m => m.ClasificacionesPageModule)
            },
            {
                path: 'tiendas',
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("src_app_pages_categorias_categorias_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../categorias/categorias.module */ 11653)).then(m => m.CategoriasPageModule)
            },
            {
                path: 'servicios',
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("src_app_pages_servicios_servicios_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../servicios/servicios.module */ 86453)).then(m => m.ServiciosPageModule)
            },
            {
                path: 'restaurantes',
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("default-src_app_pages_buscar_buscar_page_ts"), __webpack_require__.e("src_app_pages_restaurantes_restaurantes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../restaurantes/restaurantes.module */ 25400)).then(m => m.RestaurantesPageModule)
            },
            {
                path: '',
                redirectTo: 'directorios',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/directorios',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 15448);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 64101);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 64101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 97867);
/* harmony import */ var _styles_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/tabs.page.scss?ngResource */ 30417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TabsPage = class TabsPage {
    constructor() {
        console.log('Constructor Tabs');
    }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_styles_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 83200:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire-auth-guard.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard),
/* harmony export */   "AuthGuardModule": () => (/* binding */ AuthGuardModule),
/* harmony export */   "canActivate": () => (/* binding */ canActivate),
/* harmony export */   "customClaims": () => (/* binding */ customClaims),
/* harmony export */   "emailVerified": () => (/* binding */ emailVerified),
/* harmony export */   "hasCustomClaim": () => (/* binding */ hasCustomClaim),
/* harmony export */   "idTokenResult": () => (/* binding */ idTokenResult),
/* harmony export */   "isNotAnonymous": () => (/* binding */ isNotAnonymous),
/* harmony export */   "loggedIn": () => (/* binding */ loggedIn),
/* harmony export */   "redirectLoggedInTo": () => (/* binding */ redirectLoggedInTo),
/* harmony export */   "redirectUnauthorizedTo": () => (/* binding */ redirectUnauthorizedTo)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36800);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 66369);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ 63413);









const loggedIn = (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => !!user);

class AuthGuard {
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;

    this.canActivate = (next, state) => {
      const authPipeFactory = next.data.authGuardPipe || (() => loggedIn);

      return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.user)(this.auth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), authPipeFactory(next, state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(can => {
        if (typeof can === 'boolean') {
          return can;
        } else if (Array.isArray(can)) {
          return this.router.createUrlTree(can);
        } else {
          // TODO(EdricChan03): Add tests
          return this.router.parseUrl(can);
        }
      }));
    };
  }

}

AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth));
};

AuthGuard.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'any'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AuthGuard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
    args: [{
      providedIn: 'any'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }, {
      type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth
    }];
  }, null);
})();

const canActivate = pipe => ({
  canActivate: [AuthGuard],
  data: {
    authGuardPipe: pipe
  }
});

const isNotAnonymous = (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => !!user && !user.isAnonymous);
const idTokenResult = (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => user ? user.getIdTokenResult() : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null));
const emailVerified = (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => !!user && user.emailVerified);
const customClaims = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.pipe)(idTokenResult, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(idTokenResult => idTokenResult ? idTokenResult.claims : []));

const hasCustomClaim = claim => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.pipe)(customClaims, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(claims => claims.hasOwnProperty(claim)));

const redirectUnauthorizedTo = redirect => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.pipe)(loggedIn, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(loggedIn => loggedIn || redirect));

const redirectLoggedInTo = redirect => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.pipe)(loggedIn, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(loggedIn => loggedIn && redirect || true));

class AuthGuardModule {
  constructor() {
    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_9__.VERSION.full, 'auth-guard');
  }

}

AuthGuardModule.ɵfac = function AuthGuardModule_Factory(t) {
  return new (t || AuthGuardModule)();
};

AuthGuardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AuthGuardModule
});
AuthGuardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [AuthGuard]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AuthGuardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [AuthGuard]
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 30417:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs/styles/tabs.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 97867:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"directorios\">\n      <ion-icon name=\"call\"></ion-icon>\n      <ion-label>Directorio</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"servicios\">\n      <ion-icon name=\"water\"></ion-icon>\n      <ion-label>Servicios</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"restaurantes\">\n      <ion-icon name=\"fast-food\"></ion-icon>\n      <ion-label>Restaurantes</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tiendas\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Tiendas</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map