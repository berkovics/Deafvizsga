import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  register:any
  oszlopok = [
    "Név", "Telefonszám", "Lakcím", "Email"
  ]
  keresendo:any
  
  constructor(private config:ConfigService, private FireAuth:AuthService){
    this.config.getAll().subscribe(
      (res)=>this.register=res
    )
  }

  putRegister(body:any){
    this.config.putData(body)
  }

  deleteRegister(body:any){
    this.config.deleteData(body)

    this.FireAuth.deleteAuth()
  }
}
