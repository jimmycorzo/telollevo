import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SeleccionadoresModel, TitulosModel } from 'app/models/titulos.model';

export interface IProduct {
  id: number;
  tiendaId: string;
  tienda: string;
  productoId: string;
  producto: string;
  precioVlr: number;
  amount: number;
  imagen: string;
  observaciones: string;
  titulos: {};
}

export interface IPago {
  id: number;
  pago: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  data: IProduct[] = [
    { id: 0, tienda: '', tiendaId: '', productoId: '', producto: 'Pizza Salami', precioVlr: 8.99, amount: 0, imagen: '', observaciones: '', titulos: {} },
    { id: 1, tienda: '', tiendaId: '', productoId: '', producto: 'Pizza Classic', precioVlr: 5.49, amount: 0, imagen: '', observaciones: '', titulos: {} },
    { id: 2, tienda: '', tiendaId: '', productoId: '', producto: 'Sliced Bread', precioVlr: 4.99, amount: 0, imagen: '', observaciones: '', titulos: {} },
    { id: 3, tienda: '', tiendaId: '', productoId: '', producto: 'Salad', precioVlr: 6.99, amount: 0, imagen: '', observaciones: '', titulos: {} }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  clear() {
    for (let [index, p] of this.cart.entries()) {
      // console.log('p:', index, p);
      this.cartItemCount.next(this.cartItemCount.value - p.amount);
      p.amount = 0;
    }
    for (let index = this.cart.length - 1; index >= 0; index--) {
      this.cart.splice(index, 1);
    }
  }
}
