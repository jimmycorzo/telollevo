(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 5557)).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 17110)).then(m => m.SignupPageModule)
    },
    {
        path: 'directorios/:clasificacionId/:clasificacion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("src_app_pages_directorios_directorios_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/directorios/directorios.module */ 46966)).then(m => m.DirectoriosPageModule)
    },
    {
        path: 'links/:servicioId/:servicio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("default-src_app_pages_buscar_buscar_page_ts"), __webpack_require__.e("default-src_app_pages_productos_productos_page_ts"), __webpack_require__.e("default-src_app_services_Firebase_service_ts"), __webpack_require__.e("src_app_pages_links_links_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/links/links.module */ 6279)).then(m => m.LinksPageModule)
    },
    {
        path: 'tiendas/:categoriaId/:categoria',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("default-src_app_pages_buscar_buscar_page_ts"), __webpack_require__.e("src_app_pages_tiendas_tiendas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tiendas/tiendas.module */ 49134)).then(m => m.TiendasPageModule)
    },
    {
        path: 'clases/:tiendaId/:tienda/:cerrada/:abre/:cierra/:proximamente',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("default-src_app_pages_buscar_buscar_page_ts"), __webpack_require__.e("default-src_app_pages_productos_productos_page_ts"), __webpack_require__.e("src_app_pages_clases_clases_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clases/clases.module */ 87086)).then(m => m.ClasesPageModule)
    },
    {
        path: 'productos/:tiendaId/:tienda/:claseId/:clase/:cerrada/:abre/:cierra/:proximamente',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("default-src_app_pages_buscar_buscar_page_ts"), __webpack_require__.e("default-src_app_pages_productos_productos_page_ts"), __webpack_require__.e("src_app_pages_productos_productos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/productos/productos.module */ 52084)).then(m => m.ProductosPageModule)
    },
    {
        path: 'detalles',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("src_app_pages_detalles_detalles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/detalles/detalles.module */ 10735)).then(m => m.DetallesPageModule)
    },
    {
        path: 'buscar/:tiendaId/:claseId/:clase',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("default-src_app_pages_buscar_buscar_page_ts"), __webpack_require__.e("src_app_pages_buscar_buscar_module_ts-src_app_services_carrito_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/buscar/buscar.module */ 58593)).then(m => m.BuscarPageModule)
    },
    {
        path: 'carrito',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("default-src_app_services_Firebase_service_ts"), __webpack_require__.e("src_app_pages_carrito_carrito_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/carrito/carrito.module */ 74646)).then(m => m.CarritoPageModule)
    },
    {
        path: 'categorias',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("src_app_pages_categorias_categorias_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/categorias/categorias.module */ 11653)).then(m => m.CategoriasPageModule),
    },
    {
        path: 'direcciones',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_direcciones_direcciones_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/direcciones/direcciones.module */ 29757)).then(m => m.DireccionesPageModule)
    },
    {
        path: 'politica',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/privacy-policy/privacy-policy.module */ 35369)).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'terminos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_terms-of-service_terms-of-service_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms-of-service/terms-of-service.module */ 90312)).then(m => m.TermsOfServicePageModule)
    },
    {
        path: 'historial',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_historial_historial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/historial/historial.module */ 68571)).then(m => m.HistorialPageModule)
    },
    {
        path: 'cuenta',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cuenta_cuenta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cuenta/cuenta.module */ 94178)).then(m => m.CuentaPageModule)
    },
    // {
    //   path: 'notificaciones',
    //   loadChildren: () => import('./pages/notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
    // },
    {
        path: 'tiendas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("default-src_app_pages_carrito_carrito_page_ts"), __webpack_require__.e("default-src_app_pages_detalles_detalles_page_ts"), __webpack_require__.e("default-src_app_pages_buscar_buscar_page_ts"), __webpack_require__.e("src_app_pages_tiendas_tiendas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tiendas/tiendas.module */ 49134)).then(m => m.TiendasPageModule)
    },
    {
        path: 'ayuda',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ayuda_ayuda_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ayuda/ayuda.module */ 78367)).then(m => m.AyudaPageModule)
    },
    {
        path: 'confirmacion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_confirmacion_confirmacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/confirmacion/confirmacion.module */ 80463)).then(m => m.ConfirmacionPageModule)
    },
    {
        path: 'datos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_datos_datos_page_ts"), __webpack_require__.e("src_app_pages_datos_datos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/datos/datos.module */ 21048)).then(m => m.DatosPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _pages_side_menu_styles_side_menu_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/side-menu/styles/side-menu.scss?ngResource */ 78180);
/* harmony import */ var _pages_side_menu_styles_side_menu_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/side-menu/styles/side-menu.shell.scss?ngResource */ 92512);
/* harmony import */ var _pages_side_menu_styles_side_menu_responsive_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/side-menu/styles/side-menu.responsive.scss?ngResource */ 98809);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authentication.service */ 7053);










 // import { PushService } from './services/push.service';



swiper__WEBPACK_IMPORTED_MODULE_7__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_7__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_7__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_7__.Zoom]);
let AppComponent = class AppComponent {
  // appPages = [
  //   {
  //     title: 'Ayuda',
  //     url: '/ayuda',
  //     ionicIcon: 'rocket-outline'
  //   },
  //   {
  //     title: 'Política de Privacidad',
  //     url: '/politica',
  //     ionicIcon: 'alert-circle-outline'
  //   },
  //   {
  //     title: 'Términos y Condiciones',
  //     url: '/terminos',
  //     ionicIcon: 'alert-circle-outline'
  //   },
  // ];
  constructor( // public historyHelper: HistoryHelperService,
  router, platform, // private pushService: PushService,
  // private swUpdate: SwUpdate,
  authService) {
    this.router = router;
    this.platform = platform;
    this.authService = authService;
    this.textDir = 'ltr';
    this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.version;
    console.log('version:', this.version);
    this.initializeApp();
  }

  initializeApp() {
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('initializeApp app');

      try {
        // this.router.navigate(['tabs/directorios']);
        console.log('Cierra SplashScreen 1');
        yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__.SplashScreen.hide();
      } catch (err) {// console.log('This is normal in a browser', err);
      }

      _this.platform.ready().then(() => {
        console.log('platform.ready');

        _this.router.navigate(['tabs/directorios']); // this.pushService.configuracionInicial();

      });
    })();
  }

  signout() {
    this.authService.signout();
  }

  ngOnInit() {
    console.log('ngOnInit'); // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.versionUpdates.subscribe(() => {
    //     var version = environment.version;
    //     if (confirm("Hay una nueva versión disponible (" + version + "). ¿Desea actualizar la versión actual?")) {
    //       window.location.reload();
    //       this.router.navigate(['tabs/directorios']);
    //     }
    //   });
    // }
  }

};

AppComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewEncapsulation.None,
  styles: [_pages_side_menu_styles_side_menu_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _pages_side_menu_styles_side_menu_shell_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__, _pages_side_menu_styles_side_menu_responsive_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/components/components.module */ 45642);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/app */ 89674);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ 23628);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/firebase.service */ 19446);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.component */ 55041);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/storage */ 42111);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 12407);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 28221);













//import { OneSignal } from '@ionic-native/onesignal/ngx';
// import { IonicStorageModule } from '@ionic/storage-angular';


// import { RESPONSE } from '@nguniversal/express-engine/tokens';






let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            app_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_11__.SwiperModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserTransferStateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            // IonicStorageModule.forRoot(),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: _env_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production }),
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_16__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_16__.initializeApp)(_env_environment__WEBPACK_IMPORTED_MODULE_2__.environment.config)),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getFirestore)()),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.provideAuth)(() => {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.isNativePlatform()) {
                    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.initializeAuth)((0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_16__.getApp)(), {
                        persistence: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__.indexedDBLocalPersistence,
                    });
                }
                else {
                    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.getAuth)();
                }
            }),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__.getStorage)()),
        ],
        providers: [
            //  OneSignal, 
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService,
            _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__.CallNumber,
            _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
                useFactory: (platformId, response) => {
                    return () => {
                        // In the server.ts we added a custom response header with information about the device requesting the app
                        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformServer)(platformId)) {
                            if (response && response !== null) {
                                // Get custom header from the response sent from the server.ts
                                const mobileDeviceHeader = response.get('mobile-device');
                                // Set Ionic config mode?
                            }
                        }
                    };
                },
                // deps: [PLATFORM_ID, [new Optional(), RESPONSE]],
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID, [new _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional()]],
                multi: true
            },
        ],
        bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        ],
    })
], AppModule);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.module */ 75506);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ 341);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_6__.SwiperModule
        ],
        declarations: [],
        exports: [
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule,
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ComponentsModule);



/***/ }),

/***/ 93604:
/*!********************************************!*\
  !*** ./src/app/models/categorias.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasModel": () => (/* binding */ CategoriasModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);

class CategoriasModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 49654:
/*!****************************************!*\
  !*** ./src/app/models/clases.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasesModel": () => (/* binding */ ClasesModel)
/* harmony export */ });
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shell/data-store */ 29760);

class ClasesModel extends app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 35233:
/*!*************************************************!*\
  !*** ./src/app/models/clasificaciones.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasificacionesModel": () => (/* binding */ ClasificacionesModel)
/* harmony export */ });
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shell/data-store */ 29760);

class ClasificacionesModel extends app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 7671:
/*!*****************************************!*\
  !*** ./src/app/models/cuentas.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentasModel": () => (/* binding */ CuentasModel)
/* harmony export */ });
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shell/data-store */ 29760);

class CuentasModel extends app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 20129:
/*!***********************************************!*\
  !*** ./src/app/models/departamentos.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartamentosModel": () => (/* binding */ DepartamentosModel)
/* harmony export */ });
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shell/data-store */ 29760);

class DepartamentosModel extends app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 4160:
/*!*********************************************!*\
  !*** ./src/app/models/direcciones.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DireccionesModel": () => (/* binding */ DireccionesModel)
/* harmony export */ });
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shell/data-store */ 29760);

class DireccionesModel extends app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 97228:
/*!*********************************************!*\
  !*** ./src/app/models/directorios.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoriosModel": () => (/* binding */ DirectoriosModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);

class DirectoriosModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 23248:
/*!***************************************!*\
  !*** ./src/app/models/links.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinksModel": () => (/* binding */ LinksModel)
/* harmony export */ });
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shell/data-store */ 29760);

class LinksModel extends app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 77959:
/*!**********************************************!*\
  !*** ./src/app/models/misproductos.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisProductosModel": () => (/* binding */ MisProductosModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);

class MisProductosModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
        this.amount = 0;
    }
}


/***/ }),

/***/ 38175:
/*!*******************************************!*\
  !*** ./src/app/models/servicios.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosModel": () => (/* binding */ ServiciosModel)
/* harmony export */ });
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shell/data-store */ 29760);

class ServiciosModel extends app_shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 95098:
/*!*****************************************!*\
  !*** ./src/app/models/tiendas.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiendasModel": () => (/* binding */ TiendasModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);

class TiendasModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInfo": () => (/* binding */ AuthInfo),
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.service */ 67241);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);







class AuthInfo {
  constructor($uid) {
    this.$uid = $uid;
  }

