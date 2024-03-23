import axios from 'axios';
import { Ingredient } from "../models/Ingredient.ts";

const API_BASE_URL = 'http://localhost:8081'; // Update with your actual API base URL

const getAllIngredients = async (): Promise<Ingredient[]> => {
  try {
    const response = await axios.get<Ingredient[]>(`${API_BASE_URL}/ingredients`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    throw error;
  }
};

const getIngredientById = async (id: number): Promise<Ingredient | null> => {
  try {
    const response = await axios.get<Ingredient>(`${API_BASE_URL}/ingredients/${id}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null; // Ingredient not found
    }
    console.error(`Error fetching ingredient with id ${id}:`, error);
    throw error;
  }
};

const saveIngredient = async (ingredient: Ingredient): Promise<Ingredient> => {
  try {
    const response = await axios.post<Ingredient>(`${API_BASE_URL}/ingredients`, ingredient);
    return response.data;
  } catch (error) {
    console.error('Error saving ingredient:', error);
    throw error;
  }
};

export { getAllIngredients, getIngredientById, saveIngredient };
