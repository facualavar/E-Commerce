import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './../../../modelo/usuario';
import { AuthenticationService } from './../../../servicios/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: Usuario = new Usuario("","","","","","");
  returnUrl: string;
  ingresoCorrecto: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
        this.authenticationService.login(this.userform.usuario, this.userform.password)
            .subscribe(
                result => {
                      var user = JSON.parse(result.usuario);
                      console.log(user);
                      if (user.usuario !=null){
                          //vbles para mostrar-ocultar cosas en el header
                          this.ingresoCorrecto = true;
                          this.authenticationService.userLoggedIn = true;
                          this.authenticationService.userLogged = user;
                          this.authenticationService.userLoggedInPerfil = this.authenticationService.userLogged.perfil;
                          //localstorage usado para mostrar o no un componente
                          localStorage.setItem('currentUser', JSON.stringify(user));
                          this.router.navigateByUrl('/home');
                      } else {
                        this.ingresoCorrecto = false;
                      }
                },
                error => {
                    console.log("error en el servicio");
                    console.log(JSON.stringify(error));
                });
    }
}