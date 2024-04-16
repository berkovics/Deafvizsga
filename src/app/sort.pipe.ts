import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(register:any, keresendo:any): any {
    if (!register) return null;
    if (!keresendo) return register
    register=register.filter(
      (e:any)=>JSON.stringify(e).toLowerCase().includes(keresendo.toLowerCase())
    )
    return register
  }

}
