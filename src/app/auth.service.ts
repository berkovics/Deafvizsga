import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth) {}
  
  belepes(email:string, password:string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  register(email:string, password:string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
  }

  logout() {
    return this.fireAuth.signOut()
  }

  forgotPassword(email:string) {
    return this.fireAuth.sendPasswordResetEmail(email)
  }

  signInGoogle(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider)
  } 
}
