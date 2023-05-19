import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Alert, AlertLevels } from '../shared/alerts.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  alert: Alert;
  isVisible = false;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

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
      this.shoppingListService.addIngredient(ingredient);
      this.ingredients = this.shoppingListService.getIngredients();
    }
  }

  closeAlert() {
    this.isVisible = false;
  }
}
