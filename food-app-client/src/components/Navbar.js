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
                to="/ingredients"
                exact
            >Ingredients</NavLink>
        </div>
    );
};

export default Navbar;