import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './../modelo/usuario'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLoggedInPerfil: string = '';
  userLoggedIn: boolean = false;
  userLogged: Usuario;

  usuariosUrl = "https://jujuycelulares.store/tiendaCelulares/public/usuario/";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    let user = JSON.stringify({ usuario: username, password: password })
    return this.http.post(this.usuariosUrl + "ingreso", user)
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userLogged = new Usuario("", "", "", "", "", "");
    this.userLoggedIn = false;
  }
}