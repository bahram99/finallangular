import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  visible = true;
  heroform: FormGroup;
  arr: string[] =[];

  constructor() {
  }

  ngOnInit(): void {
    this.test();
    this.namechange();
    console.log(this.arr);
  }

  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  toggle() {
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
  time  = new Observable<any>( observer =>{
    setInterval( () => {
      observer.next(new Date().toString());
    },5000);
  });

  test(){
    this.heroform = new FormGroup({
      name: new FormControl('')
    });
  }

  namechange(){
    const nam =this.heroform.get('name');
    nam.valueChanges.forEach((item: string) => this.arr.push(item));
    console.log(nam.value.toString());
  }






}
