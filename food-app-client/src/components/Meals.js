import React from 'react';
import { Link } from 'react-router-dom'

const Meals = ({ meals, deleteMeal }) => {

    const mealsList = meals.map((meal, index) => {
        return <div key={meal.id} className="mealsList">
            <Link 
                to={`/meals/${meal.id}`}
            ><h2>{meal.title} <button onClick={() => deleteMeal(meal)}>X</button></h2></Link>
            <h3>{meal.description}</h3>
        </div>
    })

    return (
        <>
            {mealsList}
        </>
    );
};

export default Meals;