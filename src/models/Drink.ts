import { DrinkIngredient } from "./DrinkIngredient";

export interface Drink {
    id: number;
    name: string;
    description: string;
    type: string;
    ingredients: DrinkIngredient[];
}