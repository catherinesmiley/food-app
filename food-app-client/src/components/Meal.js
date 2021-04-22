import React from 'react';
import { useParams } from 'react-router-dom'

const Meal = ({ meals }) => {
    const { id } = useParams()
    const meal = meals.find(m => m.id === parseInt(id))

    if (meals.length === 0) return null

    return (
        <div>
            <h2>{meal.title}</h2>
        </div>
    );
};

export default Meal;