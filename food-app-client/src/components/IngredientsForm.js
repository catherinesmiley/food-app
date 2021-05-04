import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addIngredient } from '../actions/ingredients'

class IngredientsForm extends Component {

    state = {
        name: '',
        amount: '',
        meal_id: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <div>
                Ingredients: 
                <form>
                    <input 
                        type="text"
                        placeholder="Amount"
                        name="amount"
                        onChange={this.handleOnChange}
                        value={this.state.amount}
                    />
                    <input
                        type="text"
                        placeholder="Ingredient"
                        name="name"
                        onChange={this.handleOnChange}
                        value={this.state.name}
                    />
                </form>
            </div>
        );
    }
};

export default connect(null, { addIngredient })(IngredientsForm);