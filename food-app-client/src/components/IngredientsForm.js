import React, { Component } from 'react';
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
                Ingredients: 
                <form>
                    <input 
                        name="text"
                        placeholder="Amount"
                        name="amount"
                        value={this.state.amount}
                    />
                    <input
                        type="text"
                        placeholder="Ingredient"
                        name="ingredient"
                        value={this.state.name}
                    />
                </form>
            </div>
        );
    }
};

export default connect(null, { addIngredient })(IngredientsForm);