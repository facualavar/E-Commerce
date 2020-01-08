import { Component, OnInit } from '@angular/core';
import { Producto } from './../../modelo/producto';
import { ProductoService } from './../../servicios/producto.service';

@Component({
  selector: 'app-producto-nuevo',
  templateUrl: './producto-nuevo.component.html',
  styleUrls: ['./producto-nuevo.component.css']
})
export class ProductoNuevoComponent implements OnInit {

  productoNuevo: Producto = new Producto("","","","","","","", 0, "", 0);

  guardado:boolean =false;
  
  trueimg:Boolean = false;
  loader:Boolean = false;
  myimg:string;
  msn: string ="";

  trueimg2:Boolean = false;
  loader2:Boolean = false;
  myimg2:string;
  msn2: string ="";

  trueimg3:Boolean = false;
  loader3:Boolean = false;
  myimg3:string;
  msn3: string ="";


  constructor(private productoServicio: ProductoService) { }

  ngOnInit() {
  }

  limpiar(){
    this.productoNuevo = new Producto("","","","","","","", 0, "", 0);
  }


  nuevoProd() {
    
    this.productoNuevo.img = this.myimg;
    this.productoNuevo.img2 = this.myimg2;
    
    this.productoNuevo.img3 = this.myimg3;
    this.productoServicio.nuevoProducto(this.productoNuevo).subscribe(
      result => {
        console.log(this.productoNuevo);
        
        this.guardado = true;
        this.limpiar();
        return true;
      },
      error => {
        console.log(JSON.stringify(error));
        return false;
      }
    )
    console.log(this.productoNuevo);
  }

  subiendoando(ev){
    let img: any = ev.target;
    if(img.files.length > 0){
      this.loader = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.productoServicio.subirImagen(form).subscribe(
        result => {
          this.loader = false;
          if(result.status){
            this.trueimg = true;
            this.myimg = "assets/img/" + result.generatedName;
            this.msn = "Imagen subida con exito"
          }
        },
        error => {
          this.loader = false;
          alert('Imagen supera el tamaño permitido');
          
        }
      );
    }
  }

  subiendoando2(ev){
    let img: any = ev.target;
    if(img.files.length > 0){
      this.loader2 = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.productoServicio.subirImagen(form).subscribe(
        result => {
          this.loader2 = false;
          if(result.status){
            this.trueimg2 = true;
            this.myimg2 = "assets/img/" + result.generatedName;
            this.msn2 = "Imagen subida con exito"
          }
        },
        error => {
          this.loader2 = false;
          alert('Imagen supera el tamaño permitido');
          
        }
      );
    }
  }

  subiendoando3(ev){
    let img: any = ev.target;
    if(img.files.length > 0){
      this.loader3 = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.productoServicio.subirImagen(form).subscribe(
        result => {
          this.loader3 = false;
          if(result.status){
            this.trueimg3 = true;
            this.myimg3 = "assets/img/" + result.generatedName;
            this.msn3 = "Imagen subida con exito"
          }
        },
        error => {
          this.loader3 = false;
          alert('Imagen supera el tamaño permitido');
          
        }
      );
    }
  }

}
