import { Inject, Injectable, PLATFORM_ID, Query } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { collection, collectionData, CollectionReference, Firestore, query, where, runTransaction, setDoc, getDocs, getDoc, updateDoc, deleteDoc, limit, startAfter, docData } from '@angular/fire/firestore';
import { CategoriasModel } from 'app/models/categorias.model';
import { SucursalesModel } from 'app/models/sucursales.model';
import { addDoc, doc, DocumentReference, FieldValue, orderBy, serverTimestamp, Transaction } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { switchMap, map, concatAll, shareReplay } from 'rxjs/operators';
import { DatosModel } from 'app/models/datos.model';
import { DireccionesModel } from 'app/models/direcciones.model';
import { TiposModel } from 'app/models/tipos.model';
import { ContadoresModel } from 'app/models/contadores.model';
import { ArticulosModel } from 'app/models/articulos.model';
import { TiendasModel } from 'app/models/tiendas.model';
import { UsuariosModel } from 'app/models/usuarios.model';
import { DispositivosModel } from 'app/models/dispositivos.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CuentasModel } from 'app/models/cuentas.model';
import { TransferStateHelper } from 'app/utils/transfer-state-helper';
import { DataStore } from 'app/shell/data-store';
import { isPlatformServer } from '@angular/common';
import { DirectoriosModel } from 'app/models/directorios.model';
import { ClasificacionesModel } from 'app/models/clasificaciones.model';
import { MisProductosModel } from 'app/models/misproductos.model';
import { leftJoinTiendas, leftJoinClases, leftJoinDepartamentos, leftJoinHorarios } from 'app/services/collectionJoin';
import { HorariosModel } from 'app/models/horarios.model';
import { ProductosModel } from 'app/models/buscar.model';
import { DepartamentosModel } from 'app/models/departamentos.model';
import { ClasesModel } from 'app/models/clases.model';
import { SeleccionadoresModel } from 'app/models/titulos.model';
import { ServiciosModel } from 'app/models/servicios.model';
import { LinksModel } from 'app/models/links.model';


export interface User {
  uid: string;
  email: string;
}

export interface Message {
  createdAt: FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private cuentasDataStore: DataStore<Array<CuentasModel>>;
  private direccionesDataStore: DataStore<Array<DireccionesModel>>;
  private categoriasDataStore: DataStore<Array<CategoriasModel>>;
  private directoriosDataStore: DataStore<Array<DirectoriosModel>>
  private clasificacionesDataStore: DataStore<Array<ClasificacionesModel>>
  private productosDataStore: DataStore<Array<MisProductosModel>>;
  private directorioDataStore: DataStore<Array<DirectoriosModel>>;
  private sucursalesDataStore: DataStore<Array<SucursalesModel>>;
  private horariosDataStore: DataStore<Array<HorariosModel>>;
  private departamentosDataStore: DataStore<Array<DepartamentosModel>>;
  private clasesDataStore: DataStore<Array<ClasesModel>>;
  private tiendasDataStore: DataStore<Array<TiendasModel>>;
  private servicioDataStore: DataStore<ServiciosModel[]>;
  private linksDataStore: DataStore<LinksModel[]>;

