import { combineReducers } from 'redux'

import { pantryItemsReducer } from './pantryItemsReducer'
import { mealsReducer } from './mealsReducer'

export const rootReducer = combineReducers({
    items: pantryItemsReducer,
    meals: mealsReducer
})