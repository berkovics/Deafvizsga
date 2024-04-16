import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

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
  ujregister:any = {}
  keresendo:any
  
  constructor(private config:ConfigService){
    this.config.getAll().subscribe(
      (res)=>this.register=res
    )
  }

  postRegister(){
    this.config.postData(this.ujregister)
  }

  putRegister(body:any){
    this.config.putData(body)
  }

  deleteRegister(body:any){
    this.config.deleteData(body)
  }
}
