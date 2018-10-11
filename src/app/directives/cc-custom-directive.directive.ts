import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCcCustomDirective]'
})

export class CcCustomDirectiveDirective {

  constructor(private el: ElementRef) {

  }

  @HostBinding('class.entry__content') private: boolean;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.cssText = 'transform: scale(1.1); transition: all .3s ease';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.cssText = 'transform: scale(1); transition: all .3s ease';
  }
}
