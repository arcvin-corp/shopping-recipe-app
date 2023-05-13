import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  recipeNavActive: boolean = true;
  shoppingListNavActive: boolean = false;
  @Output() showRecipesEvent = new EventEmitter<boolean>();
  @Output() showShoppingListEvent = new EventEmitter<boolean>();

  onShowRecipesClick() {
    this.showRecipesEvent.emit(true);
    this.showShoppingListEvent.emit(false);
    this.recipeNavActive = true;
    this.shoppingListNavActive = false;
  }

  onShowShoppingListClick() {
    this.showShoppingListEvent.emit(true);
    this.showRecipesEvent.emit(false);
    this.shoppingListNavActive = true;
    this.recipeNavActive = false;
  }
}
