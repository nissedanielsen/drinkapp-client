import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { Drink } from "../models/Drink";
import { DrinkIngredient } from "../models/DrinkIngredient";

const StyledPaper = styled(Paper)({
  backgroundColor: '#f0f0f0', // Example background color
  border: '1px solid #ccc', // Example border color
  padding: '3px', // Example padding
});

const StyledTableCellHeader = styled(TableCell)({
  fontWeight: 'bold',
  color: '#333', // Adjust color as needed
});

const DrinkList: React.FC<{ drinksData: Drink[] }> = ({ drinksData }) => {
  const [drinks, setDrinks] = useState<Drink[]>(drinksData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  useEffect(() => {
    setDrinks(drinksData); // Reset drinks when props change
  }, [drinksData]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRowClick = (drink: Drink) => {
    setSelectedDrink(drink === selectedDrink ? null : drink);
  };

  const renderIngredient = (drinkIngredient: DrinkIngredient) => {
    if (drinkIngredient.ingredient.category === 'Juice' || drinkIngredient.ingredient.category === 'Non-Liquor') {
      return `${drinkIngredient.ingredient.name} - Quantity: ${drinkIngredient.quantity}cl`;
    } else if (drinkIngredient.ingredient.category === 'Garnish') {
      return `${drinkIngredient.ingredient.name}`;
    } else {
      return `${drinkIngredient.ingredient.name} (${drinkIngredient.ingredient.abv}%) - Quantity: ${drinkIngredient.quantity}cl`;
    }
  };

  return (
    <div className="container mx-auto px-4">
   <Typography variant="h4" gutterBottom align="center">
    Drinks
   </Typography>
   <TextField
     label="Search Drinks"
     variant="outlined"
     fullWidth
     value={searchTerm}
     onChange={handleSearch}
    style={{ marginBottom: '16px', marginTop: '16px' }}
   />
      <TableContainer component={Paper}>
        <Table aria-label="drink table">
          <TableHead>
            <TableRow>
              <StyledTableCellHeader>Name</StyledTableCellHeader>
              <StyledTableCellHeader>Description</StyledTableCellHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {drinks
              .filter(drink =>
                drink.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(drink => (
                <React.Fragment key={drink.id}>
                  <TableRow onClick={() => handleRowClick(drink)} style={{ cursor: 'pointer' }}>
                    <TableCell>{drink.name}</TableCell>
                    <TableCell>{drink.description}</TableCell>
                  </TableRow>
                  {selectedDrink && selectedDrink.id === drink.id && (
                    <TableRow>
                      <TableCell colSpan={4}>
                        <StyledPaper>
                          <Typography variant="subtitle1">Ingredients:</Typography>
                          <List>
                            {selectedDrink.ingredients.map((drinkIngredient: DrinkIngredient) => (
                              <ListItem key={drinkIngredient.id}>
                                <ListItemText primary={renderIngredient(drinkIngredient)} />
                              </ListItem>
                            ))}
                          </List>
                        </StyledPaper>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DrinkList;