  isLoggedIn() {
    return !!this.$uid;
  }

}
let AuthenticationService = class AuthenticationService {
  constructor(fireAuth, fireStore, util) {
    this.fireAuth = fireAuth;
    this.fireStore = fireStore;
    this.util = util;
    this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(AuthenticationService.UNKNOWN_USER);
    this.fireAuth.onAuthStateChanged(user => {
      if (user) {
        // console.log('Firebase User - ' + user);
        this.current_user = user;
      }
    }); // this.fireAuth.authState.pipe(take(1)).subscribe(user => {
    //   if (user) {
    //     this.authInfo$.next(new AuthInfo(user.uid));
    //   }
    // });
  }

  forgotPassword(email) {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.sendPasswordResetEmail)(this.fireAuth, email).then(() => {
      this.util.presentToast('Correo electrónico enviado', true, 'bottom', 2100);
    }).catch(err => this.util.presentToast(`${err}`, true, 'bottom', 2100));
  }

  createAccount(email, password) {
    var _this = this;

    return new Promise((resolved, rejected) => {
      (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(this.fireAuth, email, password).then( /*#__PURE__*/function () {
        var _ref = (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (userCredential) {
          const user = userCredential.user;

          if (user) {
            _this.authInfo$.next(new AuthInfo(user.uid));

            const docRef = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this.fireStore, "users"), {
              id: user.uid,
              username: user.displayName,
              email: user.email
            });
            console.log("Document written with ID: ", docRef.id);
            resolved(user);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch(err => {
        this.authInfo$.next(AuthenticationService.UNKNOWN_USER); // eslint-disable-next-line prefer-promise-reject-errors

        rejected(`falla en la creación ${err}`);
      });
    });
  }

  login(email, password) {
    return new Promise((resolved, rejected) => {
      (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(this.fireAuth, email, password).then(res => {
        if (res.user) {
          this.authInfo$.next(new AuthInfo(res.user.uid));
          resolved(res.user);
        }
      }).catch(err => {
        this.authInfo$.next(AuthenticationService.UNKNOWN_USER); // eslint-disable-next-line prefer-promise-reject-errors

        rejected(`falla en la creación ${err}`);
      }).then(el => this.util.closeLoading());
    }); // return new Promise<any>((resolved, rejected) => {
    //   signInWithEmailAndPassword(this.fireAuth, email, password)
    //     .then(res => {
    //       if (res.user) {
    //         this.authInfo$.next(new AuthInfo(res.user.uid));
    //         resolved(res.user);
    //       }
    //     })
    //     .catch(err => {
    //       this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
    //       // eslint-disable-next-line prefer-promise-reject-errors
    //       rejected(`falla en la creación ${err}`);
    //     });
    // });
  }

  logout() {
    this.authInfo$.next(AuthenticationService.UNKNOWN_USER);
    return this.fireAuth.signOut();
  } // Sign out


  signout() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.util.navigate('login');
    });
  }

  checkAuth() {
    return new Promise(resolve => {
      this.fireAuth.onAuthStateChanged(user => {
        resolve(user);
      });
    });
  }

};
AuthenticationService.UNKNOWN_USER = new AuthInfo(null);

AuthenticationService.ctorParameters = () => [{
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth
}, {
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore
}, {
  type: _util_service__WEBPACK_IMPORTED_MODULE_1__.UtilService
}];

AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], AuthenticationService);


/***/ }),

/***/ 78035:
/*!********************************************!*\
  !*** ./src/app/services/collectionJoin.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leftJoinCategorias": () => (/* binding */ leftJoinCategorias),
/* harmony export */   "leftJoinClases": () => (/* binding */ leftJoinClases),
/* harmony export */   "leftJoinDepartamentos": () => (/* binding */ leftJoinDepartamentos),
/* harmony export */   "leftJoinHorarios": () => (/* binding */ leftJoinHorarios),
/* harmony export */   "leftJoinProductos": () => (/* binding */ leftJoinProductos),
/* harmony export */   "leftJoinTiendas": () => (/* binding */ leftJoinTiendas)
/* harmony export */ });
/* harmony import */ var _angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/Firestore */ 56466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 52160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88759);



const leftJoinClases = (afs, field, collection1, limit = 100) => {
    return source => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {
        // Operator state
        let collData;
        // Track total num of joined doc reads
        let totalJoins = 0;
        return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(data => {
            // Clear mapping on each emitted val ;
            // Save the parent data state
            collData = data;
            const reads$ = [];
            for (const doc of collData) {
                // Push doc read to Array
                if (doc[field]) {
                    // Perform query on join key, with optional limit
                    const q = ref => ref.where('id', '==', doc[field]).limit(limit);
                    reads$.push(((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(afs, collection1), (0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.where)('id', '==', doc[field])), { idField: 'id' }))
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(f => f[0])));
                }
                else {
                    reads$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]));
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(reads$);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(joins => {
            return collData.map((v, i) => {
                // totalJoins += joins[i].length;
                const value = { ...v, [collection1]: joins[i] || null };
                return value.clases;
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(final => {
            console.log(`Queried ${final.length}, Joined ${totalJoins} docs`);
            totalJoins = 0;
        }));
    });
};
const leftJoinProductos = (afs, field, collection1, limit = 100) => {
    return source => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {
        // Operator state
        let collData;
        // Track total num of joined doc reads
        let totalJoins = 0;
        return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(data => {
            // Clear mapping on each emitted val ;
            // Save the parent data state
            collData = data;
            const reads$ = [];
            for (const doc of collData) {
                // Push doc read to Array
                if (doc[field]) {
                    // Perform query on join key, with optional limit
                    const q = ref => ref.where('id', '==', doc[field]).limit(limit);
                    reads$.push(((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(afs, collection1), (0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.where)('id', '==', doc[field])), { idField: 'id' }))
                        .pipe(leftJoinCategorias(afs, 'categoriaId', 'categorias'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(f => f[0])));
                }
                else {
                    reads$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]));
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(reads$);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(joins => {
            return collData.map((v, i) => {
                //totalJoins += joins[i].length;
                const value = { ...v, [collection1]: joins[i] };
                return value;
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(final => {
            console.log(`Queried ${final.length}, Joined ${totalJoins} docs`);
            totalJoins = 0;
        }));
    });
};
const leftJoinCategorias = (afs, field, collection1, limit = 100) => {
    return source => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {
        // Operator state
        let collData;
        // Track total num of joined doc reads
        let totalJoins = 0;
        return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(data => {
            // Clear mapping on each emitted val ;
            // Save the parent data state
            collData = data;
            const reads$ = [];
            for (const doc of collData) {
                // Push doc read to Array
                if (doc[field]) {
                    // Perform query on join key, with optional limit
                    reads$.push(((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(afs, collection1), (0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.where)('id', '==', doc[field])), { idField: 'id' }))
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(f => f[0])));
                }
                else {
                    reads$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]));
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(reads$);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(joins => {
            return collData.map((v, i) => {
                // totalJoins += joins[i].length;
                const value = { ...v, [collection1]: joins[i] || null };
                return value;
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(final => {
            console.log(`Queried ${final.length}, Joined ${totalJoins} docs`);
            totalJoins = 0;
        }));
    });
};
const leftJoinTiendas = (afs, field, collection1, limit = 100) => {
    return source => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {
        // Operator state
        let collData;
        // Track total num of joined doc reads
        let totalJoins = 0;
        return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(data => {
            // Clear mapping on each emitted val ;
            // Save the parent data state
            collData = data;
            const reads$ = [];
            for (const doc of collData) {
                // Push doc read to Array
                if (doc[field]) {
                    // Perform query on join key, with optional limit
                    reads$.push(((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(afs, collection1), (0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.where)('id', '==', doc[field])), { idField: 'id' }))
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(f => f[0])));
                }
                else {
                    reads$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]));
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(reads$);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(joins => {
            return collData.map((v, i) => {
                // totalJoins += joins[i].length;
                const value = { ...v, [collection1]: joins[i] || null };
                return value;
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(final => {
            console.log(`Queried ${final.length}, Joined ${totalJoins} docs`);
            totalJoins = 0;
        }));
    });
};
const leftJoinDepartamentos = (afs, field, collection, limit = 100) => {
    return source => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {
        // Operator state
        let collData;
        // Track total num of joined doc reads
        let totalJoins = 0;
        return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(data => {
            // Clear mapping on each emitted val ;
            // Save the parent data state
            collData = data;
            const reads$ = [];
            for (const doc of collData) {
                // Push doc read to Array
                if (doc[field]) {
                    // Perform query on join key, with optional limit
                    const q = ref => ref.where('id', '==', doc[field]).limit(limit);
                    reads$.push(collection(afs, collection, q).valueChanges()
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(f => f[0])));
                }
                else {
                    reads$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]));
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(reads$);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(joins => {
            return collData.map((v, i) => {
                // totalJoins += joins[i].length;
                const value = { ...v, [collection]: joins[i] || null };
                return value;
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(final => {
            console.log(`Queried ${final.length}, Joined ${totalJoins} docs`);
            totalJoins = 0;
        }));
    });
};
const leftJoinHorarios = (afs, field, collection1, limit = 100) => {
    return source => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {
        // Operator state
        let collData;
        // Track total num of joined doc reads
        let totalJoins = 0;
        return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(data => {
            // Clear mapping on each emitted val ;
            // Save the parent data state
            collData = data;
            const reads$ = [];
            for (const doc of collData) {
                // Push doc read to Array
                if (doc[field]) {
                    // Perform query on join key, with optional limit
                    const dw = new Date().getDay();
                    // const q = ref => ref.where('tiendaId', '==', doc[field]).where('dia', '==', dw).limit(limit);
                    reads$.push(((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(afs, collection1), (0,_angular_fire_Firestore__WEBPACK_IMPORTED_MODULE_2__.where)('tiendaId', '==', doc[field])), { idField: 'id' }))
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(f => f[0])));
                }
                else {
                    reads$.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]));
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(reads$);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(joins => {
            return collData.map((v, i) => {
                // totalJoins += joins[i].length;
                const value = { ...v, [collection1]: joins[i] || null };
                return value;
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(final => {
            console.log(`Queried ${final.length}, Joined ${totalJoins} docs`);
            totalJoins = 0;
        }));
    });
};


/***/ }),

/***/ 19446:
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseService": () => (/* binding */ FirebaseService)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var app_models_categorias_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/categorias.model */ 93604);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ 17448);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/models/direcciones.model */ 4160);
/* harmony import */ var app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/tiendas.model */ 95098);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_models_cuentas_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/cuentas.model */ 7671);
/* harmony import */ var app_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/utils/transfer-state-helper */ 15009);
/* harmony import */ var app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shell/data-store */ 29760);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_models_directorios_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/models/directorios.model */ 97228);
/* harmony import */ var app_models_clasificaciones_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/models/clasificaciones.model */ 35233);
/* harmony import */ var app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/models/misproductos.model */ 77959);
/* harmony import */ var app_services_collectionJoin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/collectionJoin */ 78035);
/* harmony import */ var app_models_departamentos_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/models/departamentos.model */ 20129);
/* harmony import */ var app_models_clases_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/models/clases.model */ 49654);
/* harmony import */ var app_models_servicios_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/models/servicios.model */ 38175);
/* harmony import */ var app_models_links_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/models/links.model */ 23248);























