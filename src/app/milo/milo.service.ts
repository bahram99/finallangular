import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiloService {
  a = 0;
  b =1;
  constructor() {
  }

  show(){
    window.alert('service test');
    // tslint:disable-next-line:triple-equals
    if(this.a == 0){
      console.log(+ this.a+5);
    }
  }

}
