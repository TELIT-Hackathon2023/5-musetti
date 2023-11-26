import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {DbService} from "../db.service";

export interface ParkingSpot {
  id: string; // Assuming the ID is a string in Firebase
  occupied: boolean;
  occupant_id: string;
  occupant_registration: string;
  availability: string; // This will be parsed later
}
export interface Booking {
  userId: string;
  spotId: number;
  startDate: string; // You can use Date, string, or a timestamp based on your preference
  endDate: string;
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

  constructor(private dbService: DbService, private authService: AuthService) { }


  parkingSpots: ParkingSpot[] = [];
  selectedSpot: ParkingSpot | null = null;

  ngOnInit() {
    this.dbService.getParkingSpots().subscribe(spots => {
      this.parkingSpots = spots.map(spot => ({
        ...spot,
        parsedAvailability: this.dbService.parseAvailability(spot.availability)
      }));
    });
  }



  onSelectSpot(spot: ParkingSpot): void {
    this.selectedSpot = spot;
  }


}
