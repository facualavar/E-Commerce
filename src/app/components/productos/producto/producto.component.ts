import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Producto } from './../../../modelo/producto';
import { ProductoService } from './../../../servicios/producto.service'
import { CartService } from './../../../servicios/cart.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService]
})
export class ProductoComponent implements OnInit {

  producto: Producto = new Producto("", "", "", "", "", "", "", 0, "", 0);
  imgPrincipal: string;
  index: number = 1;
  agregado: boolean= false;

  constructor( private carritoService: CartService, private prodServicio: ProductoService, private rutaActiva: ActivatedRoute) {
    
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.index = params.id;
      }
    );

    this.prodServicio.getUnProductos(this.index)
      .subscribe(result => {
        this.producto = JSON.parse(result.producto);
        console.log(this.producto);
        
        this.imgPrincipal = this.producto.img;
      },
      error => {
        console.log(JSON.stringify(error));
        
      });   
  }

  agregarCarrito(pro: Producto, cant: number) {    
    this.carritoService.addCarrito(pro, cant);
    this.agregado= true;    
  }

  ngOnInit() {
    
  }
}