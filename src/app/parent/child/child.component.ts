import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-chiild',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChiildComponent implements OnInit {
  @Input() showname;
  @Output() last = new EventEmitter<string>();
  @Output() teststyle = new EventEmitter<any>();
  @ViewChild('input') input: ElementRef;
  text = 'this is last output';
  bool= true;
  rest = '';
  constructor(){}
  ngOnInit(): void {
    this.last.emit(this.text);
  }
  run(){
    console.log('salam'+this.showname );
  }
  lastoutput(){
    console.log(this.input.nativeElement.value);
  }
  setfalse() {
    if(this.bool === true){
      document.getElementById('ty').style.backgroundColor = 'green';
    } else  {
      document.getElementById('ty').style.backgroundColor = 'yellow'; }
  }
}
