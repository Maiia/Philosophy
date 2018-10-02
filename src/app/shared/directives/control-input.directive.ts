import {Directive, ElementRef, Input, ViewChild} from '@angular/core';
import * as possibleComponents from '../validation/validation.component';
import {ValidationComponent} from '../validation/validation.component';

@Directive({
  selector: '[appControlInputD]'
})

export class ControlInputDirective {
  @Input() type = 'text';
  @ViewChild(ValidationComponent) alert1: any;

  constructor( el: ElementRef ) {
    const inputComponent = possibleComponents['ValidationComponent'];
    console.log('NOOO', this.alert1);
    const tempDiv = document.createElement('div');
    el.nativeElement.parentNode.insertAdjacentElement('beforeend', tempDiv);
  }

}
