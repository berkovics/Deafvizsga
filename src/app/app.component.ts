import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deaf';

  constructor(private auth:AuthService, private router:Router){}

  menuVariable:boolean = false;

  openMenu(){
    this.menuVariable =! this.menuVariable
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logOut() {
    this.auth.logout().then(
      () => {
        localStorage.removeItem('token')
        this.router.navigate(['/belepes'])
      }
    )
  }
}
