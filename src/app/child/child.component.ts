import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ChildService } from './child.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  constructor(private serv: ChildService) { }
  message='hello yser child';
  @Output() event = new EventEmitter();

  ngOnInit(): void {
    this.serv.run().subscribe(res => { console.log(res);});
  }

  sendmessage(){
    this.event.emit(this.message);
  }

}
