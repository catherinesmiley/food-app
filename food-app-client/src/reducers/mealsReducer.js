export const mealsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MEALS':
            return action.meals 
        case 'ADD_MEAL':
            return [...state, action.meal]
        case 'DELETE_MEAL': 
            return state.filter(m => m.id !== action.meal.id)
        default: 
            return state 
        }
    }