 
import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class CloseOverlayDirective {
  constructor(private _elementRef : ElementRef) {
  }

  @Output()
  public closeOverlay = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.closeOverlay.emit(targetElement);
    }
  }
}