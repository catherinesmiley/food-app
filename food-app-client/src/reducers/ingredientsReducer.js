export const ingredientsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_INGREDIENTS':
            return action.ingredients 
        default: 
            return state 
        }
    }