import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../auth.service";
import {LoginComponent} from "../login/login.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit, OnDestroy{

  private authSubscription?: Subscription;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  onLoginClick(): void {
    // Additional logic here if needed
    this.router.navigate(['/login']).then(r => {});
  }

  async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['']).then(r => {});
    } catch (error) {
      // Handle errors, such as displaying an error message
    }
  }

  onRegisterClick(): void {
    // Additional logic here if needed
    this.router.navigate(['/register']).then(r => {});
  }


  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }


}
