import React from 'react';

const Ingredients = ({ ingredients }) => {

    const ingredientsList = ingredients.map((ingredient, index) => {
        return <div key={ingredient.id} className="ingredientsList">
            <p>{ingredient.amount} {ingredient.name}</p>
        </div>
    })

    return (
        <div>{ingredientsList}</div>
    );
};

export default Ingredients;