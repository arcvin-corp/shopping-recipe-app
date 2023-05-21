import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appListItem]',
})
export class ListItemDirective implements OnInit {
  listItemEl: HTMLElement;
  checkBoxInputEl: HTMLInputElement;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.listItemEl = this.elRef.nativeElement;
    this.checkBoxInputEl = this.listItemEl.querySelector('input');
  }

  @HostListener('click', ['$event.target']) onListItemClick(
    target: HTMLElement
  ) {
    target.tagName !== 'INPUT' &&
      (this.checkBoxInputEl.checked = !this.checkBoxInputEl.checked);
  }
}
