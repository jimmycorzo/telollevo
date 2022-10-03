"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_Firebase_service_ts"],{

/***/ 27937:
/*!**********************************************!*\
  !*** ./src/app/services/Firebase.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=default-src_app_services_Firebase_service_ts.js.map