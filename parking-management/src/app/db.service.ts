import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AvailabilityPeriod, Booking, ParkingSpot} from "./parking-lot/parking-lot.component";
import {map, Observable} from "rxjs";

export interface TimeSlot {
  startTime: Date;
  endTime: Date;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private firestore: AngularFirestore) {}


  // Save user data
  saveUserData(userId: string, data: any) {
    return this.firestore.collection('users').doc(userId).set(data);
  }

  // Retrieve user data
  getUserData(userId: string) {
    return this.firestore.collection('users').doc(userId).valueChanges();
  }

  // Update user data
  updateUserData(userId: string, data: any) {
    return this.firestore.collection('users').doc(userId).update(data);
  }

  // getParkingSpots(): Observable<ParkingSpot[]> {
  //   return this.firestore.collection<ParkingSpot>('parking-spots').snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as ParkingSpot;
  //       const id = a.payload.doc.id;
  //       return { ...data,id };
  //     }))
  //   );
  // }

  parseAvailability(availabilityString: string): AvailabilityPeriod[] {
    if(availabilityString === undefined){
      return [];
    }
    try {
      const availabilityArray = JSON.parse(availabilityString);
      const aa = availabilityArray.map((period: any) => ({
        start: new Date(period.start),
        end: new Date(period.end),
        email: period.email,
        registration_num: period.registration_num
      }));

      return aa;
    } catch (e) {
      console.error('Error parsing availability:', e);
      return [];
    }
  }







}
