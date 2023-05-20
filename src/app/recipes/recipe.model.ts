import { Ingredient } from '../shared/ingredient.model';

export interface RecipeData {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}

export class Recipe implements RecipeData {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}
