import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regisztal',
  templateUrl: './regisztal.component.html',
  styleUrls: ['./regisztal.component.css']
})
export class RegisztalComponent {

  name:any = ""
  email:any = ""
  password:string = ""
  password_confirmation:string = ""

  constructor(private auth:AuthService, private router:Router, private http:HttpClient) {}
 
  register() {
    if (!this.email) {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be az email címet"
      })
      return
    }

    if (!this.password) {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a jelszót"
      })
      return
    }

    if (!this.password_confirmation) {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a megerősítés jelszót"
      })
      return
    }

    if (!this.name) {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a Név"
      })
      return
    }
/*
    this.auth.register(this.email, this.password).then(
      (res:any) => {
        Swal.fire({
          icon: "success",
          title: "Sikeres regisztráció"
        })
        this.router.navigate(['/belepes'])
      }, (err:any) => {
        Swal.fire({
          icon: "error",
          title: err.message
        })
        this.router.navigate(['/regisztal'])
      }
    )*/

    let regist = [
      this.name,
      this.email,
      this.password,
      this.password_confirmation
    ]
    this.http.post("http://127.0.0.1:8000/api/register", regist).subscribe(
      res => {
        console.log("Registered successfully: ", res)
      }
    )

    this.name = ""
    this.email = ""
    this.password = ""
    this.password_confirmation = ""
  }
}
