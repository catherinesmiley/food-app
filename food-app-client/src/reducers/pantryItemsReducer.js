export const pantryItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PANTRY_ITEMS':
            return action.items 
        default: 
            return state 
        }
    }