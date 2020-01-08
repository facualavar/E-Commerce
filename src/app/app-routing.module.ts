import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ProductosComponent } from './components/productos/productos/productos.component';
import { ProductoComponent } from './components/productos/producto/producto.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { StockProductosComponent } from './components/stock-productos/stock-productos.component';
import { LoginComponent } from './components/cuenta/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { RegistroComponent } from './components/cuenta/registro/registro.component';
import { ProductoNuevoComponent } from './components/producto-nuevo/producto-nuevo.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/partials/contact/contact.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prods', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'stock', component: StockProductosComponent },
  { path: 'user', component: UsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'cart', component: CartComponent },
  { path: 'nuevoprod', component: ProductoNuevoComponent },
  { path: 'contact', component: ContactComponent },  
  { path: 'about', component: AboutComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
