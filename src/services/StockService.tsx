import axios from 'axios';
import { Ingredient } from "../models/Ingredient";
import { StockIngredient } from "../models/StockIngredient";
import { Stock } from "../models/Stock";

const API_BASE_URL = 'http://localhost:8081'; // Update with your actual API base URL

const getAllStocks = async (): Promise<Stock[]> => {
  try {
    const response = await axios.get<Stock[]>(`${API_BASE_URL}/stocks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};

const getStockById = async (id: number): Promise<Stock> => {
  try {
    const response = await axios.get<Stock>(`${API_BASE_URL}/stocks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching stock with ID ${id}:`, error);
    throw error;
  }
};

const saveStock = async (stock: Stock): Promise<Stock> => {
  try {
    const response = await axios.post<Stock>(`${API_BASE_URL}/stocks`, stock);
    return response.data;
  } catch (error) {
    console.error('Error saving stock:', error);
    throw error;
  }
};

const deleteStock = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/stocks/${id}`);
  } catch (error) {
    console.error(`Error deleting stock with ID ${id}:`, error);
    throw error;
  }
};

const getStockByMemberId = async (memberId: number): Promise<Stock> => {
  try {
    const response = await axios.get<Stock>(`${API_BASE_URL}/stocks/member/${memberId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error fetching stock for member ID ${memberId}:`, error);
    throw error;
  }
};

export { getAllStocks, getStockById, saveStock, deleteStock, getStockByMemberId };
