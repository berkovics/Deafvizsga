import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
 
  email:string = ""

  constructor(private auth:AuthService, private router:Router) {}
 
  forgot(){
    this.auth.forgotPassword(this.email).then(
      () => {
        this.router.navigate(['/varify-email'])
      }, (err:any) => {
        Swal.fire({
          icon: "error",
          title: "Valami elromlott"
        })
      }
    )
    this.email = ""
  }
}
