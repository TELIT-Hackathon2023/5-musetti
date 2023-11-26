import { Component } from '@angular/core';

interface Booking {
  id: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;

}

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {

  bookings: Booking[] = [
    { id: '1', startDate: '2023-11-26', startTime: '10:00' , endDate: '2023-11-26', endTime: '18:00' },
    { id: '2', startDate: '2023-11-27', startTime: '8:00' , endDate: '2023-11-27', endTime: '16:00' },

  ];
}
