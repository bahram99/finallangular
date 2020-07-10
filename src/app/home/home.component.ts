import {Component, OnInit, HostListener, Renderer2, ElementRef, Input , NgModule} from '@angular/core';
import { LoggingService } from './service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoggingService]
})
export class HomeComponent implements OnInit {
  result: boolean;
  str = 'pipe test';

  constructor(private elRef: ElementRef, private renderer: Renderer2,private logg: LoggingService) {
    this.result=false;
  }
  @Input() num: number;

  res() {
    this.logg.logStatusChanged();
  }

  ngOnInit(): void {
  }

}
