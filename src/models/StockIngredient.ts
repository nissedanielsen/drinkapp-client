import { Stock } from "./Stock";
import { Ingredient } from "./Ingredient";


// StockIngredient.ts
export interface StockIngredient {
    id: number;
    stock: Stock;
    ingredient: Ingredient;
    quantity: number;
}