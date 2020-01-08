import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './servicios/authentication.service';
import { ProductoService } from './servicios/producto.service';
import { UsuarioService } from './servicios/usuario.service'
import { CartService } from './servicios/cart.service'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav.component';
import { FooterComponent } from './components/layout/footer.component';
import { HeaderComponent } from './components/layout/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos/productos.component';
import { CartComponent } from './components/cart/cart.component';
import { from } from 'rxjs';
import { ProductoComponent } from './components/productos/producto/producto.component';
import { ProductoThumbailComponent } from './components/productos/producto-thumbail/producto-thumbail.component';
import { LoginComponent } from './components/cuenta/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { StockProductosComponent } from './components/stock-productos/stock-productos.component';
import { RegistroComponent } from './components/cuenta/registro/registro.component';
import { MarcasComponent } from './components/partials/marcas/marcas.component';
import { ProductoNuevoComponent } from './components/producto-nuevo/producto-nuevo.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/partials/contact/contact.component';
import { LoginSocialComponent } from './components/cuenta/login-social/login-social.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { ProductosCarouselComponent } from './components/partials/productos-carousel/productos-carousel.component';
import { BreadcrumbComponent } from './components/partials/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProductosComponent,
    CartComponent,
    ProductoComponent,
    ProductoThumbailComponent,
    LoginComponent,
    UsuariosComponent,
    StockProductosComponent,
    RegistroComponent,
    MarcasComponent,
    ProductoNuevoComponent,
    AboutComponent,
    ContactComponent,
    LoginSocialComponent,
    SliderComponent,
    ProductosCarouselComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, ProductoService, CartService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
