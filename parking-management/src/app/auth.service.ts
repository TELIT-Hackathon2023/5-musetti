
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { User } from 'firebase/auth';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private afAuth: AngularFireAuth) { }

  get isLoggedIn(): Observable<User | null> {
    return this.afAuth.authState as Observable<User | null>;
  }

  // Example of a login method
  async login(email: string, password: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    if (result.user && result.user.emailVerified) {
      // User is logged in and email is verified
      return result;
    } else {
      // Handle unverified email
      throw new Error('Email is not verified');
    }
  }

  async logout() {
    await this.afAuth.signOut();
  }

  async register(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    await this.sendEmailVerification();
    return result;
  }

  async sendEmailVerification() {
    return (await this.afAuth.currentUser)?.sendEmailVerification();
  }

  // Add more methods for register, logout, etc.
}
