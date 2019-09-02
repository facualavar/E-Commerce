import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  
  productosUrl = "https://jujuycelulares.store/tiendaCelulares/public/producto/";

  url:string = "https://jujuycelulares.store/celuSite/subirimg.php";

  getProductos(): Observable<any> {
    return this.http.get(this.productosUrl);
  }

  getUnProductos(id): Observable<any> {
    return this.http.get(this.productosUrl + "buscar/" + id);
  }

  nuevoProducto(producto: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    let body = JSON.stringify(producto);
    console.log("entro service create");
    return this.http.post( this.productosUrl+'new', body, options);
  }

  eliminarProducto(id): Observable<any> {
    return this.http.delete(this.productosUrl + id);
  }

  editarProducto(producto: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    let body = JSON.stringify(producto);
    console.log("entro service update");
    return this.http.post( this.productosUrl + producto.id+'/edit', body, options);
  }

  subirImagen(datos:any):Observable<any>{
    return this.http.post(this.url, datos);
  }
}