let FirebaseService = class FirebaseService {
  constructor(platformId, afAuth, http, transferStateHelper, afs) {
    this.platformId = platformId;
    this.afAuth = afAuth;
    this.http = http;
    this.transferStateHelper = transferStateHelper;
    this.afs = afs;
    this.currentUser = null;
    this.tiendaIdBase = '';
    this.claseIdBase = '';
    this.categoriaIdBase = '';
    this.clasificacionBase = '';
    this.categoriaBaseId = '';
    this.afAuth.onAuthStateChanged(user => {
      // console.log('Changed: ', user);
      this.currentUser = user;
    });
  } //#region Auth


  signUp({
    email,
    password
  }) {
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const credential = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.createUserWithEmailAndPassword)(_this.afAuth, email, password);
      console.log('result: ', credential);
      const uid = credential.user.uid; // var docRef: DocumentReference = null;
      // docRef = doc(this.afs,
      //   'users/${uid}'
      // );

      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.setDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this.afs, 'users/${uid}'), {
        uid,
        email: credential.user.email
      });
    })();
  }

  signIn({
    email,
    password
  }) {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.signInWithEmailAndPassword)(this.afAuth, email, password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  addChatMessage(msg) {
    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'messages'), {
      msg,
      from: this.currentUser.uid,
      createdAt: (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)()
    });
  }

  getChatMessages() {
    let users = [];
    return this.getUsers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(res => {
      users = res;
      console.log('all users: ', users);
      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'messages'), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('createdAt')), {
        idField: 'id'
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(messages => {
      for (let m of messages) {
        m.fromName = this.getUserForMsg(m.from, users);
        m.myMsg = this.currentUser.uid === m.from;
      }

      console.log('all messages: ', messages);
      return messages;
    }));
  }

  getUsers() {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'users')), {
      idField: 'uid'
    });
  }

  getUserForMsg(msgFromId, users) {
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }

    return 'Deleted';
  } //#endregion Auth
  //#region Notificaciones


  getDispositivos(tiendaId) {
    var _this2 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var ret = [];
      var user = yield JSON.parse(localStorage.getItem('user'));
      var uid = user.uid;
      const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this2.afs, 'tiendas'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('id', '==', tiendaId));
      const promise = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q);

      if (promise.docs.length > 0) {
        var tienda = promise.docs[0].data();
        var email = tienda.correo;

        if (email != null && email != '') {
          const q1 = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this2.afs, 'usuarios'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('correo', '==', email), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('activo', '==', true));
          const promise1 = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q1);

          if (promise1.docs.length > 0) {
            var usuario = promise1.docs[0].data();

            if (usuario) {
              const q2 = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this2.afs, 'dispositivos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('uid', '==', usuario.uid));
              const promise2 = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q2);

              if (promise2.docs.length > 0) {
                var dispositivo = promise2.docs[0].data();
                ret.push(dispositivo.dispositivoId);
              }

              return ret;
            }
          }

          return ret;
        }
      }

      return ret;
    })();
  }

  sendMensajeTienda(mensaje, tiendaId) {
    var _this3 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var dispositivos = yield _this3.getDispositivos(tiendaId);

      if (dispositivos) {
        yield _this3.pushMessage(dispositivos, mensaje); // dispositivos.forEach(element => {
        //     console.log(element);
        // });
      }
    })();
  }

  pushMessage(include_player_ids, mensaje) {
    var _this4 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var keys = yield JSON.parse(localStorage.getItem('keys'));
      const privateKey = keys.onesignal;
      let httpOptionsOneSignal = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: privateKey
        })
      };
      var data = JSON.stringify({
        "app_id": '7d97edb4-db38-448d-b857-d2f5224866b9',
        include_player_ids,
        "contents": {
          "en": mensaje,
          "es": mensaje
        },
        "headings": {
          "en": "'Te Lo Llevo'",
          "es": "'Te Lo Llevo'"
        }
      }); // console.log(data);

      const url = "https://onesignal.com/api/v1/notifications";
      return new Promise((resolve, reject) => {
        _this4.http.post(url, data, httpOptionsOneSignal).subscribe(data => {
          return resolve(data['data']);
        }, error => {
          console.log(error);
        });
      });
    })();
  } //#endregion
  //#region  Devices


  createDevice(dispositivoId) {
    var _this5 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var user = JSON.parse(localStorage.getItem('user'));
      var uid = user.uid;
      var correo = user.email;
      var telefono = user.phoneNumber;
      const q = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this5.afs, "dispositivos"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("uid", "==", uid), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("dispositivoId", "==", dispositivoId));
      const device = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q);

      if (device.docs.length == 0) {
        const refDispositivos = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this5.afs, "dispositivos"), {
          uid: uid,
          dispositivoId: dispositivoId,
          correo: correo,
          telefono: telefono
        });
      }
    })();
  } //#endregion Devices
  //#region Tipos


  getTipos() {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'tipos'), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('tipo')));
  } //#endregion Tipos
  //#region Direcciones


  getDireccionAsync(direccionId) {
    var _this6 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this6.afs, "direcciones"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("id", "==", direccionId));
      const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q);
      if (querySnapshot.docs.length > 0) return querySnapshot.docs[0].data();
    })();
  } //#endregion Direcciones
  //#region Sucursales


  getSucursalAsync(sucursalId) {
    var _this7 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this7.afs, "sucursales"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("id", "==", sucursalId));
      const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q);
      if (querySnapshot.docs.length > 0) return querySnapshot.docs[0].data();
    })();
  } //#endregion Sucursales
  //#region Categorias


  getCategorias() {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'categorias'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('categoria', '!=', '')), {
      idField: 'id'
    });
  }

  searchCategorias(categoria) {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'categorias'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('categoria', '==', categoria)), {
      idField: 'id'
    });
  } //#endregion Categorias
  //#region Pedidos


  createPedido(sucursalId, direccion, pago, values, numero) {
    var _this8 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var user = JSON.parse(localStorage.getItem('user'));
      var uid = user.uid;
      var pedidoId;
      var articuloId;
      var direccionId;
      var contador;
      var q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this8.afs, 'contadores'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('tipo', '==', 'pedidos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('sucursalId', '==', sucursalId));
      var promise = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q);
      if (promise.docs.length > 0) contador = promise.docs[0].data();
      var cont = contador.contador + 1;
      contador.contador = cont;
      yield _this8.updateContador(contador);
      var tiendas = new Array();
      values.forEach( /*#__PURE__*/function () {
        var _ref = (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (producto) {
          if (!tiendas.find(x => x == producto.tiendaId)) {
            tiendas.push(producto.tiendaId);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      const refPedido = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this8.afs, "pedidos"), {
        fecha: new Date()
      });
      var pedido = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDoc)(refPedido);
      pedidoId = pedido.id;
      const fecha = new Date();
      const diaHora = fecha.toString();
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.updateDoc)(refPedido, {
        id: pedidoId,
        uid: uid,
        fecha: diaHora,
        pedido: cont,
        direccionId: direccion?.id,
        direccion: direccion?.direccion,
        telefono: direccion?.telefono,
        detalle: direccion?.detalle,
        pagoId: pago.id,
        pago: pago.cuenta,
        sucursalId: sucursalId,
        tiendaId: tiendas,
        cancelado: '',
        elaborado: '',
        entregado: '',
        activo: true
      });
      values.forEach( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (producto) {
          var detalle = '';
          producto.titulos.forEach(titulo => {
            if (titulo.seleccionado != '') {
              titulo.seleccionadores.forEach(seleccionador => {
                if (seleccionador.id == titulo.seleccionado) {
                  detalle += titulo.titulo + ' - ' + seleccionador.seleccionador + '\n';
                }
              });
            }
          });
          const refArticulos = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this8.afs, "articulos"), {
            detalle: ''
          });
          const articulo = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDoc)(refArticulos);
          articuloId = articulo.id;
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.updateDoc)(refArticulos, {
            id: articuloId,
            pedidoId: pedidoId,
            tiendaId: producto.tiendaId,
            tienda: producto.tienda,
            productoId: producto.productoId,
            producto: producto.producto,
            precio: producto.precioVlr,
            presentacion: producto.presentacionTxt,
            cantidad: producto.amount,
            imagen: producto.imagen,
            observaciones: producto.observaciones,
            detalle: detalle
          });
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      numero.property1 = sucursalId.toUpperCase() + '-' + contador.contador.toString();
      tiendas.forEach( /*#__PURE__*/function () {
        var _ref3 = (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tienda) {
          var listado = [];
          const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this8.afs, "articulos"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('pedidoId', '==', pedidoId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('tiendaId', '==', tienda));
          const promise = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q);

          if (promise && promise.docs.length <= 20) {
            promise.docs.forEach(doc => {
              var articulo = doc.data(); // console.log(articulo)

              if (articulo.observaciones) {
                listado.push('(' + articulo.cantidad.toString() + ') ' + articulo.producto.toString() + ' - Observaciones: ' + articulo.observaciones) + '\r\n';
              } else {
                listado.push('(' + articulo.cantidad.toString() + ') ' + articulo.producto.toString() + '\r\n');
              }
            });
          } // Agrega datos adicionales
          // Fecha y Hora


          var fecha = new Date();
          listado.push('Fecha/Hora: ' + diaHora + '\r\n'); // // Nombre Cliente
          // listado.push('Cliente: ' + diaHora + '\r\n');
          // Teléfono Cliente

          if (direccion?.telefono) listado.push('Teléfono: ' + direccion?.telefono + '\r\n'); // Dirección Cliente

          if (direccion?.direccion) listado.push('Dirección: ' + direccion?.direccion + '\r\n'); // Forma Pago

          listado.push('Forma Pago: ' + pago.cuenta + '\r\n');
          yield _this8.sendMensajeTienda("Pedido Número " + cont.toString() + '\r\n' + listado.toString(), tienda);
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
      return pedido;
    })();
  }

  updateContador(values) {
    var _this9 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const contadoresRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this9.afs, "contadores", values.id);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.updateDoc)(contadoresRef, {
        id: values.id,
        contador: values.contador,
        sucursalId: values.sucursalId,
        tipo: values.tipo
      }).then(() => {
        console.log('Contador actualizado satisfactoriamente');
      }).catch(error => {
        console.log('Error actualizando el contador', error);
      });
      return;
    })();
  } //#endregion Pedidos
  //#region Cuentas


  getCuentasDataSource(sucursalId) {
    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'cuentas'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("sucursalId", "==", sucursalId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('activa', '==', true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('posicion')); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('cuentas-state', rawDataSource);
    return cachedDataSource;
  }

  getCuentasStore(dataSource) {
    // Use cache if available
    if (!this.cuentasDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_cuentas_model__WEBPACK_IMPORTED_MODULE_5__.CuentasModel(), new app_models_cuentas_model__WEBPACK_IMPORTED_MODULE_5__.CuentasModel(), new app_models_cuentas_model__WEBPACK_IMPORTED_MODULE_5__.CuentasModel(), new app_models_cuentas_model__WEBPACK_IMPORTED_MODULE_5__.CuentasModel(), new app_models_cuentas_model__WEBPACK_IMPORTED_MODULE_5__.CuentasModel(), new app_models_cuentas_model__WEBPACK_IMPORTED_MODULE_5__.CuentasModel()];
      this.cuentasDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.cuentasDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.cuentasDataStore.load(dataSource);
      }
    }

    return this.cuentasDataStore;
  } //#endregion
  //#region Direcciones


  getDirecciones() {
    var _this10 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var user = JSON.parse(localStorage.getItem('user'));
      var uid = user.uid;
      const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this10.afs, 'direcciones'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('uid', '==', uid));
      const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q);
      return querySnapshot;
    })();
  }

  updateDireccion(values) {
    var _this11 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!values.id) {
        var user = JSON.parse(localStorage.getItem('user'));
        values.uid = user.uid;
        const refDirecciones = yield (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this11.afs, "direcciones"), {
          detalle: ''
        });
        const direccion = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDoc)(refDirecciones);
        const id = direccion.id;
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.updateDoc)(refDirecciones, {
          id: id,
          uid: values.uid,
          direccion: values.direccion,
          detalle: values.detalle ?? '',
          telefono: values.telefono,
          latitud: values.latitud,
          longitud: values.longitud,
          duracion: values.duracion,
          distancia: values.distancia
        });
      } else {
        const direccionesRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this11.afs, "direcciones", values.id);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.updateDoc)(direccionesRef, {
          id: values.id,
          uid: values.uid,
          direccion: values.direccion,
          detalle: values.detalle ?? '',
          telefono: values.telefono,
          latitud: values.latitud,
          longitud: values.longitud,
          duracion: values.duracion,
          distancia: values.distancia
        });
      }

      return values.id;
    })();
  }

  deleteDireccion(values) {
    var _this12 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.deleteDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this12.afs, "direcciones", values.id));
      return;
    })();
  }

  getDireccionesDataSource() {
    var user = JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;
    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'direcciones'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("uid", "==", uid)), {
      idField: 'id'
    }); // const rawDataSource = query(collection(this.afs, 'direcciones'), where("uid", "==", uid)) as unknown as Observable<Array<DireccionesModel>>;
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('direcciones-state', rawDataSource);
    return cachedDataSource;
  }

  getDireccionesStore(dataSource) {
    // Use cache if available
    if (!this.direccionesDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_3__.DireccionesModel(), new app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_3__.DireccionesModel(), new app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_3__.DireccionesModel(), new app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_3__.DireccionesModel(), new app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_3__.DireccionesModel(), new app_models_direcciones_model__WEBPACK_IMPORTED_MODULE_3__.DireccionesModel()];
      this.direccionesDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.direccionesDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.direccionesDataStore.load(dataSource);
      }
    }

    return this.direccionesDataStore;
  } //#endregion
  //#region Categorias


  getCategoriasDataSource() {
    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'categorias'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('activa', '==', true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('posicion')), {
      idField: 'id'
    }); //const rawDataSource = collectionData(query(collection(this.afs, 'tiendas'), where("categoriaId", "==", categoriaId), where('activa', '==', true), orderBy('posicion')), { idField: 'id' })
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('categorias-state', rawDataSource);
    return cachedDataSource;
  }

  getCategoriasStore(dataSource) {
    // Use cache if available
    if (!this.categoriasDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_categorias_model__WEBPACK_IMPORTED_MODULE_1__.CategoriasModel(), new app_models_categorias_model__WEBPACK_IMPORTED_MODULE_1__.CategoriasModel(), new app_models_categorias_model__WEBPACK_IMPORTED_MODULE_1__.CategoriasModel(), new app_models_categorias_model__WEBPACK_IMPORTED_MODULE_1__.CategoriasModel(), new app_models_categorias_model__WEBPACK_IMPORTED_MODULE_1__.CategoriasModel(), new app_models_categorias_model__WEBPACK_IMPORTED_MODULE_1__.CategoriasModel()];
      this.categoriasDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.categoriasDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.categoriasDataStore.load(dataSource);
      }
    }

    return this.categoriasDataStore;
  } //#endregion
  //#region Directorios


  getDirectoriosDataSource(clasificacion) {
    if (this.clasificacionBase != clasificacion) {
      this.directoriosDataStore = undefined;
      this.clasificacionBase = clasificacion;
    } // const rawDataSource = collectionData<DirectoriosModel>(query<DirectoriosModel>(collection(this.afs, 'directorio') as CollectionReference<DirectoriosModel>, where("clasificaciones", "array-contains", clasificacion), where('activo', '==', true), orderBy('directorio'), where('categoria', 'not-in', ['Directorio', 'Restaurantes', 'Servicios Públicos'])), { idField: 'id' });


    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'directorio'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("clasificaciones", "array-contains", clasificacion), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('activo', '==', true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('directorio')), {
      idField: 'id'
    }); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('directorios-state', rawDataSource);
    return cachedDataSource;
  }

  getDirectoriosStore(dataSource) {
    // Use cache if available
    if (!this.directoriosDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_directorios_model__WEBPACK_IMPORTED_MODULE_8__.DirectoriosModel(), new app_models_directorios_model__WEBPACK_IMPORTED_MODULE_8__.DirectoriosModel(), new app_models_directorios_model__WEBPACK_IMPORTED_MODULE_8__.DirectoriosModel(), new app_models_directorios_model__WEBPACK_IMPORTED_MODULE_8__.DirectoriosModel(), new app_models_directorios_model__WEBPACK_IMPORTED_MODULE_8__.DirectoriosModel(), new app_models_directorios_model__WEBPACK_IMPORTED_MODULE_8__.DirectoriosModel()];
      this.directoriosDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.directoriosDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.directoriosDataStore.load(dataSource);
      }
    }

    return this.directoriosDataStore;
  } //#endregion
  //#region Clasificaciones


  getClasificacionesDataSource(categoriaId) {
    if (this.categoriaIdBase != categoriaId) {
      this.clasificacionesDataStore = undefined;
      this.categoriaIdBase = categoriaId;
    }

    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'clasificaciones'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("tipoclasificaciones", "==", categoriaId)), {
      idField: 'id'
    }); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('clasificaciones-state', rawDataSource);
    return cachedDataSource;
  }

  getClasificacionesStore(dataSource) {
    // Use cache if available
    if (!this.clasificacionesDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_clasificaciones_model__WEBPACK_IMPORTED_MODULE_9__.ClasificacionesModel(), new app_models_clasificaciones_model__WEBPACK_IMPORTED_MODULE_9__.ClasificacionesModel(), new app_models_clasificaciones_model__WEBPACK_IMPORTED_MODULE_9__.ClasificacionesModel(), new app_models_clasificaciones_model__WEBPACK_IMPORTED_MODULE_9__.ClasificacionesModel(), new app_models_clasificaciones_model__WEBPACK_IMPORTED_MODULE_9__.ClasificacionesModel(), new app_models_clasificaciones_model__WEBPACK_IMPORTED_MODULE_9__.ClasificacionesModel()];
      this.clasificacionesDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.clasificacionesDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.clasificacionesDataStore.load(dataSource);
      }
    }

    return this.clasificacionesDataStore;
  } // Filter users by age


  searchClasificaciones(lower, upper) {
    return;
  } //#endregion
  //#region ProductosSearch


  getDataSourceSearch(categoriaId, tiendaId, texto) {
    if (tiendaId != '') return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'misproductos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("categoriaId", "==", categoriaId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("activo", "==", true), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("productoArray", "array-contains-any", texto.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.limit)(20)), {
      idField: 'id'
    }); // return this.afs.collection<MisProductosModel>('misproductos', ref => ref.where("tiendaId", "==", tiendaId).where("activo", "==", true).where("productoArray", "array-contains-any", texto.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')).limit(20)).valueChanges({ idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    else return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'misproductos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("tiendaId", "==", tiendaId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("activo", "==", true), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("productoArray", "array-contains-any", texto.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.limit)(20)), {
      idField: 'id'
    }).pipe((0,app_services_collectionJoin__WEBPACK_IMPORTED_MODULE_11__.leftJoinTiendas)(this.afs, 'tiendaId', 'tiendas', 1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.shareReplay)(1)); // return this.afs.collection<MisProductosModel>('misproductos', ref => ref.where("categoriaId", "==", categoriaId).where("activo", "==", true).where("productoArray", "array-contains-any", texto.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')).limit(20)).valueChanges({ idField: 'id' }).pipe(
    //   leftJoinTiendas(this.afs, 'tiendaId', 'tiendas', 1),
    //   shareReplay(1)
    // ) as Observable<unknown> as Observable<Array<MisProductosModel>>;
  }

  getProductosDataSourceSearch(categoriaId, tiendaId, texto) {
    this.productosDataStore = undefined;
    const rawDataSource = this.getDataSourceSearch(categoriaId, tiendaId, texto); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('productos-state', rawDataSource);
    return cachedDataSource;
  }

  getProductosStoreSearch(dataSource) {
    // Use cache if available
    if (!this.productosDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel()];
      this.productosDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.productosDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.productosDataStore.load(dataSource);
      }
    }

    return this.productosDataStore;
  } // Filter users by age


  searchProductosSearch(lower, upper) {
    return;
  } //#endregion
  //#region Departamentos


  getDepartamentosDataSource(tiendaId) {
    if (this.tiendaIdBase != tiendaId) {
      this.departamentosDataStore = undefined;
      this.clasesDataStore = undefined;
      this.tiendaIdBase = tiendaId;
    }

    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'clases'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("tiendaId", "==", tiendaId)), {
      idField: 'id'
    }).pipe((0,app_services_collectionJoin__WEBPACK_IMPORTED_MODULE_11__.leftJoinClases)(this.afs, 'tiendaId', 'tiendas', 1), (0,app_services_collectionJoin__WEBPACK_IMPORTED_MODULE_11__.leftJoinDepartamentos)(this.afs, 'departamentoId', 'departamentos', 1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.shareReplay)(1)); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('departamentos-state', rawDataSource);
    return cachedDataSource;
  }

  getDepartamentosStore(dataSource) {
    // Use cache if available
    if (!this.departamentosDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_departamentos_model__WEBPACK_IMPORTED_MODULE_12__.DepartamentosModel(), new app_models_departamentos_model__WEBPACK_IMPORTED_MODULE_12__.DepartamentosModel(), new app_models_departamentos_model__WEBPACK_IMPORTED_MODULE_12__.DepartamentosModel(), new app_models_departamentos_model__WEBPACK_IMPORTED_MODULE_12__.DepartamentosModel(), new app_models_departamentos_model__WEBPACK_IMPORTED_MODULE_12__.DepartamentosModel(), new app_models_departamentos_model__WEBPACK_IMPORTED_MODULE_12__.DepartamentosModel()];
      this.departamentosDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.departamentosDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.departamentosDataStore.load(dataSource);
      }
    }

    return this.departamentosDataStore;
  } // Filter users by age


  searchDepartamentos(lower, upper) {
    return;
  } //#endregion Departamentos
  //#region Clases


  getClasesDataSource(tiendaId) {
    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'misclases'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("tiendaId", "==", tiendaId)), {
      idField: 'id'
    }).pipe((0,app_services_collectionJoin__WEBPACK_IMPORTED_MODULE_11__.leftJoinClases)(this.afs, 'claseId', 'clases', 1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.shareReplay)(1)); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('clases-state', rawDataSource);
    return cachedDataSource;
  }

  getClasesStore(dataSource) {
    // Use cache if available
    if (!this.clasesDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_clases_model__WEBPACK_IMPORTED_MODULE_13__.ClasesModel(), new app_models_clases_model__WEBPACK_IMPORTED_MODULE_13__.ClasesModel(), new app_models_clases_model__WEBPACK_IMPORTED_MODULE_13__.ClasesModel(), new app_models_clases_model__WEBPACK_IMPORTED_MODULE_13__.ClasesModel(), new app_models_clases_model__WEBPACK_IMPORTED_MODULE_13__.ClasesModel(), new app_models_clases_model__WEBPACK_IMPORTED_MODULE_13__.ClasesModel()];
      this.clasesDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.clasesDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.clasesDataStore.load(dataSource);
      }
    }

    return this.clasesDataStore;
  } // Filter users by age


  searchClases(lower, upper) {
    return;
  } //#endregion Clases
  //#region Productos


  getProductosDataSource(tiendaId, claseId) {
    if (this.tiendaIdBase != tiendaId || this.claseIdBase != claseId) {
      this.productosDataStore = undefined;
      this.tiendaIdBase = tiendaId;
      this.claseIdBase = claseId;
    }

    var rawDataSource;

    if (claseId == "") {
      rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'misproductos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("tiendaId", "==", tiendaId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("activo", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)("producto"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.limit)(20)), {
        idField: 'id'
      });
    } else {
      rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'misproductos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("tiendaId", "==", tiendaId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("claseId", "==", claseId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("activo", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)("producto"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.limit)(20)), {
        idField: 'id'
      });
    } // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.


    const cachedDataSource = this.transferStateHelper.checkDataSourceState('productos-state', rawDataSource);
    return cachedDataSource;
  } // carga los productos por páginas


  loadProductos(tiendaId, claseId, start) {
    var rawDataSource;

    if (start) {
      rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'misproductos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("tiendaId", "==", tiendaId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("claseId", "==", claseId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("activo", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)("producto"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.startAfter)(start), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.limit)(6)), {
        idField: 'id'
      });
    } else {
      rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'misproductos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("tiendaId", "==", tiendaId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("claseId", "==", claseId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("activo", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)("producto"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.limit)(6)), {
        idField: 'id'
      }); // rawDataSource = this.afs.collection<MisProductosModel>('misproductos', ref =>
      //   ref.where("tiendaId", "==", tiendaId)
      //     .where("claseId", "==", claseId)
      //     .where("activo", "==", true)
      //     .orderBy("producto")
      //     .limit(6))
      //   .valueChanges({ idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    } // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.


    const cachedDataSource = this.transferStateHelper.checkDataSourceState('productos-state', rawDataSource);
    return cachedDataSource;
  }

  getProductosStore(dataSource) {
    // Use cache if available
    // if (!this.productosDataStore) {
    // Initialize the model specifying that it is a shell model
    const shellModel = [new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel(), new app_models_misproductos_model__WEBPACK_IMPORTED_MODULE_10__.MisProductosModel()];
    this.productosDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
    // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
      // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
      this.productosDataStore.load(dataSource, 0);
    } else {
      // On browser transitions
      // Trigger the loading mechanism (with shell)
      this.productosDataStore.load(dataSource);
    } // }


    return this.productosDataStore;
  } //#endregion Productos
  //#region Tiendas


  getTiendasDataSource(categoriaId) {
    // rawDataSource = collectionData(query(collection(this.afs, 'misproductos'), where("tiendaId", "==", tiendaId), where("activo", "==", true), orderBy("producto"), limit(20)), { idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'tiendas'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("categoriaId", "==", categoriaId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('activa', '==', true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('posicion')), {
      idField: 'id'
    }).pipe((0,app_services_collectionJoin__WEBPACK_IMPORTED_MODULE_11__.leftJoinHorarios)(this.afs, 'id', 'mishorarios', 1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.shareReplay)(1)); // const rawDataSource = this.afs.collection<TiendasModel>('tiendas', ref => ref.where('categoriaId', '==', categoriaId).where('activa', '==', true).orderBy('posicion')).valueChanges({ idField: 'id' })
    //     .pipe(
    //         map(actions => actions.map(tienda => {
    //             return { ...tienda } as TiendasModel;
    //         })
    //         )
    //     );
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('tiendas-state', rawDataSource);
    return cachedDataSource;
  }

  getTiendasStore(categoriaId, dataSource) {
    // Use cache if available
    if (!this.tiendasDataStore || this.categoriaBaseId != categoriaId) {
      this.categoriaBaseId = categoriaId; // Initialize the model specifying that it is a shell model

      const shellModel = [new app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_4__.TiendasModel(), new app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_4__.TiendasModel(), new app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_4__.TiendasModel(), new app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_4__.TiendasModel(), new app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_4__.TiendasModel(), new app_models_tiendas_model__WEBPACK_IMPORTED_MODULE_4__.TiendasModel()];
      this.tiendasDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.tiendasDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.tiendasDataStore.load(dataSource);
      }
    }

    return this.tiendasDataStore;
  } // Filter users by age


  searchTiendas() {
    return;
  } //#endregion Tiendas
  //#region Servicio


  getServiciosDataSource() {
    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'servicios'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('activo', '==', true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('posicion')), {
      idField: 'id'
    }); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('servicios-state', rawDataSource);
    return cachedDataSource;
  }

  getServiciosStore(dataSource) {
    // Use cache if available
    if (!this.servicioDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new app_models_servicios_model__WEBPACK_IMPORTED_MODULE_14__.ServiciosModel(), new app_models_servicios_model__WEBPACK_IMPORTED_MODULE_14__.ServiciosModel(), new app_models_servicios_model__WEBPACK_IMPORTED_MODULE_14__.ServiciosModel(), new app_models_servicios_model__WEBPACK_IMPORTED_MODULE_14__.ServiciosModel(), new app_models_servicios_model__WEBPACK_IMPORTED_MODULE_14__.ServiciosModel(), new app_models_servicios_model__WEBPACK_IMPORTED_MODULE_14__.ServiciosModel()];
      this.servicioDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.servicioDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.servicioDataStore.load(dataSource);
      }
    }

    return this.servicioDataStore;
  } // Filter users by age


  searchServicios() {
    return;
  } //#endregion
  //#region Links


  getLinksDataSource(servicioId) {
    const rawDataSource = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'links'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("servicioId", "==", servicioId)), {
      idField: 'id'
    }).pipe( // leftJoinLinks(this.afs, 'claseId', 'clases', 1),
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.shareReplay)(1)); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.

    const cachedDataSource = this.transferStateHelper.checkDataSourceState('clases-state', rawDataSource);
    return cachedDataSource;
  }

  getLinksStore(dataSource) {
    // Use cache if available
    // if (!this.linksDataStore) {
    // Initialize the model specifying that it is a shell model
    const shellModel = [new app_models_links_model__WEBPACK_IMPORTED_MODULE_15__.LinksModel(), new app_models_links_model__WEBPACK_IMPORTED_MODULE_15__.LinksModel(), new app_models_links_model__WEBPACK_IMPORTED_MODULE_15__.LinksModel(), new app_models_links_model__WEBPACK_IMPORTED_MODULE_15__.LinksModel(), new app_models_links_model__WEBPACK_IMPORTED_MODULE_15__.LinksModel(), new app_models_links_model__WEBPACK_IMPORTED_MODULE_15__.LinksModel()];
    this.linksDataStore = new app_shell_data_store__WEBPACK_IMPORTED_MODULE_7__.DataStore(shellModel); // If running in the server, then don't add shell to the Data Store
    // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
      // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
      this.linksDataStore.load(dataSource, 0);
    } else {
      // On browser transitions
      // Trigger the loading mechanism (with shell)
      this.linksDataStore.load(dataSource);
    } // }


    return this.linksDataStore;
  } // Filter users by age


  searchLinks() {
    return;
  } //#endregion Links
  //#region Datos


  getSeleccionadores(productoId) {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'seleccionadores'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('productoId', '==', productoId), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('activo', '==', true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('titulo'), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('posicion')), {
      idField: 'id'
    });
  } //#region Datos


  getDato() {
    var user = JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, 'datos'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)('uid', '==', uid)), {
      idField: 'id'
    });
  }

  getDatoAsync() {
    var _this13 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var user = yield JSON.parse(localStorage.getItem('user'));
      var uid = user.uid;
      const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this13.afs, "datos"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.where)("uid", "==", uid));
      const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDocs)(q);
      if (querySnapshot.docs.length > 0) return querySnapshot.docs[0].data();
    })();
  }

  createDato(values) {
    if (!values.id) {
      var user = JSON.parse(localStorage.getItem('user'));
      values.uid = user.uid;
      const datosRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(this.afs, "datos"));
      (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.setDoc)(datosRef, {
        uid: values.uid,
        tipo: values.tipo,
        numero: values.numero,
        direccion: values.direccion,
        correo: values.correo,
        nombre: values.nombre,
        telefono: values.telefono,
        pais: values.pais
      });
    } else {
      const datosRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.afs, "datos", values.id);
      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.updateDoc)(datosRef, {
        uid: values.uid,
        tipo: values.tipo,
        numero: values.numero,
        direccion: values.direccion,
        correo: values.correo,
        nombre: values.nombre,
        telefono: values.telefono,
        pais: values.pais
      });
    }
  }

};

