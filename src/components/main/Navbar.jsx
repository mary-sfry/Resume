import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Typography, AppBar, Toolbar, IconButton, Badge } from '@material-ui/core';
import {ShoppingCart, Person} from '@material-ui/icons';
import { useCart } from 'react-use-cart';

import { logo } from '..';


const Navbar = () => {
    const { totalItems, items } = useCart();
  return (
      <>
        <AppBar className='navbar'>
            <Toolbar className='toolbar'>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div>
                    <IconButton component={Link} to="/Login">
                        <Person className='icon' />
                    </IconButton>
                    <IconButton component={Link} to="/Cart" >
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart className='icon' />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        <Outlet />
      </>
  );
};
export default Navbar;
