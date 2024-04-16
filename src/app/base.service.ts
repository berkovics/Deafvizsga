import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  serverUrl = "http://localhost:3000/hearShop/"
  private kosar:any = []
  private kosarTartalom = new BehaviorSubject(this.kosar)
  private productSub = new BehaviorSubject(null)

  constructor(private http:HttpClient) { 
    this.loadShops()
  }

  loadShops() {
    this.http.get(this.serverUrl).subscribe(
      (res:any)=>this.productSub.next(res)
    )
  }
  getShops() {
    return this.productSub
  }

  deleteShop(product:any){
    this.http.delete(this.serverUrl+product.id).forEach(
      ()=>this.loadShops()
    )
  }
  postShop(product:any){
    this.http.post(this.serverUrl, product).forEach(
      ()=>this.loadShops()
    )
  }
  updateShop(product:any){
    this.http.put(this.serverUrl+product.id, product).forEach(
      ()=>this.loadShops()
    )
  }





  getKosarTartalom(){
    return this.kosarTartalom
  }

  frissul(){
    this.kosarTartalom.next(this.kosar)
  }

  addTetel(idv:any, dbv:any){
    let tetel = {id:idv, db:dbv}
    let van = this.kosar.findIndex(
      (e:any) => e.id == idv
    )
    if (van >= 0) this.kosar[van].db = dbv
    else this.kosar.push(tetel)
    this.frissul()
  }

  tetelTorlese(tetel:any){
    this.kosar = this.kosar.filter(
      (e:any) => e.id != tetel.id
    )
    this.frissul()
  }
}
