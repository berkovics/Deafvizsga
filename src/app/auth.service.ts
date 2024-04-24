import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth, private router:Router) {}
  
  belepes(email:string, password:string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  register(email:string, password:string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
  }

  logout() {
    return [
      this.fireAuth.signOut().then(
        () => {
          localStorage.removeItem('token')
          this.router.navigate(['/belepes'])
        }
      ),
      this.fireAuth.currentUser.then(user => {
        user?.delete()
      })
    ]
  }

  forgotPassword(email:string) {
    return this.fireAuth.sendPasswordResetEmail(email)
  }

  signInGoogle(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider)
  } 

  deleteAuth(){
    return this.fireAuth.currentUser.then(user => {
      user?.delete()
    })
  }
}
