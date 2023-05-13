interface IngredientData {
  name: string;
  amount: number;
}

export class Ingredient implements IngredientData {
  constructor(public name: string, public amount: number) {}
}
