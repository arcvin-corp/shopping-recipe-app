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
  @ViewChild('selectAllCheckBox')
  selectAllCheckBoxElRef: ElementRef<HTMLInputElement>;
  selectAllCheckBoxEl: HTMLInputElement;
  selectedIngredients: Ingredient[] = [];
  isAllSelected = false;
  isAddToShoppingListDisabled = true;
  notAllSelected: boolean = false;

  constructor(private shoppingListService: ShoppingListService) {}

  ngAfterViewInit(): void {
    this.selectAllCheckBoxEl = this.selectAllCheckBoxElRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.recipeDetails.isFirstChange()) {
      this.selectAllCheckBoxEl = this.selectAllCheckBoxElRef.nativeElement;
      this.isAllSelected = false;
      this.selectAllCheckBoxEl.checked = false;
      this.selectedIngredients = [];
      this.isAddToShoppingListDisabled = true;
    }
  }

  selectIngredient(ing: Ingredient): void {
    const indexValue = this.selectedIngredients.findIndex(
      (el) => el.name === ing.name
    );

    if (indexValue < 0) {
      this.selectedIngredients.push(ing);
    } else {
      this.selectedIngredients.splice(indexValue, 1);
    }

    if (
      this.selectedIngredients.length < this.recipeDetails.ingredients.length
    ) {
      if (this.selectedIngredients.length === 0) {
        this.notAllSelected = false;
        this.isAllSelected = false;
        this.isAddToShoppingListDisabled = true;
      } else {
        this.selectAllCheckBoxEl.checked = false;
        this.notAllSelected = true;
      }
    }

    if (
      this.selectedIngredients.length === this.recipeDetails.ingredients.length
    ) {
      this.selectAllCheckBoxEl.click();
      this.notAllSelected = false;
    }
  }

  addIngToShoppingList(): void {
    this.shoppingListService.addIngredients(this.selectedIngredients);
  }

  onSelectAll(e: Event): void {
    console.log(this.notAllSelected);
    if ((e.target as HTMLInputElement).checked) {
      this.isAllSelected = true;
      this.selectedIngredients = [...this.recipeDetails.ingredients];
    } else {
      this.isAllSelected = false;
      this.selectedIngredients = [];
      this.isAddToShoppingListDisabled = true;
    }
  }

  openManageDropDown(): void {
    this.isAddToShoppingListDisabled = this.selectedIngredients.length === 0;
  }
}
