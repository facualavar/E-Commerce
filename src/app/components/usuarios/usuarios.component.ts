import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../modelo/usuario';
import { UsuarioService } from './../../servicios/usuario.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  usuarios: Usuario[];
  usuarioSelected: Usuario = new Usuario("", "", "", "", "", "");
  usuarioNuevo: Usuario = new Usuario("", "", "", "", "", "");

  constructor( private usuarioServicio: UsuarioService) {
    this.showUsuarios();
   }



   showUsuarios() {
    this.usuarioServicio.getUsuarios()
      .subscribe(result => {
        this.usuarios = JSON.parse(result.usuarios);
        console.log(this.usuarios);
      },
      error => {
        console.log(JSON.stringify(error));
        
      });
  }


  borrarUsu(id) {
    this.usuarioServicio.eliminarUsuario(id).subscribe(
      result => {
        this.showUsuarios();
      },
      error => {
        console.log(JSON.stringify(error));
      }
    )
  }

  nuevo(){
    this.usuarioNuevo = new Usuario("", "", "", "", "", "");
  }


  nuevoUsu() {
    
    this.usuarioServicio.nuevoUsuario(this.usuarioNuevo).subscribe(
      result => {
        console.log(this.usuarioNuevo);
        
        this.showUsuarios();
        return true;
      },
      error => {
        console.log(JSON.stringify(error));
        return false;
      }
    )
    console.log(this.usuarioNuevo);
  }

  editar(usu: Usuario) {
    this.usuarioSelected = usu;
  }

  editarUsu(){
    console.log(this.usuarioSelected);
    console.log("esto es el editar");
    
    
    this.usuarioServicio.editarUsuario(this.usuarioSelected).subscribe(
      result => {
        this.showUsuarios();
        return true;
      },
      error => {
        console.log(JSON.stringify(error));
        return false;
      }
    )
  }

  ngOnInit() {
  }

}
