import { Ingredient } from "./Ingredient";
import { Drink } from "./Drink";

// DrinkIngredient.ts
export interface DrinkIngredient {
    id: number;
    drink: Drink;
    ingredient: Ingredient;
    quantity: number;
}