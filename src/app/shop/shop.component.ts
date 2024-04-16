import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  
  shopping:any
  showError = false
  errorMessage = ""

  shop:any
  tetelek:any

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

    this.base.getShops().subscribe(
      (adatok) => this.shop = adatok
    )   

    this.base.getKosarTartalom().subscribe(
      (adatok) => this.tetelek = adatok
    )
  }

  kosarba(id:any, db:any){
    this.base.addTetel(id, db)
  }

  keresBolt(id:any){
    return this.shop.find(
      (e:any) => e.id == id
    )
  }

  valtozas(tetel:any){
    this.base.addTetel(tetel.id, tetel.db)
  }

  tetelTorlese(tetel:any){
    this.base.tetelTorlese(tetel)
  }

  osszesen(){
    let sum = 0
    this.tetelek.forEach(
      (e:any) => {
        sum += this.keresBolt(e.id).price * e.db      
    });
    return sum
  }

  async fizetes(){
    const inputOptions = {
      "Készpénz": "Készpénz",
      "Bankkártya": "Bankkártya"
    }

    const { value: fizet } = await Swal.fire({
      title: this.osszesen() + " Ft",
      input: "radio",
      inputOptions,
      inputValidator : (value) => {
        return !value && "Valamit választani kell!"
      },
      showCancelButton: true
    })

    if (fizet) {
      Swal.fire({ 
        title: `A következőket választottad: ${fizet}`,
        icon: "success"
      })
    }
  }
}
