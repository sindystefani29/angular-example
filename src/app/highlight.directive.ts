import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color : string

  constructor(private el: ElementRef) { }

  private highlight (str: string) {
    this.el.nativeElement.style.backgroundColor = str
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.color)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }

}
