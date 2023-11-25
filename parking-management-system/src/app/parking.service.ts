import { Injectable } from '@angular/core';
import { ParkingSpot } from './parking-spot.model';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private parkingSpots: ParkingSpot[] = [
    { id: 1, name: 'A1', isOccupied: false },
    { id: 2, name: 'A2', isOccupied: false },
    // Add more parking spots as needed
  ];

  getParkingSpots(): ParkingSpot[] {
    return this.parkingSpots;
  }

  occupySpot(id: number): void {
    const spot = this.parkingSpots.find((p) => p.id === id);
    if (spot) {
      spot.isOccupied = true;
    }
  }

  vacateSpot(id: number): void {
    const spot = this.parkingSpots.find((p) => p.id === id);
    if (spot) {
      spot.isOccupied = false;
    }
  }
}
