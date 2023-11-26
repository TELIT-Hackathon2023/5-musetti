import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

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

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.full_name, this.email, this.password, this.license_plate)
      .then(result => {
        // Handle success, perhaps redirect or show a success message
      })
      .catch(error => {
        // Handle errors, such as showing an error message
      });
  }
}
