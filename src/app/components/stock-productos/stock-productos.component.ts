import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stock-productos',
  templateUrl: './stock-productos.component.html',
  styleUrls: ['./stock-productos.component.css']
})
export class StockProductosComponent implements OnInit {

  productos: Producto[];
  productoSelected: Producto = new Producto("", "", "", "", "", "", "", 0, "", 0);

  trueimg:Boolean = false;
  loader:Boolean = false;
  myimg:string;
  final:Boolean = true;
  msn: string ="";
  
  constructor(private productoServicio: ProductoService, private router: Router) {

    this.showProductos();
  }

  showProductos() {
    this.productoServicio.getProductos()
      .subscribe(result => {
        this.productos = JSON.parse(result.productos);
        console.log(this.productos);
      },
      error => {
        console.log(JSON.stringify(error));
        
      });
  }


  borrarProd(id) {
    this.productoServicio.eliminarProducto(id).subscribe(
      result => {
        this.showProductos();
      },
      error => {
        console.log(JSON.stringify(error));
      }
    )
  }

  nuevo(){
    this.router.navigateByUrl('/nuevoprod');
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

  editar(pro: Producto) {
    this.productoSelected = pro;
  }

  editarProd(){
    console.log(this.productoSelected);
    console.log("esto es el editar");
    
    
    this.productoServicio.editarProducto(this.productoSelected).subscribe(
      result => {
        this.showProductos();
        return true;
      },
      error => {
        console.log(JSON.stringify(error));
        return false;
      }
    )
  }

  ngOnInit() {
    this.msn = "Subir una imagen no mayor de 10MB";
  }

}
