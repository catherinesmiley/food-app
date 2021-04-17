import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    meals: mealsReducer
})