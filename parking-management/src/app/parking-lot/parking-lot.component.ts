import { Component } from '@angular/core';

export interface ParkingSpot {
  id: number;
  occupied: boolean;
  email: string;
  registration_num: string;
}


@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})

export class ParkingLotComponent {

  parkingSpots: ParkingSpot[] = [];
  selectedSpot: ParkingSpot | null = null;

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

}
