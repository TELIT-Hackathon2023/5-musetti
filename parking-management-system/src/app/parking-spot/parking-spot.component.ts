import { Component, Input } from '@angular/core';
import { ParkingSpot } from '../parking-spot.model';

@Component({
  selector: 'app-parking-spot',
  template: `
    <div [class.occupied]=true (click)="toggleOccupancy()">
      {{ "ano" }} 
    </div>
  `,
  styles: [
    `
      div {
        width: 50px;
        height: 50px;
        border: 1px solid #000;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .occupied {
        background-color: red;
        color: white;
      }
    `,
  ],
})
export class ParkingSpotComponent {
  @Input() spot: ParkingSpot | undefined;

  toggleOccupancy(): void {
    if (this.spot) {
      this.spot.isOccupied = !this.spot.isOccupied;
    }
  }
}
