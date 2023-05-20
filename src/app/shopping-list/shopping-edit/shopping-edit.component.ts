import { Component, ViewChild, ElementRef } from '@angular/core';
import { Alert, AlertLevels } from 'src/app/shared/alerts.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { ValidationStatus } from 'src/app/shared/common.types';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputElement: ElementRef;
  @ViewChild('quantityInput') quantityInputElement: ElementRef;
  isVisible = false;
  alert: Alert;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient(): void {
    const ingNameTrimmed = this.nameInputElement.nativeElement.value.trim();
    const ingredientName = ingNameTrimmed.toLowerCase();
    const quantity = parseInt(this.quantityInputElement.nativeElement.value);
    const validateInput = this.validateInput(ingredientName, quantity);

    if (validateInput.isValid) {
      this.isVisible = false;
      this.shoppingListService.addIngredient(
        new Ingredient(ingNameTrimmed, quantity)
      );
    } else {
      this.isVisible = true;
      this.alert = new Alert(validateInput.errMsg, AlertLevels.ERROR);
    }
  }

  private validateInput(ingName: string, qty: number): ValidationStatus {
    if (ingName === '') {
      return { isValid: false, errMsg: 'Ingredient name cannot be empty.' };
    } else if (isNaN(qty) || qty < 1) {
      return {
        isValid: false,
        errMsg: 'Quantity must not be empty and must be greater than 0.',
      };
    } else {
      return { isValid: true, errMsg: '' };
    }
  }

  closeAlert() {
    this.isVisible = false;
  }
}
