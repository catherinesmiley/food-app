import React from 'react';

const Ingredients = ({ ingredients, mealID }) => {

    let ingredientsList = ingredients.filter(i => i.meal_id === mealID)

    return (
        <div>
            <h3>Ingredients:</h3> 
            {ingredientsList.map(ingredient => {
                return (<p key={ingredient.id}>{ingredient.amount} {ingredient.name} <button>X</button></p>)
            })}
        </div>
    )
}

export default Ingredients;