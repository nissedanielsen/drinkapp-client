import React, { useState, useEffect } from 'react';
import { getStockByMemberId } from '../services/StockService.tsx';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Ingredient } from "../models/Ingredient";
import { StockIngredient } from "../models/StockIngredient";
import { Stock } from "../models/Stock";


const StockList: React.FC<{ memberId: number }> = ({ memberId }) => {
  const [stock, setStock] = useState<Stock | null>(null);

  useEffect(() => {
    console.log('useEffect triggered with memberId:', memberId);
    fetchStock();
  }, [memberId]);

  const fetchStock = async () => {
    try {
      const data = await getStockByMemberId(memberId);
      setStock(data);
      console.log('Fetched stock data:', data); 
    } catch (error) {
      console.error('Error fetching stock:', error);
      // Handle error
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Stock List for Member ID: {memberId}</h2>
      {stock ? (
        <TableContainer component={Paper}>
          <Table aria-label="stock table">
            <TableHead>
              <TableRow>
                <TableCell>Ingredient Name</TableCell>
                <TableCell>Ingredient Category</TableCell>
                <TableCell>Ingredient ABV</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {stock && stock.ingredients && stock.ingredients.map((stockIngredient) => (
                <TableRow key={stockIngredient.id}>
                    <TableCell>{stockIngredient.ingredient.name}</TableCell>
                    <TableCell>{stockIngredient.ingredient.category}</TableCell>
                    <TableCell>{stockIngredient.ingredient.abv}</TableCell>
                    <TableCell>{stockIngredient.quantity}</TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockList;
