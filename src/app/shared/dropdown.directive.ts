import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @Input() targetElementId: string;
  @Input() anchorElementId: string;
  parentElement: HTMLElement;
  targetElement: HTMLElement;
  anchorElement: HTMLAnchorElement;

  constructor(private elRef: ElementRef) {
    this.parentElement = elRef.nativeElement;
  }

  ngOnInit() {
    this.getElements();
  }

  getElements() {
    this.targetElement = this.parentElement.querySelector(
      `#${this.targetElementId}`
    );
    this.anchorElement = this.parentElement.querySelector(
      `#${this.anchorElementId}`
    );
  }

  @HostListener('click') openDropdown() {
    this.targetElement && this.targetElement.classList.toggle('show');
    this.anchorElement && this.anchorElement.classList.toggle('active');
  }
}
