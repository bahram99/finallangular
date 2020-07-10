import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  foo(){
    console.log('service test');
  }
  constructor( private  http: HttpClient) { }
  run(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(res => res));
  }

}
