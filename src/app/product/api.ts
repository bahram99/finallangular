import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

// tslint:disable-next-line:class-name
export class apiservice  {

  constructor(private http: Http) {
  }

  getproduct(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
    // tslint:disable-next-line:align
  }
}
