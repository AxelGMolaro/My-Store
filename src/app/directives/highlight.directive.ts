import { Directive, ElementRef, Renderer2, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  
  constructor(
  ) {
    this.setNeonEffect();
  }


  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'color', '#f43d05'); // verde neon
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'color', '#39ff14'); // verde neon
  }

  private setNeonEffect() {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#39ff14'); // verde neon

    this.renderer.setStyle(
      this.el.nativeElement,
      'text-shadow',
      `
      0 0 5px #39ff14,
      0 0 10px #39ff14,
      0 0 20px #39ff14,
      0 0 40px #39ff14
      `
    );
  }
}