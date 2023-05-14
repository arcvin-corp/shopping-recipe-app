import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Alert, AlertLevels } from '../shared/alerts.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3),
  ];
  alert: Alert;
  isVisible = false;

  addIngredient(ingredient: Ingredient): void {
    let ingredientName = ingredient.name.toLocaleLowerCase().trim();
    if (
      this.ingredients.some((ing) => ing.name.toLowerCase() === ingredientName)
    ) {
      this.isVisible = true;
      this.alert = new Alert(
        `The ingredient '${ingredientName}' is already added.`,
        AlertLevels.ERROR
      );
    } else {
      this.isVisible = false;
      this.ingredients.push(ingredient);
    }
  }

  closeAlert() {
    this.isVisible = false;
  }
}
