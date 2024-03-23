import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu icon
import DrinkList from './DrinkList.tsx'; // Import Component1
import IngredientList from './IngredientsList.tsx'; // Import Component2
import StockList from './StockList.tsx'; // Import Component2
import { getAllDrinks } from '../services/DrinkService.tsx';
import { Drink } from "../models/Drink";

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedList, setSelectedList] = useState('DrinkList');
  const [drinkData, setDrinkData] = useState<Drink[]>([]); // State to hold drink data
  const [searchTerm, setSearchTerm] = useState<string>(''); // State to hold search term

  // Fetch drink data when component mounts
  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    try {
      // Call API to get drink data
      const data = await getAllDrinks();
      setDrinkData(data);
    } catch (error) {
      console.error('Error fetching drinks:', error);
      // Handle error
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleListItemClick = (listName) => {
    setSelectedList(listName);
    setMenuOpen(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <IconButton onClick={toggleMenu}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
        <List>
          <ListItem button onClick={() => handleListItemClick('DrinkList')}>
            <ListItemText primary="DrinkList" />
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('IngredientList')}>
            <ListItemText primary="IngredientList" />
          </ListItem>
          <ListItem button onClick={() => handleListItemClick('StockList')}>
            <ListItemText primary="StockList" />
          </ListItem>
        </List>
      </Drawer>
      <div>
        {selectedList === 'DrinkList' && (
          <DrinkList
            drinksData={drinkData} // Pass drink data as prop
          />
        )}
        {selectedList === 'IngredientList' && <IngredientList />}
        {selectedList === 'StockList' && <StockList memberId={1} />}
      </div>
    </div>
  );
};

export default NavigationMenu;
