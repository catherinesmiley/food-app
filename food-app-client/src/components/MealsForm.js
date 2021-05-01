import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addMeal } from '../actions/meals'
import IngredientsForm from './IngredientsForm'

class MealsForm extends Component {

    state = {
        title: '',
        description: '',
        instructions: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const meal = {
            title: this.state.title,
            description: this.state.description,
            instructions: this.state.instructions
        }
        
        this.props.addMeal(meal)
    }

    render() {

        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        placeholder="Meal title" 
                        name="title"
                        onChange={this.handleOnChange}
                        value={this.state.title}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Meal description" 
                        name="description"
                        onChange={this.handleOnChange}
                        value={this.state.description}
                    />
                    <br />
                    <br />
                    <IngredientsForm />
                    <br />
                    <textarea
                        placeholder="Instructions" 
                        name="instructions"
                        onChange={this.handleOnChange}
                        value={this.state.instructions}
                    />
                    <br />
                    <input type="submit" value="Add new meal"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { addMeal })(MealsForm);