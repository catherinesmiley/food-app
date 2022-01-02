const BASE_URL = "http://localhost:3000/grocery_list_items"

export const fetchGroceryListItems = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(grocery_items => dispatch({ type: 'FETCH_GROCERY_LIST_ITEMS', grocery_items  }))
    }
}

export const addGroceryListItem = grocery_item => {
    return dispatch => {
        fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            },
            body: JSON.stringify(grocery_item)
        })
        .then(resp => resp.json())
        .then(grocery_item => dispatch({ type: 'ADD_GROCERY_LIST_ITEM', grocery_item }))
    }
}