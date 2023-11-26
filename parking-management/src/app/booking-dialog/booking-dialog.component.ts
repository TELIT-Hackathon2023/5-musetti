import { Component } from '@angular/core';
import {DbService} from "../db.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})

export class BookingDialogComponent {

  spotId: string | null | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  startTime: any;
  endTime: any;

  constructor(private route: ActivatedRoute, private dbService: DbService) { }

  ngOnInit() {
    this.spotId = this.route.snapshot.paramMap.get('id'); // Get the spot ID from the route
  }

  onBookSpot() {
    // Logic to book the spot using dbService
  }


}
