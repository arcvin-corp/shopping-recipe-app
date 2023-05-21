import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
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
  selectAllCheckBoxEl: HTMLInputElement;
  selectedIngredients: Ingredient[] = [];
  isAllSelected: boolean = false;

  constructor(private shoppingListService: ShoppingListService) {}

  ngAfterViewInit(): void {
    this.selectAllCheckBoxEl = this.selectAllCheckBoxElRef.nativeElement;
  }

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

    console.log(this.isAllSelected);
    this.selectedIngredients.length === 0 &&
      (this.selectAllCheckBoxEl.checked = !this.selectAllCheckBoxEl.checked);
  }

  addIngToShoppingList() {
    this.selectedIngredients.forEach((ing) =>
      this.shoppingListService.addIngredient(ing)
    );
  }

  onSelectAll(e: Event) {
    (<HTMLInputElement>e.target).checked
      ? ((this.isAllSelected = true),
        (this.selectedIngredients = [...this.recipeDetails.ingredients]))
      : ((this.isAllSelected = false), (this.selectedIngredients = []));
    console.log(this.selectedIngredients);
  }
}
