import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnChanges {
  @Input() recipeDetails: Recipe;
  selectedIngredients: Ingredient[] = [];
  isAllSelected: boolean = false;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedIngredients = [];
  }

  selectIngredient(ing: Ingredient, isAllSelected: boolean) {
    if (isAllSelected) {
      const indexValue = this.selectedIngredients.findIndex(
        (el) => el.name === ing.name
      );

      indexValue < 0
        ? this.selectedIngredients.push(ing)
        : this.selectedIngredients.splice(indexValue, 1);
    }

    console.log(this.selectedIngredients);
  }

  addIngToShoppingList() {
    this.selectedIngredients.forEach((ing) =>
      this.shoppingListService.addIngredient(ing)
    );
  }

  onSelectAll() {
    this.isAllSelected = !this.isAllSelected;
    this.selectedIngredients = [...this.recipeDetails.ingredients];
  }
}
