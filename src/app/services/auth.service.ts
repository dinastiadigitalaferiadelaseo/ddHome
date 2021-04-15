import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
// import { auth } from 'firebase/app';
// import { User } from 'firebase';



@Injectable()
export class AuthService {
  // public user: User;

  constructor( public afAuth: AngularFireAuth) { }
  
  async login(email: string, password: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
      
    };
    
  }

  async register(email: string, password: string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  }

  async lotgout(){
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
