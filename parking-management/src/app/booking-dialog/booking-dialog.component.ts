import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})

export class BookingDialogComponent {
  startTime: number = 8; // Example start time
  endTime: number = 10; // Example end time

  constructor(public dialogRef: MatDialogRef<BookingDialogComponent>) {}

  formatLabel(value: number) {
    return value + 'h';
  }

  onSliderChange(event: any) {
    // Handle slider value change
    this.endTime = event.value;
  }

  get selectedPeriod() {
    return { start: this.startTime, end: this.endTime };
  }
}
