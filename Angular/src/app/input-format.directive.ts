import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})

export class InputFormatDirective {
  // note: 'appInputFormat is the name of this custom pipe
  @Input('appInputFormat') format;

  // ElementRef gives access to DOM object with this costum directive
  constructor(private el: ElementRef) { }

  // HostListen will subscribe to an event handled by target
  // DOM object
  @HostListener('blur') onBlur() {
    // in this example, value will be text of input tag
    const value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
    else
      this.el.nativeElement.value = value.toLocaleUpperCase();
  }



}
