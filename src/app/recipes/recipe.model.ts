interface RecipeData {
  name: string;
  description: string;
  imagePath: string;
}

export class Recipe implements RecipeData {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string
  ) {}
}
