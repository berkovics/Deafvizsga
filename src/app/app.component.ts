import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deaf';

  constructor(private auth:AuthService, private router:Router, private config:ConfigService){}

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

    //this.config.postLogout()
  }
}
