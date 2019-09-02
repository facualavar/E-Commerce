import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient){

  }

  usuariosUrl = "https://localhost/tiendaCelulares/public/usuario/";

  getUsuarios(): Observable<any> {
    return this.http.get(this.usuariosUrl);
  }

  nuevoUsuario(usuario: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    let body = JSON.stringify(usuario);
    console.log("entro service create");
    return this.http.post( this.usuariosUrl+'new', body, options);
  }

  eliminarUsuario(id): Observable<any> {
    return this.http.delete(this.usuariosUrl + id);
  }

  editarUsuario(usuario: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    let body = JSON.stringify(usuario);
    console.log("entro service update");
    return this.http.post( this.usuariosUrl + usuario.id+'/edit', body, options);
  }
}