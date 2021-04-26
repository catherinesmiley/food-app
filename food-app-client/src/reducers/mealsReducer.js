export const mealsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MEALS':
            return action.meals 
        case 'ADD_MEAL':
            return [...state, action.meal]
        default: 
            return state 
        }
    }