FirebaseService.ctorParameters = () => [{
  type: Object,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_23__.PLATFORM_ID]
  }]
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.Auth
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient
}, {
  type: app_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__.TransferStateHelper
}, {
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.Firestore
}];

FirebaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Injectable)({
  providedIn: 'root'
})], FirebaseService);


/***/ }),

/***/ 67241:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var _Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 61577);








let UtilService = class UtilService {
  constructor(http, loadingController, fireAuth, router, toastController, nav, alertController) {
    this.http = http;
    this.loadingController = loadingController;
    this.fireAuth = fireAuth;
    this.router = router;
    this.toastController = toastController;
    this.nav = nav;
    this.alertController = alertController;
    this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.userid = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.getUserId();
  }

  getUserId() {
    this.fireAuth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.userid.next(user.uid);
      }
    });
  }

  navigate(link, forward) {
    if (forward) {
      this.nav.navigateForward('/' + link);
    } else {
      this.router.navigateByUrl('/' + link);
    }
  }

  validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  presentToast(message, showButton, position, duration) {
    var _this = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message,
        buttons: [{
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }],
        position,
        duration
      });
      toast.present();
    })();
  }

  removeConform() {
    var _this2 = this;

    // eslint-disable-next-line no-async-promise-executor
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        const alert = yield _this2.alertController.create({
          header: 'Confirm!',
          message: 'Are you sure you want to remove this item',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: cancel => {
              resolve('cancel');
            }
          }, {
            text: 'Okay',
            handler: ok => {
              resolve('ok');
            }
          }]
        });
        alert.present();
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  openLoader() {
    var _this3 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        message: 'Por favor espere ...',
        duration: 2000
      });
      yield loading.present();
    })();
  }

  closeLoading() {
    var _this4 = this;

    return (0,_Users_jimmy_Desktop_code_tll_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-return-await
      return yield _this4.loadingController.dismiss();
    })();
  } // Sample API response for content loading


  getApiResponse() {
    const myUrl = 'http://www.mocky.io/v2/5c9215a73200005d006bccee?mocky-delay=5000ms';
    return this.http.get(myUrl);
  } // Sample API response for Infinite scrolling


  infiniteData() {
    const myUrl = 'http://www.mocky.io/v2/5c9448a0310000a45b55487c?mocky-delay=5000ms';
    return this.http.get(myUrl);
  }

};

