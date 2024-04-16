import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = "https://localhost:7144/api/Registers/"
  private registerSub= new Subject()
  
  constructor(private http:HttpClient) { 
    this.loadData()
  }

  getAll(){
    return this.registerSub
  }

  private loadData(){
    this.http.get(this.url).subscribe(
      (res)=>this.registerSub.next(res)
    )
  }

  postData(body:any){
    this.http.post(this.url, body).forEach(
      ()=>this.loadData()
    )
  }

  putData(body:any){
    this.http.put(this.url+body.id, body).forEach(
      ()=>this.loadData()
    )
  }
  
  deleteData(body:any){
    this.http.delete(this.url+body.id).forEach(
      ()=>this.loadData()
    )
  }
}
