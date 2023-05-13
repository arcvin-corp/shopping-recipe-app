import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() showRecipesEvent = new EventEmitter<boolean>();
  @Output() showShoppingListEvent = new EventEmitter<boolean>();

  onShowRecipesClick() {
    this.showRecipesEvent.emit(true);
    this.showShoppingListEvent.emit(false);
  }

  onShowShoppingListClick() {
    this.showShoppingListEvent.emit(true);
    this.showRecipesEvent.emit(false);
  }
}