UtilService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.Auth
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}];

UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], UtilService);


/***/ }),

/***/ 89330:
/*!**************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AspectRatioComponent": () => (/* binding */ AspectRatioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _aspect_ratio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio.component.html?ngResource */ 73225);
/* harmony import */ var _aspect_ratio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aspect-ratio.component.scss?ngResource */ 86083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let AspectRatioComponent = class AspectRatioComponent {
    constructor() {
        this.ratioPadding = '0px';
    }
    set ratio(ratio) {
        ratio = (ratio !== undefined && ratio !== null) ? ratio : { w: 1, h: 1 };
        const heightRatio = (ratio.h / ratio.w * 100) + '%';
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
    }
};
AspectRatioComponent.ctorParameters = () => [];
AspectRatioComponent.propDecorators = {
    ratioPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding, args: ['style.padding',] }],
    ratio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AspectRatioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-aspect-ratio',
        template: _aspect_ratio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_aspect_ratio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AspectRatioComponent);



/***/ }),

/***/ 29760:
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStore": () => (/* binding */ DataStore),
/* harmony export */   "ShellModel": () => (/* binding */ ShellModel)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);



class ShellModel {
    constructor() {
        this.isShell = false;
    }
}
class DataStore {
    constructor(shellModel) {
        this.shellModel = shellModel;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the environment.prod file.
        // tslint:disable-next-line:max-line-length
        this.networkDelay = (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig.networkDelay) ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([delayValue, dataValue]) => Object.assign(dataValue, { isShell: false })), 
        // Set the shell model as the initial value
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(Object.assign(shellModel, { isShell: true })));
    }
    load(dataSourceObservable, networkDelay) {
        // tslint:disable-next-line:no-shadowed-variable
        const delay = (typeof networkDelay === 'number') ? networkDelay : this.networkDelay;
        let processedDataSource;
        // If no network delay, then don't show shell
        if (delay === 0) {
            processedDataSource = dataSourceObservable;
        }
        else {
            processedDataSource = DataStore.AppendShell(dataSourceObservable, this.shellModel, delay);
        }
        processedDataSource
            .subscribe((dataValue) => {
            this.timeline.next(dataValue);
        });
    }
    get state() {
        return this.timeline.asObservable();
    }
}


