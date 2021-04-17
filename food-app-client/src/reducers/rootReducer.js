import { combineReducers } from 'redux'

import { ingredientsReducer } from './ingredientsReducer'
import { mealsReducer } from './mealsReducer'

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    meals: mealsReducer
})