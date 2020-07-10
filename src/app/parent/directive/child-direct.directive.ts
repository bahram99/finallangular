import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {style} from '@angular/animations';

@Directive({
  selector: '[appChildDirect]'
})
export class ChildDirectDirective {
  constructor(private  el: ElementRef) { }
  @Input() setcolor: string;
  private color(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') enter(){
    this.color(this.setcolor);
  }
  @HostListener('mouseleave') leave(){
    this.color('red');
  }
}
