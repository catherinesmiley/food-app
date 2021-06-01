const BASE_URL = "http://localhost:3000/meals"

export const fetchMeals = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(meals => dispatch({ type: 'FETCH_MEALS', meals }))
    }
}

export const addMeal = meal => {
    return dispatch => {
        fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(meal)
        })
        .then(resp => resp.json())
        .then(meal => dispatch({ type: 'ADD_MEAL', meal }))
    }
}

export const deleteMeal = meal => {
    return dispatch => {
        dispatch({ type: 'DELETE_MEAL', meal })
        fetch(`${BASE_URL}/${meal.id}`, {
            method: "DELETE"
        })
    }
}