  currentUser: User = null;
  tiendaIdBase = '';
  claseIdBase = '';
  categoriaIdBase = '';
  clasificacionBase = '';
  categoriaBaseId = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private afAuth: Auth,
    private http: HttpClient,
    private transferStateHelper: TransferStateHelper,
    private afs: Firestore) {
    this.afAuth.onAuthStateChanged(user => {
      // console.log('Changed: ', user);
      this.currentUser = user;
    });
  }


  //#region Auth
  async signUp({ email, password }) {
    const credential = await createUserWithEmailAndPassword(
      this.afAuth,
      email,
      password
    );

    console.log('result: ', credential);
    const uid = credential.user.uid;

    // var docRef: DocumentReference = null;
    // docRef = doc(this.afs,
    //   'users/${uid}'
    // );
    return setDoc(doc(this.afs,
      'users/${uid}'
    ), {
      uid,
      email: credential.user.email
    });
  }

  signIn({ email, password }) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  addChatMessage(msg) {
    return addDoc(collection(this.afs, 'messages'), {
      msg,
      from: this.currentUser.uid,
      createdAt: serverTimestamp()
    });
  }

  getChatMessages() {
    let users = [];

    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        console.log('all users: ', users);
        return collectionData<Message>(
          query<Message>(
            collection(this.afs, 'messages') as CollectionReference<Message>,
            orderBy('createdAt')
          ), { idField: 'id' }
        );
      }),
      map(messages => {
        for (let m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }
        console.log('all messages: ', messages);
        return messages;
      })
    )
  }

  getUsers() {
    return collectionData<User>(
      query<User>(
        collection(this.afs, 'users') as CollectionReference<User>,
        // where('published', '==', true)
      ), { idField: 'uid' }
    );
  }

  getUserForMsg(msgFromId, users: User[]): string {
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted';
  }

  //#endregion Auth


  //#region Notificaciones

  async getDispositivos(tiendaId) {
    var ret = [];
    var user = await JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;
    const q = query(collection(this.afs, 'tiendas'), where('id', '==', tiendaId));
    const promise = await getDocs(q);
    if (promise.docs.length > 0) {
      var tienda = promise.docs[0].data() as TiendasModel;
      var email = tienda.correo;
      if (email != null && email != '') {
        const q1 = query(collection(this.afs, 'usuarios'), where('correo', '==', email), where('activo', '==', true));
        const promise1 = await getDocs(q1);
        if (promise1.docs.length > 0) {
          var usuario = promise1.docs[0].data() as UsuariosModel;
          if (usuario) {
            const q2 = query(collection(this.afs, 'dispositivos'), where('uid', '==', usuario.uid));
            const promise2 = await getDocs(q2);
            if (promise2.docs.length > 0) {
              var dispositivo = promise2.docs[0].data() as DispositivosModel;
              ret.push(dispositivo.dispositivoId);
            }
            return ret;
          }
        }
        return ret;
      }
    }
    return ret;
  }

  async sendMensajeTienda(mensaje, tiendaId) {
    var dispositivos = await this.getDispositivos(tiendaId);
    if (dispositivos) {
      await this.pushMessage(dispositivos, mensaje);
      // dispositivos.forEach(element => {
      //     console.log(element);
      // });
    }
  }

  async pushMessage(include_player_ids, mensaje) {
    var keys = await JSON.parse(localStorage.getItem('keys'));
    const privateKey = keys.onesignal;
    let httpOptionsOneSignal = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: privateKey,
      })
    };
    var data = JSON.stringify({
      "app_id": '7d97edb4-db38-448d-b857-d2f5224866b9',
      include_player_ids,
      "contents": { "en": mensaje, "es": mensaje },
      "headings": { "en": "'Te Lo Llevo'", "es": "'Te Lo Llevo'" },
    });
    // console.log(data);
    const url = "https://onesignal.com/api/v1/notifications";
    return new Promise((resolve, reject) => {
      this.http.post(url, data, httpOptionsOneSignal)
        .subscribe(data => {
          return resolve(data['data']);
        }, error => {
          console.log(error);
        });
    });
  }
  //#endregion

  //#region  Devices

  async createDevice(dispositivoId: string) {
    var user = JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;
    var correo = user.email;
    var telefono = user.phoneNumber;
    const q = await query(collection(this.afs, "dispositivos"), where("uid", "==", uid), where("dispositivoId", "==", dispositivoId));
    const device = await getDocs(q);
    if (device.docs.length == 0) {

      const refDispositivos = await addDoc(collection(this.afs, "dispositivos"), {
        uid: uid,
        dispositivoId: dispositivoId,
        correo: correo,
        telefono: telefono
      });

    }
  }

  //#endregion Devices



  //#region Tipos

  getTipos() {
    return collectionData(query(collection(this.afs, 'tipos'), orderBy('tipo'))) as unknown as Observable<TiposModel>;
  }

  //#endregion Tipos

  //#region Direcciones

  async getDireccionAsync(direccionId: string): Promise<DireccionesModel> {
    const q = query(collection(this.afs, "direcciones"), where("id", "==", direccionId));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0)
      return querySnapshot.docs[0].data() as unknown as DireccionesModel;
  }

  //#endregion Direcciones

  //#region Sucursales

  async getSucursalAsync(sucursalId: string): Promise<SucursalesModel> {
    const q = query(collection(this.afs, "sucursales"), where("id", "==", sucursalId));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0)
      return querySnapshot.docs[0].data() as unknown as SucursalesModel;
  }

  //#endregion Sucursales

  //#region Categorias

  getCategorias() {
    return collectionData<CategoriasModel>(
      query<CategoriasModel>(
        collection(this.afs, 'categorias') as CollectionReference<CategoriasModel>,
        where('categoria', '!=', '')
      ), { idField: 'id' }
    );
  }

  public searchCategorias(categoria: string): Observable<Array<CategoriasModel>> {
    return collectionData<CategoriasModel>(
      query<CategoriasModel>(
        collection(this.afs, 'categorias') as CollectionReference<CategoriasModel>,
        where('categoria', '==', categoria)
      ), { idField: 'id' }
    );

  }
  //#endregion Categorias

  //#region Pedidos

  async createPedido(sucursalId: string, direccion: DireccionesModel, pago: CuentasModel, values, numero: { property1: string; }) {
    var user = JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;

    var pedidoId: string;
    var articuloId: string;
    var direccionId: string;

    var contador: ContadoresModel;
    var q = query(collection(this.afs, 'contadores'), where('tipo', '==', 'pedidos'), where('sucursalId', '==', sucursalId));
    var promise = await getDocs(q);
    if (promise.docs.length > 0)
      contador = promise.docs[0].data() as unknown as ContadoresModel;
    var cont = contador.contador + 1;
    contador.contador = cont;
    await this.updateContador(contador);

    var tiendas: Array<string> = new Array<string>();

    values.forEach(async producto => {
      if (!tiendas.find(x => x == producto.tiendaId)) {
        tiendas.push(producto.tiendaId);
      }
    });

    const refPedido = await addDoc(collection(this.afs, "pedidos"), {
      fecha: new Date()
    });
    var pedido = await getDoc(refPedido);
    pedidoId = pedido.id;

    const fecha = new Date();
    const diaHora = fecha.toString();

    await updateDoc(refPedido, {
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
      activo: true,
    });

    values.forEach(async producto => {
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

      const refArticulos = await addDoc(collection(this.afs, "articulos"), {
        detalle: ''
      });
      const articulo = await getDoc(refArticulos);
      articuloId = articulo.id;

      await updateDoc(refArticulos, {
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
    numero.property1 = sucursalId.toUpperCase() + '-' + contador.contador.toString();

    tiendas.forEach(async tienda => {
      var listado: Array<string> = [];
      const q = query(collection(this.afs, "articulos"), where('pedidoId', '==', pedidoId), where('tiendaId', '==', tienda));
      const promise = await getDocs(q);
      if (promise && promise.docs.length <= 20) {
        promise.docs.forEach(doc => {
          var articulo = doc.data() as ArticulosModel;
          // console.log(articulo)
          if (articulo.observaciones) {
            listado.push('(' + articulo.cantidad.toString() + ') ' + articulo.producto.toString() + ' - Observaciones: ' + articulo.observaciones) + '\r\n';
          }
          else {
            listado.push('(' + articulo.cantidad.toString() + ') ' + articulo.producto.toString() + '\r\n');
          }
        });
      }
      // Agrega datos adicionales
      // Fecha y Hora
      var fecha = new Date();
      listado.push('Fecha/Hora: ' + diaHora + '\r\n');
      // // Nombre Cliente
      // listado.push('Cliente: ' + diaHora + '\r\n');
      // Teléfono Cliente
      if (direccion?.telefono)
        listado.push('Teléfono: ' + direccion?.telefono + '\r\n');
      // Dirección Cliente
      if (direccion?.direccion)
        listado.push('Dirección: ' + direccion?.direccion + '\r\n');
      // Forma Pago
      listado.push('Forma Pago: ' + pago.cuenta + '\r\n');
      await this.sendMensajeTienda("Pedido Número " + cont.toString() + '\r\n' + listado.toString(), tienda);
    })

    return pedido;
  }

  async updateContador(values) {
    const contadoresRef = doc(this.afs, "contadores", values.id);
    await updateDoc(contadoresRef, {
      id: values.id,
      contador: values.contador,
      sucursalId: values.sucursalId,
      tipo: values.tipo,
    }).then(() => {
      console.log('Contador actualizado satisfactoriamente');
    }).catch((error: any) => {
      console.log('Error actualizando el contador', error);
    });

    return;

  }
  //#endregion Pedidos

  //#region Cuentas

  public getCuentasDataSource(sucursalId: string): Observable<Array<CuentasModel>> {
    const rawDataSource = query(collection(this.afs, 'cuentas'), where("sucursalId", "==", sucursalId), where('activa', '==', true), orderBy('posicion')) as unknown as Observable<Array<CuentasModel>>;

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('cuentas-state', rawDataSource);

    return cachedDataSource;
  }

  public getCuentasStore(dataSource: Observable<Array<CuentasModel>>): DataStore<Array<CuentasModel>> {
    // Use cache if available
    if (!this.cuentasDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<CuentasModel> = [
        new CuentasModel(),
        new CuentasModel(),
        new CuentasModel(),
        new CuentasModel(),
        new CuentasModel(),
        new CuentasModel()
      ];
      this.cuentasDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.cuentasDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.cuentasDataStore.load(dataSource);
      }
    }

    return this.cuentasDataStore;
  }

  //#endregion

  //#region Direcciones

  async getDirecciones() {
    var user = JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;
    const q = query(collection(this.afs, 'direcciones'), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }

  async updateDireccion(values) {
    if (!values.id) {
      var user = JSON.parse(localStorage.getItem('user'));
      values.uid = user.uid;

      const refDirecciones = await addDoc(collection(this.afs, "direcciones"), {
        detalle: ''
      });
      const direccion = await getDoc(refDirecciones);
      const id = direccion.id;

      await updateDoc(refDirecciones, {
        id: id,
        uid: values.uid,
        direccion: values.direccion,
        detalle: values.detalle ?? '',
        telefono: values.telefono,
        latitud: values.latitud,
        longitud: values.longitud,
        duracion: values.duracion,
        distancia: values.distancia,
      });
    }
    else {
      const direccionesRef = doc(this.afs, "direcciones", values.id);
      await updateDoc(direccionesRef, {
        id: values.id,
        uid: values.uid,
        direccion: values.direccion,
        detalle: values.detalle ?? '',
        telefono: values.telefono,
        latitud: values.latitud,
        longitud: values.longitud,
        duracion: values.duracion,
        distancia: values.distancia,
      });
    }
    return values.id;
  }

  async deleteDireccion(values) {
    await deleteDoc(doc(this.afs, "direcciones", values.id));
    return;
  }
  public getDireccionesDataSource(): Observable<Array<DireccionesModel>> {
    var user = JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;

    const rawDataSource = collectionData(query(collection(this.afs, 'direcciones'), where("uid", "==", uid)), { idField: 'id' }) as Observable<Array<DireccionesModel>>;
    // const rawDataSource = query(collection(this.afs, 'direcciones'), where("uid", "==", uid)) as unknown as Observable<Array<DireccionesModel>>;

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('direcciones-state', rawDataSource);

    return cachedDataSource;
  }

  public getDireccionesStore(dataSource: Observable<Array<DireccionesModel>>): DataStore<Array<DireccionesModel>> {
    // Use cache if available
    if (!this.direccionesDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<DireccionesModel> = [
        new DireccionesModel(),
        new DireccionesModel(),
        new DireccionesModel(),
        new DireccionesModel(),
        new DireccionesModel(),
        new DireccionesModel(),
      ];
      this.direccionesDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.direccionesDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.direccionesDataStore.load(dataSource);
      }
    }

    return this.direccionesDataStore;
  }

  //#endregion

  //#region Categorias

  public getCategoriasDataSource(): Observable<CategoriasModel[]> {

    const rawDataSource = collectionData(query(collection(this.afs, 'categorias'), where('activa', '==', true), orderBy('posicion')), { idField: 'id' }) as Observable<unknown> as Observable<Array<CategoriasModel>>;
    //const rawDataSource = collectionData(query(collection(this.afs, 'tiendas'), where("categoriaId", "==", categoriaId), where('activa', '==', true), orderBy('posicion')), { idField: 'id' })

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('categorias-state', rawDataSource);

    return cachedDataSource;
  }

  public getCategoriasStore(dataSource: Observable<Array<CategoriasModel>>): DataStore<Array<CategoriasModel>> {
    // Use cache if available
    if (!this.categoriasDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<CategoriasModel> = [
        new CategoriasModel(),
        new CategoriasModel(),
        new CategoriasModel(),
        new CategoriasModel(),
        new CategoriasModel(),
        new CategoriasModel()
      ];
      this.categoriasDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.categoriasDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.categoriasDataStore.load(dataSource);
      }
    }

    return this.categoriasDataStore;
  }

  //#endregion

  //#region Directorios

  public getDirectoriosDataSource(clasificacion: string): Observable<DirectoriosModel[]> {

    if (this.clasificacionBase != clasificacion) {
      this.directoriosDataStore = undefined;
      this.clasificacionBase = clasificacion;
    }

    // const rawDataSource = collectionData<DirectoriosModel>(query<DirectoriosModel>(collection(this.afs, 'directorio') as CollectionReference<DirectoriosModel>, where("clasificaciones", "array-contains", clasificacion), where('activo', '==', true), orderBy('directorio'), where('categoria', 'not-in', ['Directorio', 'Restaurantes', 'Servicios Públicos'])), { idField: 'id' });
    const rawDataSource = collectionData<DirectoriosModel>(query<DirectoriosModel>(collection(this.afs, 'directorio') as CollectionReference<DirectoriosModel>, where("clasificaciones", "array-contains", clasificacion), where('activo', '==', true), orderBy('directorio')), { idField: 'id' });

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('directorios-state', rawDataSource);

    return cachedDataSource;
  }

  public getDirectoriosStore(dataSource: Observable<Array<DirectoriosModel>>): DataStore<Array<DirectoriosModel>> {
    // Use cache if available
    if (!this.directoriosDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<DirectoriosModel> = [
        new DirectoriosModel(),
        new DirectoriosModel(),
        new DirectoriosModel(),
        new DirectoriosModel(),
        new DirectoriosModel(),
        new DirectoriosModel()
      ];
      this.directoriosDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.directoriosDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.directoriosDataStore.load(dataSource);
      }
    }

    return this.directoriosDataStore;
  }

  //#endregion

  //#region Clasificaciones
  public getClasificacionesDataSource(categoriaId: string): Observable<Array<ClasificacionesModel>> {
    if (this.categoriaIdBase != categoriaId) {
      this.clasificacionesDataStore = undefined;
      this.categoriaIdBase = categoriaId;
    }

    const rawDataSource = collectionData<ClasificacionesModel>(query<ClasificacionesModel>(collection(this.afs, 'clasificaciones') as CollectionReference<ClasificacionesModel>, where("tipoclasificaciones", "==", categoriaId)), { idField: 'id' });

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('clasificaciones-state', rawDataSource);

    return cachedDataSource;
  }

  public getClasificacionesStore(dataSource: Observable<Array<ClasificacionesModel>>): DataStore<Array<ClasificacionesModel>> {
    // Use cache if available
    if (!this.clasificacionesDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<ClasificacionesModel> = [
        new ClasificacionesModel(),
        new ClasificacionesModel(),
        new ClasificacionesModel(),
        new ClasificacionesModel(),
        new ClasificacionesModel(),
        new ClasificacionesModel()
      ];
      this.clasificacionesDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.clasificacionesDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.clasificacionesDataStore.load(dataSource);
      }
    }

    return this.clasificacionesDataStore;
  }

  // Filter users by age
  public searchClasificaciones(lower: number, upper: number): Observable<Array<ClasificacionesModel>> {
    return;
  }
  //#endregion

  //#region ProductosSearch

  public getDataSourceSearch(categoriaId: string, tiendaId: string, texto: string) {
    if (tiendaId != '')
      return collectionData<MisProductosModel>(query<MisProductosModel>(collection(this.afs, 'misproductos') as CollectionReference<MisProductosModel>, where("categoriaId", "==", categoriaId), where("activo", "==", true), where("productoArray", "array-contains-any", texto.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')), limit(20)), { idField: 'id' });
    // return this.afs.collection<MisProductosModel>('misproductos', ref => ref.where("tiendaId", "==", tiendaId).where("activo", "==", true).where("productoArray", "array-contains-any", texto.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')).limit(20)).valueChanges({ idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    else
      return collectionData<MisProductosModel>(query<MisProductosModel>(collection(this.afs, 'misproductos') as CollectionReference<MisProductosModel>, where("tiendaId", "==", tiendaId), where("activo", "==", true), where("productoArray", "array-contains-any", texto.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')), limit(20)), { idField: 'id' }).pipe(
        leftJoinTiendas(this.afs, 'tiendaId', 'tiendas', 1),
        shareReplay(1)
      ) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    // return this.afs.collection<MisProductosModel>('misproductos', ref => ref.where("categoriaId", "==", categoriaId).where("activo", "==", true).where("productoArray", "array-contains-any", texto.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')).limit(20)).valueChanges({ idField: 'id' }).pipe(
    //   leftJoinTiendas(this.afs, 'tiendaId', 'tiendas', 1),
    //   shareReplay(1)
    // ) as Observable<unknown> as Observable<Array<MisProductosModel>>;
  }

  public getProductosDataSourceSearch(categoriaId: string, tiendaId: string, texto: string): Observable<Array<MisProductosModel>> {
    this.productosDataStore = undefined;

    const rawDataSource = this.getDataSourceSearch(categoriaId, tiendaId, texto);

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('productos-state', rawDataSource);

    return cachedDataSource;
  }

  public getProductosStoreSearch(dataSource: Observable<Array<MisProductosModel>>): DataStore<Array<MisProductosModel>> {
    // Use cache if available
    if (!this.productosDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<MisProductosModel> = [
        new MisProductosModel(),
        new MisProductosModel(),
        new MisProductosModel(),
        new MisProductosModel(),
        new MisProductosModel(),
        new MisProductosModel()
      ];
      this.productosDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.productosDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.productosDataStore.load(dataSource);
      }
    }

    return this.productosDataStore;
  }

  // Filter users by age
  public searchProductosSearch(lower: number, upper: number): Observable<Array<ProductosModel>> {
    return;
  }
  //#endregion

  //#region Departamentos

  public getDepartamentosDataSource(tiendaId: string): Observable<Array<DepartamentosModel>> {
    if (this.tiendaIdBase != tiendaId) {
      this.departamentosDataStore = undefined;
      this.clasesDataStore = undefined;
      this.tiendaIdBase = tiendaId;
    }

    const rawDataSource = collectionData<ClasesModel>(query<ClasesModel>(collection(this.afs, 'clases') as CollectionReference<ClasesModel>, where("tiendaId", "==", tiendaId)), { idField: 'id' }).pipe(
      leftJoinClases(this.afs, 'tiendaId', 'tiendas', 1),
      leftJoinDepartamentos(this.afs, 'departamentoId', 'departamentos', 1),
      shareReplay(1)
    ) as Observable<unknown> as Observable<Array<DepartamentosModel>>;

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('departamentos-state', rawDataSource);

    return cachedDataSource;
  }

  public getDepartamentosStore(dataSource: Observable<Array<DepartamentosModel>>): DataStore<Array<DepartamentosModel>> {
    // Use cache if available
    if (!this.departamentosDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<DepartamentosModel> = [
        new DepartamentosModel(),
        new DepartamentosModel(),
        new DepartamentosModel(),
        new DepartamentosModel(),
        new DepartamentosModel(),
        new DepartamentosModel()
      ];
      this.departamentosDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.departamentosDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.departamentosDataStore.load(dataSource);
      }
    }

    return this.departamentosDataStore;
  }

  // Filter users by age
  public searchDepartamentos(lower: number, upper: number): Observable<Array<DepartamentosModel>> {
    return;
  }
  //#endregion Departamentos

  //#region Clases
  public getClasesDataSource(tiendaId: string): Observable<Array<ClasesModel>> {

    const rawDataSource = collectionData(query(collection(this.afs, 'misclases'), where("tiendaId", "==", tiendaId)), { idField: 'id' })
      .pipe(
        leftJoinClases(this.afs, 'claseId', 'clases', 1),
        shareReplay(1)
      ) as Observable<unknown> as Observable<Array<ClasesModel>>;

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('clases-state', rawDataSource);

    return cachedDataSource;
  }

  public getClasesStore(dataSource: Observable<Array<ClasesModel>>): DataStore<Array<ClasesModel>> {
    // Use cache if available
    if (!this.clasesDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<ClasesModel> = [
        new ClasesModel(),
        new ClasesModel(),
        new ClasesModel(),
        new ClasesModel(),
        new ClasesModel(),
        new ClasesModel()
      ];
      this.clasesDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.clasesDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.clasesDataStore.load(dataSource);
      }
    }

    return this.clasesDataStore;
  }

  // Filter users by age
  public searchClases(lower: number, upper: number): Observable<Array<ClasesModel>> {
    return;
  }
  //#endregion Clases

  //#region Productos

  public getProductosDataSource(tiendaId: string, claseId: string): Observable<Array<MisProductosModel>> {
    if (this.tiendaIdBase != tiendaId || this.claseIdBase != claseId) {
      this.productosDataStore = undefined;
      this.tiendaIdBase = tiendaId;
      this.claseIdBase = claseId;
    }

    var rawDataSource: Observable<Array<MisProductosModel>>;
    if (claseId == "") {
      rawDataSource = collectionData(query(collection(this.afs, 'misproductos'), where("tiendaId", "==", tiendaId), where("activo", "==", true), orderBy("producto"), limit(20)), { idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    }
    else {
      rawDataSource = collectionData(query(collection(this.afs, 'misproductos'), where("tiendaId", "==", tiendaId), where("claseId", "==", claseId), where("activo", "==", true), orderBy("producto"), limit(20)), { idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    }
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('productos-state', rawDataSource);

    return cachedDataSource;
  }

  // carga los productos por páginas
  public loadProductos(tiendaId: string, claseId: string, start: string): Observable<Array<MisProductosModel>> {

    var rawDataSource: Observable<Array<MisProductosModel>>;
    if (start) {
      rawDataSource = collectionData(query(collection(this.afs, 'misproductos'), where("tiendaId", "==", tiendaId), where("claseId", "==", claseId), where("activo", "==", true), orderBy("producto"), startAfter(start), limit(6)), { idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    }
    else {
      rawDataSource = collectionData(query(collection(this.afs, 'misproductos'), where("tiendaId", "==", tiendaId), where("claseId", "==", claseId), where("activo", "==", true), orderBy("producto"), limit(6)), { idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
      // rawDataSource = this.afs.collection<MisProductosModel>('misproductos', ref =>
      //   ref.where("tiendaId", "==", tiendaId)
      //     .where("claseId", "==", claseId)
      //     .where("activo", "==", true)
      //     .orderBy("producto")
      //     .limit(6))
      //   .valueChanges({ idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    }

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('productos-state', rawDataSource);

    return cachedDataSource;

  }

  public getProductosStore(dataSource: Observable<Array<MisProductosModel>>): DataStore<Array<MisProductosModel>> {
    // Use cache if available
    // if (!this.productosDataStore) {
    // Initialize the model specifying that it is a shell model
    const shellModel: Array<MisProductosModel> = [
      new MisProductosModel(),
      new MisProductosModel(),
      new MisProductosModel(),
      new MisProductosModel(),
      new MisProductosModel(),
      new MisProductosModel()
    ];
    this.productosDataStore = new DataStore(shellModel);

    // If running in the server, then don't add shell to the Data Store
    // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
    if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
      // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
      this.productosDataStore.load(dataSource, 0);
    } else { // On browser transitions
      // Trigger the loading mechanism (with shell)
      this.productosDataStore.load(dataSource);
    }
    // }

    return this.productosDataStore;
  }

  //#endregion Productos

  //#region Tiendas

  public getTiendasDataSource(categoriaId: string): Observable<Array<TiendasModel>> {
    // rawDataSource = collectionData(query(collection(this.afs, 'misproductos'), where("tiendaId", "==", tiendaId), where("activo", "==", true), orderBy("producto"), limit(20)), { idField: 'id' }) as Observable<unknown> as Observable<Array<MisProductosModel>>;
    const rawDataSource = collectionData(query(collection(this.afs, 'tiendas'), where("categoriaId", "==", categoriaId), where('activa', '==', true), orderBy('posicion')), { idField: 'id' })
      .pipe(
        leftJoinHorarios(this.afs, 'id', 'mishorarios', 1),
        shareReplay(1)
      ) as Observable<unknown> as Observable<Array<TiendasModel>>;


    // const rawDataSource = this.afs.collection<TiendasModel>('tiendas', ref => ref.where('categoriaId', '==', categoriaId).where('activa', '==', true).orderBy('posicion')).valueChanges({ idField: 'id' })
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

  public getTiendasStore(categoriaId: string, dataSource: Observable<Array<TiendasModel>>): DataStore<Array<TiendasModel>> {
    // Use cache if available
    if (!this.tiendasDataStore || this.categoriaBaseId != categoriaId) {
      this.categoriaBaseId = categoriaId;
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<TiendasModel> = [
        new TiendasModel(),
        new TiendasModel(),
        new TiendasModel(),
        new TiendasModel(),
        new TiendasModel(),
        new TiendasModel()
      ];
      this.tiendasDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.tiendasDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.tiendasDataStore.load(dataSource);
      }
    }

    return this.tiendasDataStore;
  }

  // Filter users by age
  public searchTiendas(): Observable<Array<TiendasModel>> {
    return;
  }
  //#endregion Tiendas


  //#region Servicio

  public getServiciosDataSource(): Observable<Array<ServiciosModel>> {

    const rawDataSource = collectionData(query(collection(this.afs, 'servicios'), where('activo', '==', true), orderBy('posicion')), { idField: 'id' }) as Observable<Array<ServiciosModel>>;

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('servicios-state', rawDataSource);

    return cachedDataSource;
  }

  public getServiciosStore(dataSource: Observable<Array<ServiciosModel>>): DataStore<Array<ServiciosModel>> {
    // Use cache if available
    if (!this.servicioDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<ServiciosModel> = [
        new ServiciosModel(),
        new ServiciosModel(),
        new ServiciosModel(),
        new ServiciosModel(),
        new ServiciosModel(),
        new ServiciosModel()
      ];
      this.servicioDataStore = new DataStore(shellModel);

      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
      if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.servicioDataStore.load(dataSource, 0);
      } else { // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.servicioDataStore.load(dataSource);
      }
    }

    return this.servicioDataStore;
  }

  // Filter users by age
  public searchServicios(): Observable<Array<ServiciosModel>> {
    return;
  }

  //#endregion

  //#region Links
  public getLinksDataSource(servicioId: string): Observable<Array<LinksModel>> {

    const rawDataSource = collectionData(query(collection(this.afs, 'links'), where("servicioId", "==", servicioId)), { idField: 'id' })
      .pipe(
        // leftJoinLinks(this.afs, 'claseId', 'clases', 1),
        shareReplay(1)
      ) as Observable<unknown> as Observable<Array<LinksModel>>;

    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('clases-state', rawDataSource);

    return cachedDataSource;
  }

  public getLinksStore(dataSource: Observable<Array<LinksModel>>): DataStore<Array<LinksModel>> {
    // Use cache if available
    // if (!this.linksDataStore) {
    // Initialize the model specifying that it is a shell model
    const shellModel: Array<LinksModel> = [
      new LinksModel(),
      new LinksModel(),
      new LinksModel(),
      new LinksModel(),
      new LinksModel(),
      new LinksModel()
    ];
    this.linksDataStore = new DataStore(shellModel);

    // If running in the server, then don't add shell to the Data Store
    // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the browser from the server
    if (isPlatformServer(this.platformId) || dataSource['ssr_state']) {
      // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
      this.linksDataStore.load(dataSource, 0);
    } else { // On browser transitions
      // Trigger the loading mechanism (with shell)
      this.linksDataStore.load(dataSource);
    }
    // }

    return this.linksDataStore;
  }

  // Filter users by age
  public searchLinks(): Observable<Array<ClasesModel>> {
    return;
  }
  //#endregion Links

  //#region Datos
  getSeleccionadores(productoId: string) {
    return collectionData(query(collection(this.afs, 'seleccionadores'), where('productoId', '==', productoId), where('activo', '==', true), orderBy('titulo'), orderBy('posicion')), { idField: 'id' });
  }

  //#region Datos

  getDato() {
    var user = JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;
    return collectionData(query(collection(this.afs, 'datos'), where('uid', '==', uid)), { idField: 'id' }) as unknown as Observable<DatosModel>;
  }

  async getDatoAsync(): Promise<DatosModel> {
    var user = await JSON.parse(localStorage.getItem('user'));
    var uid = user.uid;
    const q = query(collection(this.afs, "datos"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0)
      return querySnapshot.docs[0].data() as unknown as DatosModel;
  }

  createDato(values) {
    if (!values.id) {
      var user = JSON.parse(localStorage.getItem('user'));
      values.uid = user.uid;
      const datosRef = doc(collection(this.afs, "datos"));
      setDoc(datosRef, {
        uid: values.uid,
        tipo: values.tipo,
        numero: values.numero,
        direccion: values.direccion,
        correo: values.correo,
        nombre: values.nombre,
        telefono: values.telefono,
        pais: values.pais,
      });
    }
    else {
      const datosRef = doc(this.afs, "datos", values.id);
      return updateDoc(datosRef, {
        uid: values.uid,
        tipo: values.tipo,
        numero: values.numero,
        direccion: values.direccion,
        correo: values.correo,
        nombre: values.nombre,
        telefono: values.telefono,
        pais: values.pais,
      });
    }
  }

  //#endregion Datos

}
