import { Component, OnInit } from '@angular/core';

import { Producto } from './../../modelo/producto';
import { ProductoService } from './../../servicios/producto.service';
import { from } from 'rxjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  productosmostrar = [];

  filtro = "";
  marcas = ["motorola", "samsung", "xiaomi", "huawei", "lg"];

  constructor(private productoServicio: ProductoService) {
    this.showProductos();
  }

  showProductos() {
    this.productoServicio.getProductos()
      .subscribe(result => {
        this.productos = JSON.parse(result.productos);
        this.productosmostrar = this.productos;
        console.log(this.productos);
      },
      error => {
        console.log(JSON.stringify(error));
        
      });
  }

  filtroMarca(marca){

    var indice = this.marcas.indexOf(marca.srcElement.value);
    if(indice>-1){
      this.marcas.splice(indice,1)
    }

    if(marca.target.checked){
      this.marcas.push(marca.srcElement.value);
    }
  }

  filtrar(busqueda){

    const result = [];
    for (const prod of this.productos) {

      for (const marca of this.marcas) {

        if (marca.toLowerCase() == prod.marca.toLowerCase()) {

          if (prod.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
            result.push(prod);
          }
        }

      }                 
    }

    this.productosmostrar = result;
  }

  ngOnInit() {
  }

}