export const pantryItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PANTRY_ITEMS':
            return action.items
        case 'ADD_PANTRY_ITEM':
            return [...state, action.item]
        default: 
            return state 
        }
    }