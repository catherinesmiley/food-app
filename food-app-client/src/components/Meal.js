import React from 'react';
import { useParams } from 'react-router-dom'

import IngredientsContainer from './IngredientsContainer'

const Meal = ({ meals }) => {
    const { id } = useParams()
    const meal = meals.find(m => m.id === parseInt(id))

    if (meals.length === 0) return null

    return (
        <>
            <h2>{meal.title}</h2>
            <IngredientsContainer mealID={meal.id}/>
        </>
    );
};

export default Meal;