const BASE_URL = "http://localhost:3000/ingredients"

export const fetchIngredients = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(ingredients => dispatch({ type: 'FETCH_INGREDIENTS', ingredients }))
    }
}

export const addIngredient = ingredient => {
    return dispatch => {
        fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(ingredient)
        })
        .then(resp => resp.json())
        .then(ingredient => dispatch({ type: 'ADD_INGREDIENT', ingredient }))
    }
}