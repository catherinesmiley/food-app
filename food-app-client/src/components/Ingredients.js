import React from 'react';

const Ingredients = ({ ingredients }) => {

    console.log("ingredients in ingredients", ingredients)
    console.log("hi")

    const ingredientsList = ingredients.map((ingredient, index) => {
        return <div key={ingredient.id} className="ingredientsList">
            <h3>{ingredient.name} - {ingredient.amount}</h3>
        </div>
    }) 

    return (
        <div>{ingredientsList}</div>
    );
};

export default Ingredients;