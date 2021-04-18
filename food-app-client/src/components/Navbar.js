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
            >Pantry Items</NavLink>
            <br />
            <NavLink
                to="/meals"
                exact
            >Meals</NavLink>
        </div>
    );
};

export default Navbar;