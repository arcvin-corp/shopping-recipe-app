import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3),
  ];
  @Output() ingredientsChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    const ingIdx = this.ingredients.findIndex(
      (el) => el.name.toLowerCase() === ingredient.name.toLowerCase()
    );

    if (ingIdx < 0) {
      this.ingredients.push(ingredient);
    }

    this.ingredientsChanged.emit(true);
  }
}
