import React, { useState, useEffect } from 'react';
import { getAllIngredients } from '../services/IngredientsService.tsx';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Ingredient } from "../models/Ingredient";


const DrinkList: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    fetchIngredients();
  }, []); // Run only once when the component mounts

  const fetchIngredients = async () => {
    try {
      const data = await getAllIngredients();
      setIngredients(data);
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      // Handle error
    }
  };

  return (
    <div className="container mx-auto px-4">
      <TableContainer component={Paper}>
        <Table aria-label="ingredient table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>ABV</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredients.map(ingredient => (
              <TableRow key={ingredient.id}>
                <TableCell>{ingredient.id}</TableCell>
                <TableCell>{ingredient.name}</TableCell>
                <TableCell>{ingredient.category}</TableCell>
                <TableCell>{ingredient.abv}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DrinkList;
