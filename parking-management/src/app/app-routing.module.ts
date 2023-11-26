import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ParkingLotComponent} from "./parking-lot/parking-lot.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "@angular/fire/auth-guard";

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: '', component: ParkingLotComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
