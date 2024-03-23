import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#007bff' }}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          Drink App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
