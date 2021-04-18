import React from 'react';

const Meals = ({ meals }) => {

    const mealsList = meals.map((meal, index) => {
        return <div key={meal.id} className="mealsList">
            <h2>{meal.title}</h2>
            <h3>{meal.description}</h3>
            <p>{meal.instructions}</p>
        </div>
    })

    return (
        <div>{mealsList}</div>
    );
};

export default Meals;