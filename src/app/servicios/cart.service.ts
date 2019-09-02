import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Producto } from './../modelo/producto';
import { Carrito } from './../modelo/carrito';
import { Item } from './../modelo/carrito';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Carrito;
  private itemsCart: Item[] = [];
  private subject1: BehaviorSubject<Item[]> = new BehaviorSubject([]);

  constructor() {
    this.subject1.subscribe(data => this.itemsCart = data);
  }

  addCarrito(producto: Producto, cant: number) {
    var subtotal = producto.precio * cant;
    var item = new Item(producto, cant, subtotal);
    this.subject1.next([...this.itemsCart, item]);
  }

  removeCarrito(index: number) {
    if (this.itemsCart[index].cantidad > 1) {
      this.itemsCart[index].cantidad--;
    } else {
      this.itemsCart.splice(index, 1);
      console.log(this.itemsCart);
    }
  }

  getCarrito(): Observable<Item[]> {
    return this.subject1;
  }

  getTotal() {
    return this.itemsCart.reduce((total, item: Item) => { return total + item.subtotal; }, 0);
  }

}
