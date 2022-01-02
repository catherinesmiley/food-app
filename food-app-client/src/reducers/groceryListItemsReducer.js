export const groceryListItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GROCERY_LIST_ITEMS':
            return action.grocery_items 
        default: 
            return state 
        }
    }