import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }




  login() {
    this.authService.login(this.email, this.password)
      .then(result => {
        this.router.navigate(['']).then(r => {});
      })
      .catch(error => {
        // Handle login errors, such as showing an error message
      });
  }
}
