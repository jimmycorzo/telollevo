import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { merge, Observable, Subscription } from 'rxjs';
import { ConfirmacionPage } from 'app/pages/confirmacion/confirmacion.page';
import { CarritoService, IPago, IProduct } from '../../services/carrito.service';
import { DataStore, ShellModel } from '../../shell/data-store';
import { CuentasModel } from 'app/models/cuentas.model';
import { DireccionesModel } from 'app/models/direcciones.model';
import { SucursalesModel } from 'app/models/sucursales.model';
import { DatosPage } from 'app/pages/datos/datos.page';
import { WompiService } from 'app/services/wompi.service';
import { FirebaseService } from 'app/services/firebase.service';
// import { MapsPage } from '@app/pages/maps/maps.page';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: [
    './styles/carrito.page.scss',
    './styles/carrito.responsive.scss',
    './styles/carrito.ios.scss',
    './styles/carrito.md.scss',
  ],
})

export class CarritoPage implements OnInit, OnDestroy {
  cart: IProduct[] = [];
  cuentasPagos: CuentasModel[] = [];
  cuentas: CuentasModel[] = [];
  isEnabled: boolean = false;
  subscriptions: Subscription;
  stateSubscriptionDirecciones: Subscription;
  direccionesDataStore: DataStore<Array<DireccionesModel>>;
  direcciones: Array<DireccionesModel>;
  direccionSeleccionada: string;
  direccion: DireccionesModel;
  pagoSeleccionado: string;
  pago: CuentasModel;
  servicioUrgente: boolean = false;
  subscriptionsCuentas: Subscription;
  stateSubscriptionCuentas: Subscription;
  cuentasDataStore: DataStore<Array<CuentasModel>>;
  sucursal: SucursalesModel;
  pedidoId: string = '';

  constructor(
    private cartService: CarritoService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    public firebaseService: FirebaseService,
    public router: Router,
    // private iab: InAppBrowser,
    public wompiService: WompiService
  ) { }

  ngOnDestroy(): void {
    this.stateSubscriptionDirecciones.unsubscribe();
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cuentasPagos = [
      { id: '1', cuenta: 'Efectivo (Contra-entrega)', banco: '', ahorros: false, activa: true, sucursal: '', posicion: 0, isShell: false, url: '' },
      { id: '2', cuenta: 'Nequi', banco: '', ahorros: false, activa: true, sucursal: '', posicion: 100001, isShell: false, url: '' },
      { id: '3', cuenta: 'PSE', banco: '', ahorros: false, activa: true, sucursal: '', posicion: 100002, isShell: false, url: '' },
      { id: '4', cuenta: 'Tarjeta Débito/Crédito', banco: '', ahorros: false, activa: true, sucursal: '', posicion: 100003, isShell: false, url: '' },
      // { id: '5', cuenta: 'Transferencia Bancolombia', banco: '', ahorros: false, activa: true, sucursal: '', posicion: 100004, isShell: false, url: '' },
    ];

    this.sucursal = JSON.parse(localStorage.getItem("sucursal"));

    // this.loadCuentas();

    this.loadDirecciones();

  }

  // async addDireccion() {
  //   let modalDir = await this.modalCtrl.create({
  //     component: MapsPage,
  //     cssClass: 'cart-modal',
  //     componentProps: {
  //       'direccion': new DireccionesModel,
  //     }
  //   });
  //   modalDir.onWillDismiss().then(async (data) => {
  //     const d = JSON.parse(data.data);
  //     if (d.id == '000000') // Nueva Dirección
  //     {
  //       this.direccion = await this.firebaseService.getDireccionAsync('000001');
  //       localStorage.setItem('direccion', JSON.stringify(this.direccion));
  //       this.direccionSeleccionada = '000001';
  //     }
  //     else {
  //       var direccion1 = JSON.parse(localStorage.getItem('direccion'));
  //       this.direcciones = undefined;
  //       await this.loadDirecciones();
  //       this.direccion = direccion1;
  //       this.direccionSeleccionada = direccion1.id;
  //       if (this.getTotal() > 0 && this.direccionSeleccionada && this.pagoSeleccionado)
  //         this.isEnabled = true;
  //       else
  //         this.isEnabled = false;
  //     }
  //   });
  //   modalDir.present();
  // }

