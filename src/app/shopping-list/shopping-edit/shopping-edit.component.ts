import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Alert, AlertLevels } from 'src/app/shared/alerts.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

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
  @Output() newIngredientEvent = new EventEmitter<Ingredient>();

  onClickAdd() {
    if (
      this.nameInputElement.nativeElement.value !== '' &&
      this.quantityInputElement.nativeElement.value !== '' &&
      this.quantityInputElement.nativeElement.value > 0
    ) {
      this.isVisible = false;
      this.newIngredientEvent.emit(
        new Ingredient(
          this.nameInputElement.nativeElement.value,
          this.quantityInputElement.nativeElement.value
        )
      );
    } else {
      this.isVisible = true;
      this.alert = {
        content:
          'Ingredient name or Quantity cannot be empty. Also Quantity cannot be less than 1',
        level: AlertLevels.ERROR,
      };
    }
  }

  closeAlert() {
    this.isVisible = false;
  }
}
