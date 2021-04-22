import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
            >Home</NavLink>
            <br />
            <NavLink
                to="/pantryitems"
                exact
            >My Pantry Items</NavLink>
            <br />
            <NavLink
                to="/pantryitems/new"
                exact
            >Add Pantry Item</NavLink>
            <br />
            <NavLink
                to="/meals"
                exact
            >Meals</NavLink>
        </div>
    );
};

export default Navbar;