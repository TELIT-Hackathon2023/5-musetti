import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {DbService} from "../db.service";



export interface ParkingSpot {
  id: number;
  occupied: boolean;
  email: string;
  registration_num: string;
}
export interface Booking {
  userId: string;
  spotId: number;
  startDate: string;
  startTime: string
  endDate: string;
  endTime: string;
  licensePlate: string;
}

export interface AvailabilityPeriod {
  start: Date;
  end: Date;
  email: string;
  registration_num: string;
  parsedAvailability?: AvailabilityPeriod[];
}


@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})

export class ParkingLotComponent {

  constructor(private dbService: DbService, private authService: AuthService, private router: Router) { }


  parkingSpots: ParkingSpot[] = [];
  selectedSpot: ParkingSpot | null = null;

  // ngOnInit() {
  //   this.dbService.getParkingSpots().subscribe(spots => {
  //     this.parkingSpots = spots.map(spot => ({
  //       ...spot,
  //       parsedAvailability: this.dbService.parseAvailability(spot.availability)
  //     }));
  //   });
  // }

  ngOnInit() {
    for (let i = 1; i <= 12; i++) {
      this.parkingSpots.push({
        id: i,
        occupied: Math.random() < 0.5,
        email: "example@mail.com",
        registration_num: "ke12345"
      });
    }
  }



  onSelectSpot(spot: ParkingSpot): void {
    this.selectedSpot = spot;
  }

  onClickSpot(spot: ParkingSpot): void {
    console.log(spot)
    this.router.navigate(['/booking', spot.id]).then(r => {

    }); // Navigate to the booking page with spot ID
  }


}
