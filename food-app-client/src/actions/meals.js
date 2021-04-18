const BASE_URL = "http://localhost:3000/meals"

export const fetchMeals = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(meals => dispatch({ type: 'FETCH_MEALS', meals }))
    }
}