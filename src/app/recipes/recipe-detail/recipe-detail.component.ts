import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnChanges, AfterViewInit {
  @Input() recipeDetails: Recipe;
  @ViewChild('selectAllCheckBox') selectAllCheckBoxElRef: ElementRef;
  selectAllCheckBoxId: string;
  selectAllCheckBoxEl: HTMLInputElement;
  selectedIngredients: Ingredient[] = [];
  isAllSelected: boolean = false;
  isAddToShoppingListDisabled: boolean = true;

  constructor(private shoppingListService: ShoppingListService) {}

  ngAfterViewInit(): void {
    this.selectAllCheckBoxEl = this.selectAllCheckBoxElRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.recipeDetails.isFirstChange()) {
      console.log('Data changed');
      this.selectAllCheckBoxEl = this.selectAllCheckBoxElRef.nativeElement;
      this.isAllSelected = false;
      this.selectAllCheckBoxEl.checked = false;
      this.selectedIngredients = [];
    }
  }

  selectIngredient(ing: Ingredient) {
    const indexValue = this.selectedIngredients.findIndex(
      (el) => el.name === ing.name
    );

    indexValue < 0
      ? this.selectedIngredients.push(ing)
      : this.selectedIngredients.splice(indexValue, 1);

    this.selectedIngredients.length === 0 &&
      ((this.selectAllCheckBoxEl.checked = false),
      (this.isAllSelected = false)),
      (this.isAddToShoppingListDisabled = true);

    this.selectedIngredients.length === this.recipeDetails.ingredients.length &&
      (this.selectAllCheckBoxEl.checked = true);
    console.log('In Add Ing', this.selectedIngredients);
  }

  addIngToShoppingList() {
    this.selectedIngredients.forEach((ing) =>
      this.shoppingListService.addIngredient(ing)
    );
  }

  onSelectAll(e: Event) {
    if ((<HTMLInputElement>e.target).checked) {
      this.isAllSelected = true;
      this.selectedIngredients = [...this.recipeDetails.ingredients];
    } else {
      this.isAllSelected = false;
      this.selectedIngredients = [];
      this.isAddToShoppingListDisabled = true;
    }
  }

  openManageDropDown() {
    this.selectedIngredients.length > 0 &&
      (this.isAddToShoppingListDisabled = false);
  }
}
