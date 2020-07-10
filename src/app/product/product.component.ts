import {Component, Input, OnInit} from '@angular/core';
import {apiservice} from './api';
import {ActivatedRoute} from '@angular/router';
import {interval, observable, of} from 'rxjs';
import { sub } from './useractive';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [apiservice , sub]
})
export class ProductComponent implements OnInit {
  id: number;
  proname = '';
  proprice = '';
  prolist = [{name: 's ' , price: 'ff'}];
  objkey = Object.keys;
  objval = Object.values;
  @Input() message: string;
    constructor(private  route: ActivatedRoute , private Sub: sub) {
    }
    ngOnInit() {
    const data= of(1,2,4);
    data.subscribe(
      {
        next: x =>console.log('number one is '+ x),
        error: y=>console.log(y),
        complete: () => console.log('ok')
      }
    );
  }
  active(){
      this.Sub.useractive.next(this.id);
  }
  addproduct(){
    this.prolist.push({name: this.proname , price: this.proprice});
  }

}