/***/ }),

/***/ 71408:
/*!************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageShellComponent": () => (/* binding */ ImageShellComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _image_shell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-shell.component.html?ngResource */ 5115);
/* harmony import */ var _image_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-shell.component.scss?ngResource */ 74405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/transfer-state-helper */ 15009);






let ImageShellComponent = class ImageShellComponent {
    constructor(transferStateHelper) {
        this.transferStateHelper = transferStateHelper;
        // To debug shell styles, change configuration in the environment file
        this.debugDisplay = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appShellConfig.debug) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appShellConfig.debug : false;
        // tslint:disable-next-line:variable-name
        this._src = '';
        // tslint:disable-next-line:variable-name
        this._alt = '';
        // tslint:disable-next-line:variable-name
        this._loadingStrategy = 'lazy';
        // tslint:disable-next-line:variable-name
        this._display = '';
        this.imageSSR = false;
        this.imageLoaded = false;
        this.imageError = false;
        this.errorMessage = 'Could not load image';
    }
    set display(val) {
        this._display = (val !== undefined && val !== null) ? val : '';
        // For display 'cover' we use a hidden aux image. As it's hidden, if set loading to 'lazy' it won't ever trigger the loading mechanism
        if (this._display === 'cover') {
            this._loadingStrategy = 'eager';
        }
    }
    get display() {
        return this._display;
    }
    set src(val) {
        if (!this.debugDisplay) {
            this._src = (val !== undefined && val !== null) ? val : '';
        }
        // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded
        const imageState = this.transferStateHelper.checkImageShellState('shell-images-state', this._src);
        if (imageState === _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_3__.ImageShellState.SSR || imageState === _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_3__.ImageShellState.BROWSER_FROM_SSR) {
            this._imageProcessedInServer();
        }
        else {
            if (this._display === 'cover') {
                // Unset the background-image until the image is loaded
                this.backgroundImage = 'unset';
            }
        }
    }
    set alt(val) {
        this._alt = (val !== undefined && val !== null) ? val : '';
    }
    _imageProcessedInServer() {
        this.imageSSR = true;
        // Also set backgroundImage so it's ready when transitioning from SSR to the browser
        if (this._display === 'cover') {
            this.backgroundImage = 'url(' + this._src + ')';
        }
    }
    _imageLoaded() {
        this.imageLoaded = true;
        // If it's a cover image then set the background-image property accordingly
        if (this._display === 'cover') {
            // Now that the image is loaded, set the background image
            this.backgroundImage = 'url(' + this._src + ')';
        }
    }
    _imageLoadError(event) {
        // Image error event get's called when the src is empty. We use emty values for the shell.
        // (see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Image_loading_errors)
        // Avoid that shell case
        if (this._src && this._src !== '') {
            this.imageLoaded = false;
            this.imageSSR = false;
            setTimeout(() => {
                this.imageError = true;
            }, 500);
        }
    }
};
ImageShellComponent.ctorParameters = () => [
    { type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_3__.TransferStateHelper }
];
ImageShellComponent.propDecorators = {
    imageSSR: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['class.img-ssr',] }],
    imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['class.img-loaded',] }],
    imageError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['class.img-error',] }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['attr.data-error',] }],
    backgroundImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['style.backgroundImage',] }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['attr.display',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ImageShellComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-shell',
        template: _image_shell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_image_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImageShellComponent);



/***/ }),

/***/ 75506:
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShellModule": () => (/* binding */ ShellModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-shell/image-shell.component */ 71408);
/* harmony import */ var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-shell/text-shell.component */ 94840);







let ShellModule = class ShellModule {
};
ShellModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent,
            _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent,
            _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule
        ],
        exports: [
            _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent,
            _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent,
            _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent
        ]
    })
], ShellModule);



/***/ }),

/***/ 94840:
/*!**********************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextShellComponent": () => (/* binding */ TextShellComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _text_shell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-shell.component.html?ngResource */ 95613);
/* harmony import */ var _text_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-shell.component.scss?ngResource */ 1704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);





let TextShellComponent = class TextShellComponent {
    constructor() {
        // To debug shell styles, change configuration in the environment file
        this.debugMode = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appShellConfig.debug) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appShellConfig.debug : false;
        this.textLoaded = false;
    }
    set data(val) {
        if (!this.debugMode) {
            this._data = (val !== undefined && val !== null) ? val : '';
        }
        if (this._data && this._data !== '') {
            this.textLoaded = true;
        }
        else {
            this.textLoaded = false;
        }
    }
};
TextShellComponent.ctorParameters = () => [];
TextShellComponent.propDecorators = {
    textLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding, args: ['class.text-loaded',] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TextShellComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-text-shell',
        template: _text_shell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_text_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TextShellComponent);



/***/ }),

/***/ 15009:
/*!************************************************!*\
  !*** ./src/app/utils/transfer-state-helper.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageShellState": () => (/* binding */ ImageShellState),
/* harmony export */   "TransferStateHelper": () => (/* binding */ TransferStateHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88759);






