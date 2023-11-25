import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.email, this.password)
      .then(result => {
        // Handle success, perhaps redirect or show a success message
      })
      .catch(error => {
        // Handle errors, such as showing an error message
      });
  }
}
