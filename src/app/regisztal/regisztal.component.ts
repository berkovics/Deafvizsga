import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-regisztal',
  templateUrl: './regisztal.component.html',
  styleUrls: ['./regisztal.component.css']
})
export class RegisztalComponent {

  name:any = ""
  phonenumber:any = ""
  address:any = ""
  email:any = ""
  password:string = ""

  constructor(private auth:AuthService, private router:Router, private config:ConfigService) {}
 
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

    if (!this.name) {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a Név"
      })
      return
    }

    if (!this.phonenumber) {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a Telefonszám"
      })
      return
    }

    if (!this.address) {
      Swal.fire({
        icon: "warning",
        title: "Kérem írja be a Lakcím"
      })
      return
    }

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
    )

    let regist = [
      this.name,
      this.phonenumber,
      this.address,
      this.email
    ]
    this.config.postData(regist)

    this.name = ""
    this.phonenumber = ""
    this.address = ""
    this.email = ""
    this.password = ""
  }
}
