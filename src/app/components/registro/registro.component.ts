import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../modelo/usuario'
import { UsuarioService } from './../../servicios/usuario.service'
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioNuevo: Usuario = new Usuario("", "", "", "", "", "");
  returnUrl: string;

  pass: string = "";
  mismapass: boolean = false;

  constructor(
    private usuarioServicio: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  verficarpass() {
    if (this.pass == this.usuarioNuevo.password) {
      this.mismapass = true;
    }
    else {
      this.mismapass = false;
    }
  }

  nuevoUsu() {
    this.usuarioNuevo.perfil = "cliente";

    this.usuarioServicio.nuevoUsuario(this.usuarioNuevo).subscribe(
      result => {
        console.log(this.usuarioNuevo);
        this.router.navigateByUrl('/home');
        return true;
      },
      error => {
        console.log(JSON.stringify(error));
        return false;
      }
    )
    console.log(this.usuarioNuevo);
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}