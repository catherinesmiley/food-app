import React from 'react';

const GroceryListItems = ({ grocery_items }) => {
    
    const groceryItemsList = grocery_items.map((grocery_item, index) => {
        return <div key={grocery_item.id} className="groceryItemsList">
            <h3>{grocery_item.amount} {grocery_item.name}</h3>
        </div>
    })
    
    return (
        <div>{groceryItemsList}</div>
    );
};

export default GroceryListItems;