  async loadDirecciones() {
    this.subscriptions = this.route.data.subscribe(
      (resolvedRouteData) => {
        const dsDirecciones: Observable<Array<DireccionesModel>> = this.firebaseService.getDireccionesDataSource();
        const storeDirecciones: DataStore<Array<DireccionesModel>> = this.firebaseService.getDireccionesStore(dsDirecciones);
        this.direccionesDataStore = storeDirecciones;

        this.stateSubscriptionDirecciones = merge(
          this.direccionesDataStore.state,
        ).subscribe(
          (state) => {
            var dir = [
              { id: '000001', direccion: 'En sitio', uid: '', detalle: '', telefono: '', distancia: 0, duracion: 0, latitud: 0, longitud: 0 },
            ];
            this.direcciones = state.concat(dir as DireccionesModel[]).sort(this.compareDirecciones);

            var direcc = localStorage.getItem('direccion');
            if (direcc != 'undefined') {
              this.direccion = JSON.parse(direcc);
              this.direccionSeleccionada = this.direccion?.id;
            }
            else {
              this.direccionSeleccionada = '000001';
              this.direccion = this.direcciones.find(x => x.id == this.direccionSeleccionada);
              localStorage.setItem('direccion', JSON.stringify(this.direccion));
            }

            if (!this.direccionSeleccionada) {
              this.direccionSeleccionada = '000001';
              this.direccion = this.direcciones.find(x => x.id == this.direccionSeleccionada);
              localStorage.setItem('direccion', JSON.stringify(this.direccion));
            }
            this.pagoSeleccionado = JSON.parse(localStorage.getItem('formapago'));
            // this.pago = JSON.parse(localStorage.getItem('pago'));
            if (!this.pagoSeleccionado) {
              this.pagoSeleccionado = "1";
              this.pago = this.cuentas.find(x => x.id == this.pagoSeleccionado);
              localStorage.setItem('pago', JSON.stringify(this.pago));
            }
            if (this.getTotal() > 0 && this.direccionSeleccionada && this.pagoSeleccionado)
              this.isEnabled = true;
            else
              this.isEnabled = false;

          },
          (error) => console.log(error),
          () => console.log('stateSubscriptionDirecciones completed')
        );
      },
      (error) => console.log(error)
    );
  }

