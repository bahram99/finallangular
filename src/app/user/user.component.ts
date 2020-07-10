import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscribable, Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy {

 user: {id: number , name: string};
 paramsub: Subscription;

 @ViewChild('b') lastname: NgForm;
 constructor(private router: ActivatedRoute) {
    }
  ngOnInit() {
    this.user = {
      id: this.router.snapshot.params.id,
      name: this.router.snapshot.params.name
    };
    this.paramsub = this.router.params.subscribe(  (param: Params) => {
      this.user.id = param.id,
        this.user.name = param.name;
    });
  }
  ngOnDestroy() {
   this.paramsub.unsubscribe();
  }

  onfirstSubmit(x: NgForm){
      console.log(x);
  }
  onlastSubmit(){
   console.log(this.lastname);
  }
}
