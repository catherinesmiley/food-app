import React from 'react';

const PantryItems = ({ items, deleteItem }) => {

    const itemsList = items.map((item, index) => {
        return <div key={item.id} className="itemsList">
            <h3>{item.name} - {item.amount} <button onClick={() => deleteItem(item)}>✓</button></h3>
            <p>Expiration date: {item.expiration_date}</p>
        </div>
    }) 

    return (
        <div>{itemsList}</div>
    );
};

export default PantryItems;