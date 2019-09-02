import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../servicios/authentication.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.authenticationService.logout();
  }

}
