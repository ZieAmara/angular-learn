import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  initial_color: string = '#f5f5f5';
  default_color: string = '#009688';
  defaault_height: number = 180;

  // ElementRef: Permet de récupérer l'élément du DOM
  constructor(private element: ElementRef) {
    this.set_Height(this.defaault_height);
    this.set_BorderCard(this.initial_color);
  }

  // @Inpu('directive_selector') name_attribu:  Permet de récupérer l'input de l'élément du DOM
  @Input('pokemonBorderCard') border_color: string;

  private set_BorderCard(_color: string): void {
    this.element.nativeElement.style.border = `solid 4px ${_color}`;
  }

  private set_Height(_height: number): void {
    this.element.nativeElement.style.height = `${_height}px`;
  }

  //HostListener: Permet de déclencher une fonction au déclenchement d'un évènement.
  @HostListener('mouseenter') onMouseEnter(): void {
    this.set_BorderCard(this.border_color || this.default_color);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.set_BorderCard(this.initial_color);
  }

}