var ImageShellState;
(function (ImageShellState) {
    ImageShellState["SSR"] = "ssr-loaded";
    ImageShellState["BROWSER_FROM_SSR"] = "browser-loaded-from-ssr";
    ImageShellState["NOT_FOUND"] = "not-found";
})(ImageShellState || (ImageShellState = {}));
let TransferStateHelper = class TransferStateHelper {
    constructor(platformId, state) {
        this.platformId = platformId;
        this.state = state;
    }
    // Method with generic param
    checkDataSourceState(stateKey, dataSource) {
        const dataKey = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)(stateKey);
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
            // When loading resource in the server, store the result in the TransferState
            // to use when transitioning to the browser from the SSR rendered app
            return dataSource.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((data) => {
                this.state.set(dataKey, data);
            }));
        }
        else {
            // Check if we have data in the TransferState
            if (this.state.hasKey(dataKey)) {
                const stateData = this.state.get(dataKey, null);
                if (stateData && stateData !== null) {
                    const cachedDataSource = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(stateData);
                    // After using it, remove data from state
                    // this.state.remove(dataKey);
                    // Set a flag to track if the dataSource is being cached in the server state or not
                    Object.assign(cachedDataSource, { ssr_state: true });
                    return cachedDataSource;
                }
                else {
                    return dataSource;
                }
            }
            else {
                return dataSource;
            }
        }
    }
    // This method checks if a specific image was previously handled in the server
    checkImageShellState(stateKey, imageSource) {
        let imageState = ImageShellState.NOT_FOUND;
        // Make sure we are not dealing with empty image sources
        if (imageSource !== '') {
            // We will store a collection of image sources in the state
            const dataKey = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)(stateKey);
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
                // When loading resource in the server, store the result in the TransferState
                // to use when transitioning to the browser from the SSR rendered app
                const stateImages = this.state.get(dataKey, []);
                stateImages.push(imageSource);
                this.state.set(dataKey, stateImages);
                // Running in the server, in this execution the image is set in the transfer state for the first time
                imageState = ImageShellState.SSR;
            }
            else {
                // Check if we have data in the TransferState
                if (this.state.hasKey(dataKey)) {
                    const stateData = this.state.get(dataKey, []);
                    // Check if the image was previously loaded in the server
                    if (stateData.includes(imageSource)) {
                        imageState = ImageShellState.BROWSER_FROM_SSR;
                    }
                }
            }
        }
        return imageState;
    }
};
TransferStateHelper.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID,] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.TransferState }
];
TransferStateHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], TransferStateHelper);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    version: "1.0.1.0",
    production: false,
    apiKeyMaps: 'AIzaSyBN4C1ishyo2JWVleaFG4GubWMvzHBHZBg',
    config: {
        apiKey: "AIzaSyB-K4zemINdFda5LG2djnNvwuatJsUADvs",
        authDomain: "telollevo-d36b4.firebaseapp.com",
        projectId: "telollevo-d36b4",
        storageBucket: "telollevo-d36b4.appspot.com",
        messagingSenderId: "247663982602",
        appId: "1:247663982602:web:93c0d726f2fe9c8cfa87f3",
        measurementId: "G-YJ97EQPYXD",
        databaseURL: "telollevo-d36b4.firebaseio.com",
    },
    appShellConfig: {
        debug: false,
        networkDelay: 0
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 98809:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/side-menu/styles/side-menu.responsive.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .app-sidemenu .user-info-wrapper .user-name {\n    font-size: 18px;\n  }\n  .app-sidemenu ion-list ion-item {\n    font-size: 14px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {\n  #header {\n    height: 768px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsNENBQUE7QUFDQTtFQVlNO0lBQ0UsZUFBQTtFQWZOO0VBb0JJO0lBQ0UsZUFBQTtFQWxCTjtBQUNGO0FBdUJBLHFEQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUFoQ047QUFDRjtBQXFDQSxrREFBQTtBQWFBLHFDQUFBO0FBYUEsaURBQUE7QUFXQTtFQUtJO0lBQ0ksYUFBQTtFQXpFTjtBQUNGIiwiZmlsZSI6InNpZGUtbWVudS5yZXNwb25zaXZlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAoTm90ZTogRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgZGV2aWNlcyBhcyBpdCBtYXkgYnJlYWsgdGhlIGNvcnJlY3QgY3NzIHByZWNlZGVuY2UpXG5cbi8vIChzZWU6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL21lZGlhLXF1ZXJpZXMtZm9yLXN0YW5kYXJkLWRldmljZXMvI2lwaG9uZS1xdWVyaWVzKVxuLy8gKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3NzUwMjYxLzExMTY5NTkpXG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5hcHAtc2lkZW1lbnUge1xuICAgIC51c2VyLWluZm8td3JhcHBlciB7XG4gICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTY4cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xuICAgIC5jdXN0b20tY2hlY2tib3gge1xuICAgICAgLmNoZWNrYm94LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDczNnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG5AbWVkaWEgb25seSBzY3JlZW4gXG5hbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgXG5hbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIFxuYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSlcbmFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gICAgI2hlYWRlciB7XG4gICAgICAgIGhlaWdodDogNzY4cHg7XG4gICAgfVxufVxuXG59XG4iXX0= */";

/***/ }),

/***/ 78180:
/*!******************************************************************!*\
  !*** ./src/app/pages/side-menu/styles/side-menu.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-alt-shade);\n  --page-headers-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.4);\n}\n\n.app-sidemenu ion-toolbar {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --background: var(--ion-color-dark-tint);\n}\n\n.app-sidemenu ion-content {\n  --background: var(--page-background);\n}\n\n.app-sidemenu .user-details-wrapper {\n  --ion-grid-column-padding: 0px;\n  color: var(--ion-color-lightest);\n  padding: var(--page-margin);\n  align-items: center;\n}\n\n.app-sidemenu .user-details-wrapper + .user-details-wrapper {\n  padding-top: 0px;\n}\n\n.app-sidemenu .user-info-wrapper {\n  padding-left: var(--page-margin);\n}\n\n.app-sidemenu .user-info-wrapper .user-name {\n  margin: 0px 0px 5px;\n}\n\n.app-sidemenu .user-info-wrapper .user-handle {\n  color: var(--ion-color-light-shade);\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.app-sidemenu .user-stats-wrapper {\n  text-align: center;\n}\n\n.app-sidemenu .user-stats-wrapper .user-stat-value {\n  margin-right: 5px;\n  font-weight: 500;\n}\n\n.app-sidemenu .user-stats-wrapper .user-stat-name {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.app-sidemenu ion-list {\n  --ion-text-color: var(--ion-color-light-shade);\n  --ion-text-color-rgb: var(--ion-color-light-shade-rgb);\n  --ion-item-background: var(--page-background);\n  --ion-item-border-color: transparent;\n}\n\n.app-sidemenu ion-list ion-list-header {\n  --color: rgba(var(--ion-color-light-shade-rgb), 0.6);\n  text-transform: uppercase;\n  box-shadow: inset 0px -4px 8px -2px var(--page-headers-shadow-color);\n  padding-inline-start: var(--page-margin);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n\n.app-sidemenu ion-list ion-item {\n  --border-width: 0px !important;\n  --padding-start: var(--page-margin);\n  --background-activated: var(--ion-color-medium);\n}\n\n.app-sidemenu ion-list ion-icon {\n  color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSxrREFBQTtFQUVBLG9FQUFBO0FBRkY7O0FBT0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0FBSko7O0FBT0U7RUFDRSxvQ0FBQTtBQUxKOztBQVFFO0VBQ0UsOEJBQUE7RUFHQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFVSTtFQUNFLGdCQUFBO0FBUk47O0FBWUU7RUFDRSxnQ0FBQTtBQVZKOztBQVlJO0VBQ0UsbUJBQUE7QUFWTjs7QUFhSTtFQUNFLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVhOOztBQWVFO0VBQ0Usa0JBQUE7QUFiSjs7QUFlSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFiTjs7QUFnQkk7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUFkTjs7QUFtQkU7RUFDRSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0EsNkNBQUE7RUFDQSxvQ0FBQTtBQWpCSjs7QUFtQkk7RUFDRSxvREFBQTtFQUVBLHlCQUFBO0VBQ0Esb0VBQUE7RUFDQSx3Q0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQW5CTjs7QUFzQkk7RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0NBQUE7QUFwQk47O0FBdUJJO0VBQ0UsbUNBQUE7QUFyQk4iLCJmaWxlIjoic2lkZS1tZW51LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdC1zaGFkZSk7XG5cbiAgLS1wYWdlLWhlYWRlcnMtc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYiksIDAuNCk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmFwcC1zaWRlbWVudSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4xNSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmICsgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC51c2VyLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICB9XG5cbiAgICAudXNlci1oYW5kbGUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnVzZXItc3RhdC12YWx1ZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnVzZXItc3RhdC1uYW1lIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIE1lbnUgbGlzdCBpdGVtc1xuICBpb24tbGlzdCB7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYik7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjYpO1xuXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC00cHggOHB4IC0ycHggdmFyKC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 92512:
/*!************************************************************************!*\
  !*** ./src/app/pages/side-menu/styles/side-menu.shell.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "app-image-shell.user-avatar {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.15);\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0VBQUE7RUFDQSxnQ0FBQTtBQUNGIiwiZmlsZSI6InNpZGUtbWVudS5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItYXZhdGFyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMTUpO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 86083:
/*!***************************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n:host .content-wrapper {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJhc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 74405:
/*!*************************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  --image-shell-color: #333;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n:host > .spinner {\n  display: none;\n}\n:host::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n:host:not([display=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n:host:not([display=cover]) > .inner-img {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  display: block;\n}\n:host:not([display=cover]).img-ssr::before, :host:not([display=cover]).img-loaded::before {\n  display: none;\n}\n:host:not([display=cover]).img-ssr > .inner-img, :host:not([display=cover]).img-loaded > .inner-img {\n  opacity: 1;\n  visibility: visible;\n}\n:host:not([display=cover]).img-error > .inner-img {\n  color: var(--image-shell-color);\n  font-size: 12px;\n}\n:host:not([display=cover]).img-error::after {\n  content: attr(data-error);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10px;\n  color: var(--image-shell-color);\n  background-color: var(--image-shell-loading-background);\n  font-size: 12px;\n}\n:host[display=cover] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n:host[display=cover]::before, :host[display=cover] > .spinner {\n  z-index: -1;\n}\n:host[display=cover] > .inner-img {\n  display: none;\n  visibility: hidden;\n}\n:host[display=cover].img-ssr::before, :host[display=cover].img-loaded::before {\n  display: none;\n}\n:host([animation=gradient]) {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n:host([animation=gradient])::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  animation: animateBackground 2s ease-in-out infinite;\n}\n:host([animation=gradient]).img-ssr::before, :host([animation=gradient]).img-loaded::before, :host([animation=gradient]).img-error::before {\n  background: none;\n  animation: 0;\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n:host([animation=spinner]) {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n:host([animation=spinner]) > .spinner {\n  display: block;\n  position: absolute;\n  top: calc(50% - var(--image-shell-spinner-size) / 2);\n  left: calc(50% - var(--image-shell-spinner-size) / 2);\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n:host([animation=spinner]).img-ssr > .spinner, :host([animation=spinner]).img-loaded > .spinner, :host([animation=spinner]).img-error > .spinner {\n  display: none;\n  visibility: hidden;\n}\n:host(.add-overlay) {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n:host(.add-overlay).img-ssr::before, :host(.add-overlay).img-loaded::before, :host(.add-overlay).img-error::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNoZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBQUY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNFLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUVBLGNBQUE7QUFMTjtBQVdNO0VBQ0UsYUFBQTtBQVRSO0FBWU07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQWVNO0VBRUUsK0JBQUE7RUFDQSxlQUFBO0FBZFI7QUFrQk07RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZUFBQTtBQWhCUjtBQXVCRTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUFyQko7QUF3Qkk7RUFFRSxXQUFBO0FBdkJOO0FBMEJJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBeEJOO0FBOEJNO0VBQ0UsYUFBQTtBQTVCUjtBQWtDQTtFQUNFLHNDQUFBO0VBQ0EsbUNBQUE7QUEvQkY7QUFrQ0U7RUFDRSxrS0FDRTtFQUNGLDRCQUFBO0VBQ0Esb0RBQUE7QUFqQ0o7QUF3Q0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUF0Q047QUEwQ0U7RUFDRTtJQUNFLDZCQUFBO0VBeENKO0VBMkNFO0lBQ0UsNEJBQUE7RUF6Q0o7QUFDRjtBQTZDQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUExQ0Y7QUE0Q0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtFQUNBLHFEQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQTFDSjtBQWdESTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQTlDTjtBQW1EQTtFQUNFLG1EQUFBO0FBaERGO0FBc0RJO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FBcEROIiwiZmlsZSI6ImltYWdlLXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0taW1hZ2Utc2hlbGwtY29sb3I6ICMzMzM7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgei1pbmRleDogMjtcblxuICAvLyBCeSBkZWZhdWx0LCBoaWRlIHRoZSBzcGlubmVyXG4gICYgPiAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8vIExvYWRpbmcgYmFja2dyb3VuZFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gICY6bm90KFtkaXNwbGF5PVwiY292ZXJcIl0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIsIG9wYWNpdHkgLjVzIGxpbmVhcjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICAgICAgLy8gSW1hZ2Ugc2hvdWxkIGZpbGwgdGhlIHNwYWNlIHdoaWxlIGxvYWRpbmdcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYuaW1nLXNzcixcbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaW1nLWVycm9yIHtcbiAgICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgICAgLy8gRm9yIHRoZSBBbHQgdGV4dFxuICAgICAgICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBwbGFjZWhvbGRlciBiYWNrZ3JvdW5kXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1lcnJvcik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICogTk9URTogd2UgZGlkbid0IGFkZCAuaW1nLWVycm9yIHN0eWxlcyBmb3IgJ2NvdmVyJyBkaXNwbGF5IG9uIHB1cnBvc2UuXG4gIC8vIElmIGl0IGlzIGRpc3BsYXk6IGNvdmVyXG4gICZbZGlzcGxheT1cImNvdmVyXCJdIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAvLyBJbiBjb3ZlciBkaXNwbGF5LCB3ZSBjYW4gaGF2ZSBjb250ZW50IGluc2lkZSB0aGUgZWxlbWVudCwgdGh1cyB3ZSBuZWVkIHRvIHB1dCB0aGVzZSBlbGVtZW50cyBiZW5lYXRoXG4gICAgJjo6YmVmb3JlLFxuICAgICYgPiAuc3Bpbm5lciB7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICYuaW1nLXNzcixcbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgOCUsIHZhcigtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgJi5pbWctc3NyLFxuICAmLmltZy1sb2FkZWQsXG4gICYuaW1nLWVycm9yIHtcbiAgICAvLyBSZXNldCBiYWNrZ3JvdW5kIGFuaW1hdGlvblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiAwO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xuICAgIDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxufVxuXG46aG9zdChbYW5pbWF0aW9uPVwic3Bpbm5lclwiXSkge1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMjhweDtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiAjQ0NDO1xuXG4gICYgPiAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gICAgd2lkdGg6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcik7XG4gIH1cblxuICAmLmltZy1zc3IsXG4gICYuaW1nLWxvYWRlZCxcbiAgJi5pbWctZXJyb3Ige1xuICAgICYgPiAuc3Bpbm5lciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCguYWRkLW92ZXJsYXkpIHtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuXG4gICYuaW1nLXNzcixcbiAgJi5pbWctbG9hZGVkLFxuICAmLmltZy1lcnJvciB7XG4gICAgLy8gQWRkIGJhY2tncm91bmQgb3ZlcmxheSBhZnRlciB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 1704:
/*!***********************************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n:host(:not([animation])) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host(:not([animation]))[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host(:not([animation]))[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 30% , var(--text-shell-background, #FFF) 30%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host(:not([animation]))[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host(:not([animation]))[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 36% , var(--text-shell-background, #FFF) 36%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host(:not([animation])).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=bouncing]) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate;\n  animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate;\n  animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 31% , var(--text-shell-background, #FFF) 31%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  animation: 0;\n}\n\n:host([animation=gradient]) {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  animation: animateBackground 2s ease-in-out infinite;\n}\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n:host([animation=gradient])::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 49% , var(--text-shell-background, #FFF) 49%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 50% , var(--text-shell-background, #FFF) 50%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=gradient]).text-loaded::before, :host([animation=gradient]).text-loaded::after {\n  background: none;\n  animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJtaXhpbnMvbWFza2VkLWxpbmVzLWJhY2tncm91bmQuc2NzcyIsIm1peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwibWl4aW5zL2JvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBR0EsNEJBQUE7QUFSRjs7QUFZQTtFQ1BJLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZlRjs7QUFVSTtFQ2JBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZzQkY7O0FBR0k7RUNnQkEsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY2QkY7O0FBSkk7RUNnQkEsa2pCQUFBO0VBQ0Esc2NBQUE7RUFDQSxtT0FBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGb0NGOztBQVhJO0VDZ0JBLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUYyQ0Y7O0FBbEJJO0VDZ0JBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZrREY7O0FBekJJO0VDZ0JBLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZ5REY7O0FBM0JFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUE2Qko7O0FBeEJBO0VHekJJLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBRUEsOEJBQUE7RUFDQSwyQkFBQTtFRG5CRiw0R0FBQTtFQ21GQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBSFZGOztBR3ZESTtFQUNFO0lBQ0Usd0RBQUE7RUh5RE47RUd0REk7SUFDRSx5REFBQTtFSHdETjtBQUNGOztBQXhDSTtFRy9CQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUVBLDhCQUFBO0VBQ0EsMkJBQUE7RURuQkYsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUhXRjs7QUc1RUk7RUFDRTtJQUNFLHdEQUFBO0VIOEVOO0VHM0VJO0lBQ0UseURBQUE7RUg2RU47QUFDRjs7QUE3REk7RUdrQkEsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIZ0NGOztBR2hESTtFQUNFO0lBQ0UsNElBQUE7RUhrRE47RUcvQ0k7SUFDRSw4SUFBQTtFSGlETjtBQUNGOztBQWxGSTtFR2tCQSxrakJBQUE7RUFDQSxzY0FBQTtFQUNBLG1PQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIcURGOztBR3JFSTtFQUNFO0lBQ0UsZ09BQUE7RUh1RU47RUdwRUk7SUFDRSxtT0FBQTtFSHNFTjtBQUNGOztBQXZHSTtFR2tCQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBSDBFRjs7QUcxRkk7RUFDRTtJQUNFLG9UQUFBO0VINEZOO0VHekZJO0lBQ0Usd1RBQUE7RUgyRk47QUFDRjs7QUE1SEk7RUdrQkEsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0EsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUgrRkY7O0FHL0dJO0VBQ0U7SUFDRSx3WUFBQTtFSGlITjtFRzlHSTtJQUNFLDZZQUFBO0VIZ0hOO0FBQ0Y7O0FBakpJO0VHa0JBLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIb0hGOztBR3BJSTtFQUNFO0lBQ0UsNGRBQUE7RUhzSU47RUduSUk7SUFDRSxrZUFBQTtFSHFJTjtBQUNGOztBQWpLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtBQWtLSjs7QUE3SkE7RUFDRSw2QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFRS9EQSw0R0FBQTtBRmdPRjs7QUExSkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUtBQ0U7RUFDRiw0QkFBQTtFQUNBLG9EQUFBO0FBMkpKOztBQXhKRTtFQUNFO0lBQ0UsNkJBQUE7RUEwSko7RUF2SkU7SUFDRSw0QkFBQTtFQXlKSjtBQUNGOztBQXJKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUN4RkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRmdRRjs7QUFwSkk7RUU1R0YsNEdBQUE7QUZtUUY7O0FBbkpNO0VDcEdGLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUYwUUY7O0FBOUpJO0VFNUdGLDRHQUFBO0FGNlFGOztBQTdKTTtFQ3ZFRix1VkFBQTtFQUNBLGdQQUFBO0VBQ0EsOElBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9SRjs7QUF4S0k7RUU1R0YsNEdBQUE7QUZ1UkY7O0FBdktNO0VDdkVGLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjhSRjs7QUFsTEk7RUU1R0YsNEdBQUE7QUZpU0Y7O0FBakxNO0VDdkVGLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZ3U0Y7O0FBNUxJO0VFNUdGLDRHQUFBO0FGMlNGOztBQTNMTTtFQ3ZFRix3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa1RGOztBQXRNSTtFRTVHRiw0R0FBQTtBRnFURjs7QUFyTU07RUN2RUYsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjRURjs7QUF0TUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXdNSjs7QUF0TUk7RUFFRSxnQkFBQTtFQUNBLFlBQUE7QUF1TU4iLCJmaWxlIjoidGV4dC1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodFwiO1xuQGltcG9ydCBcIi4vbWl4aW5zL21hc2tlZC1saW5lcy1iYWNrZ3JvdW5kXCI7XG5AaW1wb3J0IFwiLi9taXhpbnMvYm91bmNpbmctbGluZXMtYmFja2dyb3VuZFwiO1xuXG4kbWF4LWxpbmVzLWNvdW50OiA2O1xuXG46aG9zdCB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyOiAzcHg7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQpO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAvLyBUbyBmaXggMXB4IGxpbmUgbWlzYWxpZ25tZW50IGluIGNocm9tZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtY2xpcFxuICAvLyAoSSBhbHNvIG5vdGljZWQgdGhhdCBpZiBJIHNldCB0aGUgY29sb3IgdG8gYSBzb2xpZCBjb2xvciBpbnN0ZWFkIG9mIGhhdmluZyBvcGFjaXR5LCB0aGUgaXNzdWUgZG9lc24ndCBoYXBwZW4pXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG5cbi8vIERlZmF1bHQgc3R5bGVzLiBXaGVuIG5vIGFuaW1hdGlvbiBhdHRyaWJ1dGUgaXMgcHJvdmlkZWRcbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKSB7XG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcbiAgICB9XG4gIH1cblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gQm91bmNpbmcgbGluZSBsb2FkaW5nIGFuaW1hdGlvblxuOmhvc3QoW2FuaW1hdGlvbj1cImJvdW5jaW5nXCJdKSB7XG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICBAaW5jbHVkZSBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKDEpO1xuXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heC1saW5lcy1jb3VudCB7XG4gICAgJltsaW5lcz1cIiN7ICRpIH1cIl0ge1xuICAgICAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIC8vIDAgaXMgdGhlIGRlZmF1bHQgdmFsdWUgKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1OTYzMDQ0LzExMTY5NTkpXG4gICAgYW5pbWF0aW9uOiAwO1xuICB9XG59XG5cbi8vIEJhY2tncm91bmQgZ3JhZGllbnQgYmVuZWF0aCBtYXNrZWQgbGluZXNcbjpob3N0KFthbmltYXRpb249XCJncmFkaWVudFwiXSkge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogI0ZGRjtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogI0VFRTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuXG4gIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgMSBsaW5lXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsIDEpO1xuXG4gIC8vIFRoZSBhbmltYXRpb24gdGhhdCBnb2VzIGJlbmVhdGggdGhlIG1hc2tzXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSAzMyUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlQmFja2dyb3VuZCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xuICAgIDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBtYXNrc1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXG4gICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgJGkgbGluZXNcbiAgICAgIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRpKTtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBhbmltYXRpb246IDA7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xuQGltcG9ydCBcIi4vYmFja2dyb3VuZC1oZWlnaHRcIjtcblxuQG1peGluIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuICAkYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQyk7XG4gICRtYXNrLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGJnLXktcG9zOiAwcHg7XG4gICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg4NSwgOTUpfTtcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcbiAgJGJnLXBvc2l0aW9uOiAnMCAnICsgJGJnLXktcG9zO1xuICAkYmctc2l6ZTogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcblxuICBAaWYgKCRsaW5lcyA9PSAxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemV9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH0gQGVsc2Uge1xuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggJGxpbmVzIHtcbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgYmV0d2VlbiBsaW5lc1xuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcbiAgICAgIC8vIFRoaXMgbGluZWFyLWdyYWRpZW50IGFzIHNlcGFyYXRvciBzdGFydHMgYmVsb3cgdGhlIGxhc3QgbGluZSxcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLWhlaWdodCB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuXG4gICAgICAvLyBBZGQgbmV3IGxpbmVcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgc2hvdWxkIGJlIG5hcnJvdyB0aGFuIHRoZSBvdGhlcnNcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSgzMCwgNTApfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oNjAsIDgwKX07XG4gICAgICB9XG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknKTtcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDEpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3t0by1zdHJpbmcoJGJnLXBvc2l0aW9uLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cblxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkbGluZXMpO1xufVxuIiwiQG1peGluIGJhY2tncm91bmQtaGVpZ2h0KCRwcm9wZXJ0eSwgJGxpbmVzOiAxKSB7XG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XG5cbiAgI3skcHJvcGVydHl9OiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAjeyRsaW5lc30pICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skbGluZXN9IC0gMSkpKTtcbn1cbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XG5cbkBtaXhpbiBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKCRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuICAkYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQyk7XG4gICRtYXNrLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGJnLXktcG9zOiAwcHg7XG4gICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg4NSwgOTUpfTtcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcbiAgJGJnLXBvc2l0aW9uOiAnMCAnICsgJGJnLXktcG9zO1xuICAkYmctc2l6ZTogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcbiAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206ICc4NSUgJyArICRsaW5lLWhlaWdodDtcbiAgJGJnLXNpemUtYW5pbWF0aW9uLXRvOiAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0O1xuXG4gIEBpZiAoJGxpbmVzID09IDEpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAjeyRiZy1pbWFnZX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3skYmctcG9zaXRpb259O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZUxpbmU7XG5cbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVMaW5lIHtcbiAgICAgIDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLWZyb219O1xuICAgICAgfVxuXG4gICAgICAxMDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLXRvfTtcbiAgICAgIH1cbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggJGxpbmVzIHtcbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgYmV0d2VlbiBsaW5lc1xuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcbiAgICAgIC8vIFRoaXMgbGluZWFyLWdyYWRpZW50IGFzIHNlcGFyYXRvciBzdGFydHMgYmVsb3cgdGhlIGxhc3QgbGluZSxcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLWhlaWdodCB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuICAgICAgLy8gc2VwYXJhdG9yIGxpbmVzIGhhdmUgdGhlIHNhbWUgaW5pdGlhbCBhbmQgZW5kIHN0YXRlLCB0aHVzIG5vIGFuaW1hdGlvbiBvY2N1cnNcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuXG4gICAgICAvLyBBZGQgbmV3IGxpbmVcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgc2hvdWxkIGJlIG5hcnJvdyB0aGFuIHRoZSBvdGhlcnNcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSgzMCwgNTApfTtcbiAgICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzU1JSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oNjAsIDgwKX07XG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc3NSUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKScpO1xuICAgICAgLy8gVGhpcyBuZXcgbGluZSBzdGFydHMgYmVsb3cgdGhlIHBydmlvdXNseSBhZGRlZCBzZXBhcmF0b3IsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1zcGFjaW5nIHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMSkpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3t0by1zdHJpbmcoJGJnLXBvc2l0aW9uLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcblxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gICAgICAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJywgJyl9O1xuICAgICAgfVxuXG4gICAgICAxMDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJywgJyl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRsaW5lcyk7XG5cbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbiJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app dir=\"{{textDir}}\">\n  <!-- when=false means that the split pane will never expand automatically -->\n  <!-- For more info check https://ionicframework.com/docs/api/split-pane -->\n  <ion-split-pane contentId=\"menu-content\" when=\"true\">\n    <ion-menu contentId=\"menu-content\" class=\"app-sidemenu\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-row class=\"user-details-wrapper\">\n            <ion-col size=\"4\">\n              <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <app-image-shell animation=\"spinner\" [src]=\"'./assets/images/logo.webp'\"></app-image-shell>\n              </app-aspect-ratio>\n            </ion-col>\n            <ion-col class=\"user-info-wrapper\" size=\"8\">\n              <h3 class=\"user-name\">Te Lo Llevo</h3>\n              <h5 class=\"user-handle\">Lo hacemos por ti</h5>\n              <div style=\"text-align: center;font-size: 10px;\">Versión {{version}}</div>\n            </ion-col>\n          </ion-row>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <ion-menu-toggle autoHide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item [routerLink]=\"p.url\">\n              <ion-icon slot=\"start\" [name]=\"p.ionicIcon? p.ionicIcon: ''\" [src]=\"p.customIcon? p.customIcon: ''\">\n              </ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle autoHide=\"true\">\n            <ion-item (click)=\"signout()\">\n              <ion-icon slot=\"start\" name=\"color-wand-outline\"></ion-icon>\n              <ion-label>\n                Cerrar Sesión\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <!-- Main app content get's rendered in this router-outlet -->\n    <ion-router-outlet id=\"menu-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";

/***/ }),

/***/ 73225:
/*!***************************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content-wrapper\">\n  <ng-content></ng-content>\n</div>\n";

/***/ }),

/***/ 5115:
/*!*************************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-spinner class=\"spinner\"></ion-spinner>\n<img class=\"inner-img\" [src]=\"_src\" [alt]=\"_alt\" [attr.loading]=\"_loadingStrategy\" (load)=\"_imageLoaded()\" (error)=\"_imageLoadError($event)\"/>\n<ng-content *ngIf=\"_display === 'cover'\"></ng-content>\n";

/***/ }),

/***/ 95613:
/*!***********************************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container>{{ _data }}</ng-container>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map