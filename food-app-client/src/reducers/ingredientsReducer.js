export const ingredientsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_INGREDIENTS': 
            return action.ingredients 
        case 'ADD_INGREDIENT':
            return [...state, action.ingredient]
        default: 
            return state 
        }
    }