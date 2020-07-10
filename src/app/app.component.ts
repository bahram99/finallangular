import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finallangular';

  data: Observable<number>;
  values: number[] = [ ];
  anyerror: boolean;
  complete: boolean;

  getdata(){
      this.data = new Observable( (observer: any) => {
          setTimeout( () => {
            observer.next(100);
          },5000);
          setTimeout( () => {
          observer.next(200);
        },3000);
          setTimeout( () => {
          observer.complete();
        },3000);
      });

      const result = this.data.subscribe(
        value => console.log(value),
             error => console.log(error),
        () => this.complete = true
      );
      console.log(result);
  }
}
