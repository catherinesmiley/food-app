const BASE_URL = "http://localhost:3000/ingredients"

export const fetchIngredients = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(ingredients => console.log("ingredients from fetch", ingredients))
    }
}