import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  constructor() { }
  name= 'bahram farmani ';

  showlast(e){
    console.log(e + '):');
  }
}
