import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-belepes',
  templateUrl: './belepes.component.html',
  styleUrls: ['./belepes.component.css']
})
export class BelepesComponent {
 
  email:string = ""
  password:string = ""

  constructor(private auth:AuthService, private router:Router, private http:HttpClient) {}
 
  login() {
    if (this.email == "") {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be az email címet"
      })
      return
    }

    if (this.password == "") {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a jelszót"
      })
      return
    }

    this.auth.belepes(this.email, this.password).then(
      (res:any) => {
        localStorage.setItem('token', 'true')
        this.router.navigate(['/home'])
        Swal.fire({
          icon: "success",
          title: "Welcome"
        })
      }, (err:any) => {
        Swal.fire({
          icon: "error",
          title: err.message
        })
        this.router.navigate(['/belepes'])
      }
    )

    const login = {
      email: this.email,
      password: this.password
    }
    this.http.post("http://127.0.0.1:8000/api/login", login).subscribe(
      res => {
        console.log("Login successfully: ", res)
      }
    )

    this.email = ""
    this.password = ""
  }

  signInWithGoogle(){
    this.auth.signInGoogle().then(
      (res:any) => {
        this.router.navigate(['/home'])
        localStorage.setItem('token', JSON.stringify(res.user?.uid))
        Swal.fire({
          icon: "success",
          title: "Welcome"
        })
      }, (err:any) => {
        Swal.fire({
          icon: "error",
          title: err.message
        })
      }
    )
  }
}