  compareDirecciones(a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  compareCuentas(a, b) {
    if (a.posicion < b.posicion) {
      return -1;
    }
    if (a.posicion > b.posicion) {
      return 1;
    }
    return 0;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  getTotal() {
    var total = this.cart.reduce((i, j) => i + j.precioVlr * j.amount, 0);
    if (total > 0 && this.direccionSeleccionada && this.pagoSeleccionado)
      this.isEnabled = true;
    else
      this.isEnabled = false;
    return total;
  }

  getTiendas() {
    var count = new Set(this.cart.map(o => o['tiendaId'])).size;
    return count > 0 ? count - 1 : count;
  }


  getAdicional() {
    return this.getTiendas() * this.sucursal.adicional;
  }

  getDomicilio() {
    var tarifa = 0;
    if (this.direccion) {
      var duracion = (this.direccion ? this.direccion.duracion : 0) / 60.0;
      if (this.servicioUrgente) {
        if (duracion <= this.sucursal.urgenteHasta) {
          tarifa = this.sucursal.urgente * duracion;
          if (tarifa < this.sucursal.urgenteMinimo) {
            tarifa = this.sucursal.urgenteMinimo
          }
        }
        else {
          tarifa = this.sucursal.extra * duracion;
          if (tarifa < this.sucursal.extraMinimo) {
            tarifa = this.sucursal.extraMinimo
          }
        }
      }
      else
        if (duracion <= this.sucursal.basicaHasta) {
          tarifa = this.sucursal.basica * duracion;
          if (tarifa < this.sucursal.basicaMinimo) {
            tarifa = this.sucursal.basicaMinimo
          }
          // console.log('Básica: ', tarifa, duracion);
        }
        else {
          tarifa = this.sucursal.extra * duracion;
          if (tarifa < this.sucursal.extraMinimo) {
            tarifa = this.sucursal.extraMinimo
            // console.log('Extra: ', tarifa, duracion);
          }
        }
    }
    return Math.round(tarifa / 100) * 100;
  }

  close() {
    this.modalCtrl.dismiss();
  }

  // async direccion_seleccionada(event) {
  //   if (event.detail.value == '000000') // Nueva Dirección
  //   {
  //     var direccion: DireccionesModel;
  //     this.openMaps(this.direccion);
  //   }
  //   if (event.detail.value == '000001') // En Sitio
  //   {
  //     this.direccionSeleccionada = event.detail.value;
  //     this.direccion = this.direcciones.find(x => x.id == this.direccionSeleccionada);
  //     localStorage.setItem('direccion', JSON.stringify(this.direccion));
  //     if (this.getTotal() > 0 && this.direccionSeleccionada && this.pagoSeleccionado)
  //       this.isEnabled = true;
  //     else
  //       this.isEnabled = false;
  //   }
  //   else {
  //     this.direccionSeleccionada = event.detail.value;
  //     this.direccion = this.direcciones.find(x => x.id == this.direccionSeleccionada);
  //     localStorage.setItem('direccion', JSON.stringify(this.direccion));
  //     if (this.getTotal() > 0 && this.direccionSeleccionada && this.pagoSeleccionado)
  //       this.isEnabled = true;
  //     else
  //       this.isEnabled = false;
  //   }
  // }

  pago_seleccionado(event) {
    this.pagoSeleccionado = event.detail.value;
    this.pago = this.cuentas.find(x => x.id == event.detail.value);
    localStorage.setItem('formapago', JSON.stringify(event.detail.value));
    localStorage.setItem('pago', JSON.stringify(this.pago));
    if (this.getTotal() > 0 && this.direccionSeleccionada && this.pagoSeleccionado)
      this.isEnabled = true;
    else
      this.isEnabled = false;
  }

  ionViewWillLeave() {
    this.subscriptions.unsubscribe();
  }

  // async openMaps(direccion: DireccionesModel) {
  //   if (direccion == null) {
  //     direccion = new DireccionesModel();
  //   }
  //   let modal = await this.modalCtrl.create({
  //     component: MapsPage,
  //     cssClass: 'cart-modal',
  //     componentProps: {
  //       'direccion': direccion,
  //     }
  //   });
  //   modal.onWillDismiss().then(async () => {
  //     if (direccion.id == '000000') // Nueva Dirección
  //     {
  //       this.direccion = await this.firebaseService.getDireccionAsync('000001');
  //       localStorage.setItem('direccion', JSON.stringify(this.direccion));
  //       this.direccionSeleccionada = '000001';
  //     }
  //     else {
  //       var direccion1 = JSON.parse(localStorage.getItem('direccion'));
  //       this.direcciones = undefined;
  //       await this.loadDirecciones();
  //       this.direccion = direccion1;
  //       this.direccionSeleccionada = direccion1.id;
  //       if (this.getTotal() > 0 && this.direccionSeleccionada && this.pagoSeleccionado)
  //         this.isEnabled = true;
  //       else
  //         this.isEnabled = false;
  //     }
  //   });
  //   modal.present();
  // }

  // loadCuentas(event?) {
  //   this.subscriptionsCuentas = this.route.data.subscribe(
  //     (resolvedRouteData) => {
  //       const dsCuentas: Observable<Array<CuentasModel>> = this.firebaseService.getCuentasDataSource('slc');
  //       const storeCuentas: DataStore<Array<CuentasModel>> = this.firebaseService.getCuentasStore(dsCuentas);

  //       this.cuentasDataStore = storeCuentas;

  //       this.stateSubscriptionCuentas = merge(
  //         this.cuentasDataStore.state,
  //       ).subscribe(
  //         (state) => {
  //           state.forEach(element => {
  //             if (element != null) {
  //               element.cuenta = element.cuenta;
  //             }
  //           });
  //           if (this.cuentas)
  //             this.cuentas = this.cuentas.concat(state.concat(this.cuentasPagos)).sort(this.compareCuentas);
  //           else
  //             this.cuentas = state.concat(this.cuentasPagos);
  //         },
  //         (error) => console.log(error),
  //         () => console.log('stateSubscriptionCuentas completed')
  //       );
  //     },
  //     (error) => console.log(error)
  //   );
  // }

  async pagar() {
    this.modalCtrl.dismiss();
    if (!this.direccionSeleccionada) {
      this.direccionSeleccionada = '000001';
      this.direccion = this.direcciones.find(x => x.id == this.direccionSeleccionada);
      localStorage.setItem('direccion', JSON.stringify(this.direccion));
    }
    if (this.pagoSeleccionado == '1') {
      this.pedidoId = Math.random().toString(36).substring(2);
      const numero = { property1: '' };
      var pedido = await this.firebaseService.createPedido(this.sucursal.id, this.direccion, this.pago, this.cart, numero);
      this.pedidoId = pedido.id;
      var total = this.getTotal() + this.getDomicilio();
      this.cartService.clear();
      let modal = await this.modalCtrl.create({
        component: ConfirmacionPage,
        cssClass: 'cart-modal',
        componentProps: {
          'pedido': numero.property1
        }
      });
      modal.onWillDismiss().then(() => {
      });
      modal.present();
    }
    else if (this.pagoSeleccionado >= '2' && this.pagoSeleccionado <= '4') {

      let modal1 = await this.modalCtrl.create({
        component: DatosPage,
        cssClass: 'cart-modal',
        componentProps: {
          // 'pedido': this.cart,
          'pago': this.pagoSeleccionado
        }
      });
      modal1.onWillDismiss().then(async (data) => {
        var ok = false;
        const d = JSON.parse(data.data);
        const cancelar = d['cancel'];
        const pago = d['pago'];
        const token = d['token'];
        this.pedidoId = Math.random().toString(36).substring(2);
        var total = this.getTotal() + this.getDomicilio();

        if (!cancelar) {
          if (pago == '4') { // TD ó TC
            const token = d['token'];
            const numero = d['number'];
            const cvc = d['cvc'];
            const mes = d['exp_month'];
            const ano = d['exp_year'];
            const nombre = d['card_holder'];
            const cuotas = d['installments'];
            const result = await this.wompiService.get_token_card(numero, cvc, mes, ano, nombre);
            // Si da error
            if (result["status"] != undefined && result["status"] == 422) {

            }
            else {
              const token_card = result["id"];
              let postData = {
                "acceptance_token": token,
                "amount_in_cents": total * 100.0,
                "currency": "COP",
                "customer_email": d['email'],
                "payment_method": {
                  "type": d['type'],
                  "token": token_card,
                  "installments": cuotas
                },
                // "payment_source_id": 3891,
                "redirect_url": "https://mitienda.com.co/pago/resultado",
                "reference": this.pedidoId,
                "customer_data": {
                  "phone_number": d['phone'],
                  "full_name": d['name']
                },
                "shipping_address": {
                  "address_line_1": this.direccion.direccion,
                  "address_line_2": this.direccion.direccion,
                  "country": 'CO',
                  "region": 'Cundinamarca',
                  "city": 'La Calera',
                  "name": d['name'],
                  "phone_number": d['phone'],
                  "postal_code": '251201'
                }
              }

              var ret = await this.wompiService.transactions(postData);
              const transactionId = ret["id"];
              while (ret["status"] != undefined && (ret["status"] == 'PENDING')) {
                if (ret["status"] == 'PENDING') {
                  var ret = await this.wompiService.transactions_get(transactionId);
                }
                if (ret["status"] == 'DECLINED' || ret["status"] == 'ERROR' || ret["status"] == 'VOIDED') { ok = false; }
                else { ok = true; }
              }

            }
          }
          else
            if (pago == '3') { // PSE
              const persona = d['user_type'];
              const tipo = d['user_legal_id_type'];
              const numero = d['user_legal_id'];
              const institucion = d['financial_institution_code'];

              let postData = {
                "acceptance_token": token,
                "amount_in_cents": total * 100.0,
                "currency": "COP",
                "customer_email": d['email'],
                "payment_method": {
                  "type": d['type'],
                  "user_type": persona, // Tipo de persona, natural (0) o jurídica (1)
                  "user_legal_id_type": tipo, // Tipo de documento, CC o NIT
                  "user_legal_id": numero, // Número de documento
                  "financial_institution_code": institucion, // Código (`code`) de la institución financiera
                  "payment_description": "Pago a -Te Lo Llevo-, ref: " + this.pedidoId // Nombre de lo que se está pagando. Máximo 30 caracteres
                },
                // "payment_source_id": 3891,
                "redirect_url": "https://mitienda.com.co/pago/resultado",
                "reference": this.pedidoId,
                "customer_data": {
                  "phone_number": d['phone'],
                  "full_name": d['name']
                },
                "shipping_address": {
                  "address_line_1": this.direccion.direccion,
                  "address_line_2": this.direccion.direccion,
                  "country": 'CO',
                  "region": 'Cundinamarca',
                  "city": 'La Calera',
                  "name": d['name'],
                  "phone_number": d['phone'],
                  "postal_code": '251201'
                }
              }

              var ret = await this.wompiService.transactions(postData);
              const transactionId = ret["id"];
              while (ret["status"] != undefined && (ret["status"] == 'PENDING')) {
                if (ret["status"] == 'PENDING') {
                  var ret = await this.wompiService.transactions_get(transactionId);
                }
                if (ret["status"] == 'DECLINED' || ret["status"] == 'ERROR' || ret["status"] == 'VOIDED') { ok = false; }
                else { ok = true; }
              }
            }
            else
              if (pago == '2') { // Nequi
                const nequi = d['nequi'];
                var result = await this.wompiService.get_token_nequi(nequi);
                // Si da error
                if (result["status"] != undefined && result["status"] == 422) {

                }
                else {
                  const token_nequi = result["id"];
                  let postData = {
                    "acceptance_token": token,
                    "amount_in_cents": total * 100.0,
                    "currency": "COP",
                    "customer_email": d['email'],
                    "payment_method": {
                      "type": d['type'],
                      "token": token_nequi,
                      "phone_number": d['nequi']
                    },
                    // "payment_source_id": 3891,
                    "redirect_url": "https://mitienda.com.co/pago/resultado",
                    "reference": this.pedidoId,
                    "customer_data": {
                      "phone_number": d['phone'],
                      "full_name": d['name']
                    },
                    "shipping_address": {
                      "address_line_1": this.direccion.direccion,
                      "address_line_2": this.direccion.direccion,
                      "country": 'CO',
                      "region": 'Cundinamarca',
                      "city": 'La Calera',
                      "name": d['name'],
                      "phone_number": d['phone'],
                      "postal_code": '251201'
                    }
                  }

                  var ret = await this.wompiService.transactions(postData);
                  const transactionId = ret["id"];
                  while (ret["status"] != undefined && (ret["status"] == 'PENDING')) {
                    if (ret["status"] == 'PENDING') {
                      var ret = await this.wompiService.transactions_get(transactionId);
                    }
                    if (ret["status"] == 'DECLINED' || ret["status"] == 'ERROR' || ret["status"] == 'VOIDED') { ok = false; }
                    else { ok = true; }
                  }
                }
              }
          if (ok) {
            // Finaliza el pedido
            const numero = { property1: '' };
            var pedido = await this.firebaseService.createPedido(this.sucursal.id, this.direccion, this.pago, this.cart, numero);
            var total = this.getTotal() + this.getDomicilio();

            this.cartService.clear();
            let modal = await this.modalCtrl.create({
              component: ConfirmacionPage,
              cssClass: 'cart-modal',
              componentProps: {
                'pedido': numero.property1
              }
            });
            modal.onWillDismiss().then(() => {
            });
            modal.present();
          }
        }
      });
      modal1.present();
    }
    else if (this.pago.url && this.pago.url != '') {
      // const browser = this.iab.create(this.pago.url);
      // // browser.executeScript(...);
      // // browser.insertCSS(...);
      // browser.on('loadstop').subscribe(event => {
      //   browser.insertCSS({ code: "body{color: red;" });
      // });
      // browser.on('loadstart').subscribe((event) => {
      //   console.log('loadstart', event);
      //   // if (event.url === compareURL) {
      //   //   console.log('url', event.url);
      //   //   // this.navCtrl.setRoot(ConfirmationPage, {
      //   //   //   orderId: this.orderId
      //   //   // })
      //   //   browser.close();
      //   //   console.log('browser closed');
      //   // }
      // }, err => {
      //   console.error('error', err);
      // });
      // browser.on('loaderror').subscribe((event) => {
      //   alert('loaderror: ' + event.message);
      // });
      // browser.on('exit').subscribe((event) => {
      //   // alert('exit: ' + event);
      // });

      // browser.show();

    }
  }

}
