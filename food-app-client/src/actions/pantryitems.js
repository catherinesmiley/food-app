const BASE_URL = "http://localhost:3000/pantry_items"

export const fetchPantryItems = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(items => dispatch({ type: 'FETCH_PANTRY_ITEMS', items  }))
    }
}