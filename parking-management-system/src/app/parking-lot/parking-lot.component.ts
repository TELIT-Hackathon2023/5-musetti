import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../parking.service';
import { ParkingSpot } from '../parking-spot.model';

@Component({
  selector: 'app-parking-lot',
  template: `
    <div>
      <app-parking-spot
        *ngFor="let spot of parkingSpots"
        [spot]="spot"
      ></app-parking-spot>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class ParkingLotComponent implements OnInit {
  parkingSpots: ParkingSpot[] = [];

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.parkingSpots = this.parkingService.getParkingSpots();
  }
}
