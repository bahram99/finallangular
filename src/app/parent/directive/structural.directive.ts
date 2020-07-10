import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {
  constructor(private  temp: TemplateRef<any>, private view: ViewContainerRef) {
  }
  @Input() set appStructural(even: any){
    if(even === true){
      // @ts-ignore
      this.view.createComponent(this.temp);
    } else { this.view.clear(); }
  }
}

