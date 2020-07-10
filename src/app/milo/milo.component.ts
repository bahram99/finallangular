import {Component, Input, OnInit} from '@angular/core';
import {style} from '@angular/animations';
import { MiloService } from './milo.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-milo',
  templateUrl: './milo.component.html',
  styleUrls: ['./milo.component.css']
})
export class MiloComponent implements OnInit {
  str = 'saman';
  num: number[] = [1,2,3];
  bool = false;
  obj: object = {name: 'ali' , last: 'testi'};
  objkey = Object.keys;
  objvalue = Object.values;
  item = {name: 'asad' , last: 'hi'};
  color = 'color: red;display: flex; justify-content: center; align-items: center;';
  @Input() message: string;

  constructor(private service: MiloService , private modal: NgbModal ) {}

  ngOnInit(): void {
    setTimeout( () =>{ const tt = document.getElementById('show');
                       tt.style.display='flex';
                       tt.classList.add('btn-primary');
                       this.bool=true;
    },3000);
  }
  select(){
    this.service.show();
  }

  open(){
    const relf = this.modal.open(ModalComponent);
  }
  click(){
  }
}
