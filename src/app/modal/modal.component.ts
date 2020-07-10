import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public  activeModal: NgbActiveModal) { }
  @Input() name;
  last ='';
  str ='parent to child';
  ngOnInit(): void {}
  text(){
    console.log(this.last);
  }


}
