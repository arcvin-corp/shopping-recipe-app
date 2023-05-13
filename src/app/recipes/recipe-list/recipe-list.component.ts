import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'This is a great alfredo sauce pasta',
      'https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta5-1.jpg'
    ),
    new Recipe(
      'Pasta',
      'This is a great alfredo sauce pasta',
      'https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta5-1.jpg'
    ),
    new Recipe(
      'Pasta',
      'This is a great alfredo sauce pasta',
      'https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta5-1.jpg'
    ),
  ];

  getStatus() {
    return true;
  }
}
