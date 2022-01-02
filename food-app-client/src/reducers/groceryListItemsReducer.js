export const groceryListItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GROCERY_LIST_ITEMS':
            return action.grocery_items 
        case 'ADD_GROCERY_LIST_ITEM':
            return [...state, action.grocery_item]
        default: 
            return state 
        }
    }