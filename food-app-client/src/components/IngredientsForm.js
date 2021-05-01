import React from 'react';
import { connect } from 'react-redux'

import { addIngredient } from '../actions/ingredients'

class IngredientsForm extends Component {

    state = {
        name: '',
        amount: '',
        meal_id: ''
    }

    render() {
        return (
            <div>
                Ingredients Form!
            </div>
        );
    }
};

export default connect(null, { addIngredient })(IngredientsForm);