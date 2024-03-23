import { Member } from "./Member";
import { StockIngredient } from "./StockIngredient";

// Stock.ts
export interface Stock {
    id: number;
    member: Member;
    ingredients: StockIngredient[];
}