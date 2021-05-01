import React from 'react';
import { connect } from 'react-redux'

import { addIngredient } from '../actions/ingredients'

const IngredientsForm = () => {
    return (
        <div>
            Ingredients Form!
        </div>
    );
};

export default connect(null, { addIngredient })(IngredientsForm);