import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCcCustomDirective]'
})

export class CcCustomDirectiveDirective {

  constructor(private el: ElementRef) {

  }

  @HostBinding('class.entry__content') private: boolean;

  @HostListener('mouseover')
  onMouseOver() {
    console.log('asd');
    this.el.nativeElement.style.cssText = 'background-color: white; opacity: 0';
  }
}
