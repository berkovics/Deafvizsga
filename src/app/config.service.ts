import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = "https://localhost:8000/api/"
  //private registerSub= new Subject()
  
  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get(this.url + "getDeafs")
  }

  postData(body:any){
    return this.http.post(this.url, body + "addDeaf")
  }

  putData(body:any){
    return this.http.put(this.url+body.id, body + "updateDeaf")
  }
  
  deleteData(body:any){
    return this.http.delete(this.url+body.id + "deleteDeaf")
  }
}
