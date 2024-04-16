import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { vizsgal } from './vizsgal';
//import { vizsgal } from './hallas';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  refvizsgal: AngularFireList<vizsgal>

  constructor(private db:AngularFireDatabase) {
    this.refvizsgal = this.db.list("vizsgal")
  }

  get(){
    return this.refvizsgal
  }

  createNew(body:any){
    return this.refvizsgal.push(body)
  }

}
