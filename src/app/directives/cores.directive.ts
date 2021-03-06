import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCores]'
})
export class CoresDirective {

  constructor(private el:ElementRef) { 

    el.nativeElement.style.color='#603474'
  }

}
