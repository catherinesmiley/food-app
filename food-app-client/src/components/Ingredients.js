import React from 'react';

const Ingredients = ({ ingredients, mealID }) => {

    const ingredientsList = ingredients.map((ingredient, index) => {
        return <div key={ingredient.id} className="ingredientsList">
            <p>{ingredient.amount} {ingredient.name}</p>
        </div>
    })

    console.log("mealID in ingredients", mealID)

    return (
        <div>{ingredientsList}</div>
    );
};

export default Ingredients;