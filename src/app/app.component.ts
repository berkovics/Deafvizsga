import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deaf';

  constructor(private auth:AuthService, private http:HttpClient){}

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logOut() {
    this.auth.logout()

    this.http.post<any>("http://127.0.0.1:8000/api/logout", {}).subscribe(
      () => {
        console.log("Kilépés")
      }
    )
  }
}
