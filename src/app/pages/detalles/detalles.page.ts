import { Component, OnInit, HostBinding, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MisProductosModel } from 'app/models/misproductos.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { SeleccionadoresModel } from 'app/models/titulos.model';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: [
    './styles/detalles.page.scss',
    './styles/detalles.responsive.scss',
    './styles/detalles.shell.scss',
    './styles/detalles.ios.scss',
    './styles/detalles.md.scss',
  ],
})

export class DetallesPage implements OnInit {
  // @Input() producto: MisProductosModel;
  cart: MisProductosModel[] = [];

  cerrada: boolean;
  proximamente: boolean;
  abre: string;
  cierra: string;
  seleccion: string;
  producto: MisProductosModel;

  @ViewChild('detalles', { static: false, read: ElementRef }) fab: ElementRef;

  subscriptions: Subscription;

  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.producto && this.producto.isShell) ? true : false;
  }

  constructor(
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    // private firebaseService: FirebaseService,
    // private carritoService: CarritoService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (this.abre != null && this.cierra != null) {
          const hora = String("0" + new Date().getHours()).slice(-2) + ':' + String("0" + new Date().getMinutes()).slice(-2);
          this.cerrada = !(hora >= this.abre && hora <= this.cierra);
        }
        else
          this.cerrada = true;
      }
    );
    // console.log('Producto:', this.producto);

  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precioVlr * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  checkout() {

  }

  select(producto, sel, tit) {
    var adicionalRestar = 0;
    var adicional = 0;
    producto.titulos.forEach(titulo => {
      (titulo.seleccionadores as Array<SeleccionadoresModel>).forEach(element => {
        if (element.seleccionado && element.name == sel.name) {
          adicionalRestar = element.adicional;
          element.seleccionado = false;
        }
      });
      (titulo.seleccionadores as Array<SeleccionadoresModel>).forEach(element => {
        if (element.id == sel.value) {
          adicional = element.adicional;
          element.seleccionado = true;
          element.name = sel.name;
          tit.seleccionado = element.id;
        }
      });
    });
    producto.precioVlr = producto.precioVlr + (adicional - adicionalRestar);
  }
}
