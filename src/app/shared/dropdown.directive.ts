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
  @Input() markActiveElementID: string;

  element: HTMLElement;
  targetElement: HTMLElement;
  markActiveElement: HTMLElement;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.element = this.elRef.nativeElement;
    this.targetElement = this.element.querySelector(`#${this.targetElementId}`);
    this.markActiveElement = this.element.querySelector(
      `#${this.markActiveElementID}`
    );
  }

  toggleDropDown() {
    this.targetElement && this.targetElement.classList.toggle('show');
    this.markActiveElement && this.markActiveElement.classList.toggle('active');
  }

  closeDropDown() {
    this.targetElement && this.targetElement.classList.remove('show');
    this.markActiveElement && this.markActiveElement.classList.remove('active');
  }

  @HostListener('click', ['$event.target.id']) onClick(targetId: string) {
    if (
      targetId === this.markActiveElementID ||
      targetId === this.targetElementId
    ) {
      this.toggleDropDown();
    }
  }

  @HostListener('window:click', ['$event.target.id']) onWindowClick(
    targetId: string
  ) {
    if (
      targetId !== this.markActiveElementID &&
      targetId !== this.targetElementId
    ) {
      this.closeDropDown();
    }
  }

  @HostListener('window:keyup', ['$event']) onEscapeKeyPress(
    keyEvent: KeyboardEvent
  ) {
    keyEvent.key === 'Escape' && this.closeDropDown();
  }
}
