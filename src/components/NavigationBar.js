// NavigationBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isLoggedIn, isAdmin }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <ShoppingCart />
                    </IconButton>
                    upGrad Eshop
                </Typography>
                {isLoggedIn ? (
                    <>
                        <input type="text" placeholder="Search" />
                        <Link to="/">Home</Link>
                        <Link to="/add-products">{isAdmin ? 'Add Products' : ''}</Link>
                        <button onClick={() => console.log('Logout')}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
