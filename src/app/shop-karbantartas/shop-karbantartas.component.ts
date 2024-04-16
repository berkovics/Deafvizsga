import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-shop-karbantartas',
  templateUrl: './shop-karbantartas.component.html',
  styleUrls: ['./shop-karbantartas.component.css']
})
export class ShopKarbantartasComponent {
  shopping:any
  showError = false
  errorMessage = ""

  shop:any
  tetelek:any

  newAru:any={}
  oszlopok = [
    {key:"id", text:"#", type:"plain"},
    {key:"price", text:"Ár", type:"number"},
    {key:"imageUrl", text:"Kép", type:"image"},
    {key:"name", text:"Név", type:"text"}
  ]

  constructor(private base:BaseService) {
    this.base.getShops().subscribe(
      {
        next:(adatok) => {this.shopping = adatok; this.showError = false},
        error:(e) => {this.showError = true; this.errorMessage = e.message}
      }
    )

    // this.base.getShops().subscribe(
    //   (adatok) => this.shop = adatok
    // )   

   
    
  }

  deleteProduct(aru:any){
    this.base.deleteShop(aru)
  }
  updateProduct(aru:any){
    this.base.updateShop(aru)
  }
  postProduct(){
    this.base.postShop(this.newAru)
    this.newAru={}  
}
}
