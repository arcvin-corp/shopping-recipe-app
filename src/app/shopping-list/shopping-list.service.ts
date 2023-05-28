import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3),
  ];
  ingredientsChanged = new Subject<boolean>();

  constructor() {}

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient, emitOnAdd: boolean = true) {
    const ingIdx = this.ingredients.findIndex(
      (el) => el.name.toLowerCase() === ingredient.name.toLowerCase()
    );

    if (ingIdx < 0) {
      this.ingredients.push(ingredient);
    }

    emitOnAdd && this.ingredientsChanged.next(true);
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ing) => {
      this.addIngredient(ing, false);
    });

    this.ingredientsChanged.next(true);
  }
}
