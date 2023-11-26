
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { User } from 'firebase/auth';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthInstances} from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserId: string = "";




  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {


  }

  // Save user data
  saveUserData(userId: string, data: any) {
    return this.firestore.collection('users').doc(userId).set(data);
  }



  get isLoggedIn(): Observable<User | null> {

    return this.afAuth.authState as Observable<User | null>;
  }

  // Example of a login method
  async login(email: string, password: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    if (result.user && result.user.emailVerified) {
      // User is logged in and email is verified
      this.currentUserId = result.user.uid;
      console.log(this.currentUserId)
      return result;
    } else {
      // Handle unverified email
      throw new Error('Email is not verified');
    }
  }

  async logout() {
    this.currentUserId = "";
    await this.afAuth.signOut();
  }

  async register(full_name: string, email: string, password: string, license_plate: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    await this.sendEmailVerification();

    if(result.user){
      this.currentUserId = result.user.uid;
      await this.saveUserData(result.user.uid, {
        full_name: full_name,
        email: email,
        license_plate: license_plate
      });
    }


    return result;
  }

  async sendEmailVerification() {
    return (await this.afAuth.currentUser)?.sendEmailVerification();
  }

  // Add more methods for register, logout, etc.
}
