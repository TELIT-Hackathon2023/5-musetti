import { Component } from '@angular/core';

interface Notification {
  id: number;
  subject: string;
  date: string;
  time: string;

}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  notifications: Notification[] = [
    {id: 1, subject: 'Booking ends soon!', date: '2023-11-26', time: '14:00'},
    {id: 2, subject: 'Booked a parking spot!', date: '2023-11-27', time: '15:00'},
  ];

  protected readonly Notification = Notification;
}
