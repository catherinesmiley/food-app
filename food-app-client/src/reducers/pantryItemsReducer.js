export const pantryItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PANTRY_ITEMS':
            return action.items
        case 'ADD_PANTRY_ITEM':
            return [...state, action.item]
        case 'DELETE_PANTRY_ITEM':
            return state.filter(i => i.id !== action.item.id)
        default: 
            return state 
        }
    }