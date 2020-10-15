import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authSerivce: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authSerivce.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
     return  this.authSerivce.loggedIn();
  }

  logout() {
    const token = localStorage.removeItem('token');
    this.alertify.message('Logged out');
 }

}
