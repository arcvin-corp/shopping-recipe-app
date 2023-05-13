import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showRecipes: boolean = true;
  showShoppingList: boolean = false;
}
