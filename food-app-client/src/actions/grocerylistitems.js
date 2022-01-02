const BASE_URL = "http://localhost:3000/grocery_list_items"

export const fetchGroceryListItems = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(grocery_items => dispatch({ type: 'FETCH_GROCERY_LIST_ITEMS', grocery_items  }))
    }
}