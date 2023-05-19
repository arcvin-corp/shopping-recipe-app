import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'This is a great alfredo sauce pasta',
      'https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta5-1.jpg'
    ),
    new Recipe(
      'Noodles',
      'This is a great alfredo sauce pasta',
      'https://static01.nyt.com/images/2023/01/30/multimedia/hm-soy-sauce-noodles-with-cabbage-mpwf/hm-soy-sauce-noodles-with-cabbage-mpwf-master768.jpg?w=1280&q=75'
    ),
    new Recipe(
      'Drunken Chicken',
      'This is a great alfredo sauce pasta',
      'https://redhousespice.com/wp-content/uploads/2021/06/Chinese-drunken-chicken-scaled.jpg'
    ),
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }
}
