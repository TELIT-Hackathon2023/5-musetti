import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ParkingLotComponent} from "./parking-lot/parking-lot.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "@angular/fire/auth-guard";
import {BookingDialogComponent} from "./booking-dialog/booking-dialog.component";
import {MyBookingsComponent} from "./my-bookings/my-bookings.component";
import {NotificationsComponent} from "./notifications/notifications.component";

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: '', component: ParkingLotComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notifications/:uid', component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'bookings/:uid', component: MyBookingsComponent, canActivate: [AuthGuard] },
  { path: 'booking/:id', component: BookingDialogComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
