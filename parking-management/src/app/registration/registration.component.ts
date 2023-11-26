import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  full_name = ''
  email = '';
  password = '';
  license_plate = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.full_name, this.email, this.password, this.license_plate)
      .then(result => {
        this.router.navigate(['']).then(r => {});
      })
      .catch(error => {
        // Handle errors, such as showing an error message
      });
  }
}
