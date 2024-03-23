import React from 'react';
import './App.css';
import DrinkList from './components/DrinkList.tsx';
import Header from './components/Header.tsx';
import IngredientList from './components/IngredientsList.tsx';
import NavigationMenu from './components/NavigationMenu.tsx'; 
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
        <Header />
        <NavigationMenu /> {/* Add NavigationMenu component */}
        <main>
            {/* <IngredientList /> */}
            {/* <DrinkList /> */}
        </main>
        </div>
    </Router>
  );
}

export default App;
