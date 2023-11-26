import {Component, OnInit} from '@angular/core';
import {updateProfile} from "@angular/fire/auth";
import {AuthService} from "../auth.service";
import {DbService} from "../db.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any = {};

  constructor(
    private authService: AuthService,
    private userDataService: DbService
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(user => {
      if (user) {
        this.userDataService.getUserData(user.uid).subscribe(userData => {
          this.userProfile = userData;
        });
      }
    });
  }

  updateProfile() {
    this.authService.isLoggedIn.subscribe(user => {
      if (user) {
        this.userDataService.saveUserData(user.uid, this.userProfile).then(() => {
          // Handle successful update
        }).catch(error => {
          // Handle error
        });
      }
    });
  }
}
