import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password)
      .then(result => {
        // Handle successful login, like redirecting to a dashboard
      })
      .catch(error => {
        // Handle login errors, such as showing an error message
      });
  }
}
