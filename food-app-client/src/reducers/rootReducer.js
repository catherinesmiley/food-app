import { combineReducers } from 'redux'

import { pantryItemsReducer } from './pantryItemsReducer'
import { mealsReducer } from './mealsReducer'
import { ingredientsReducer } from './ingredientsReducer'
import { groceryListItemsReducer } from './groceryListItemsReducer'

export const rootReducer = combineReducers({
    items: pantryItemsReducer,
    meals: mealsReducer, 
    ingredients: ingredientsReducer,
    grocery_items: groceryListItemsReducer
})