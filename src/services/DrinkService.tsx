// services/drinkService.ts

import axios from 'axios';
import { Drink } from "../models/Drink";


const API_BASE_URL = 'http://localhost:8081'; // Update with your actual API base URL


const getAllDrinks = async (): Promise<Drink[]> => {
  try {
    const response = await axios.get<Drink[]>(`${API_BASE_URL}/drinks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
    throw error;
  }
};

const saveDrink = async (drink: Drink): Promise<Drink> => {
  try {
    const response = await axios.post<Drink>(`${API_BASE_URL}/drinks`, drink);
    return response.data;
  } catch (error) {
    console.error('Error saving drink:', error);
    throw error;
  }
};

export { getAllDrinks, saveDrink };
