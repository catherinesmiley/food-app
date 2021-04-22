const BASE_URL = "http://localhost:3000/pantry_items"

export const fetchPantryItems = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(items => dispatch({ type: 'FETCH_PANTRY_ITEMS', items  }))
    }
}

export const addPantryItem = item => {
    return dispatch => {
        fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        .then(item => dispatch({ type: 'ADD_PANTRY_ITEM', item }))
    }
}

export const deletePantryItem = item => {
    return dispatch => {
        dispatch({ type: 'DELETE_PANTRY_ITEM', item })
        fetch(`${BASE_URL}/${item.id}`, {
            method: "DELETE"
        })
    }
}