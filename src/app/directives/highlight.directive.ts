import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {


  @Input('highlight')
  color: string

  @HostBinding('style.background-color')
  backColor: string = ''

  ngOnInit(): void {
    if (!this.color) {
      this.color= 'Yellow'
    }
  }



  @HostListener('mouseenter')
  setColor():void {
    this.backColor = this.color
  }

  @HostListener('mouseleave')
  resetColor():void {
    this.backColor = ''
  }

}
