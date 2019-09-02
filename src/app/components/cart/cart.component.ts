import { Component, OnInit } from '@angular/core';
import { Producto } from './../../modelo/producto';
import { Item } from './../../modelo/carrito';
import { CartService } from'./../../servicios/cart.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carrito: Array<Item> = []; 
  total: number;

  constructor( private carritoService:CartService) { }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      this.carrito = data;
      this.total = this.carritoService.getTotal();
    },
      error => alert(error));
  }

  removeItem(item:Item){    
    var index=this.carrito.indexOf(item,0);
    
    this.carritoService.removeCarrito(index);
  }
}
