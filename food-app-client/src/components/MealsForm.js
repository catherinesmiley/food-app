import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addMeal } from '../actions/meals'

class MealsForm extends Component {

    handleOnSubmit = event => {
        event.preventDefault()
        console.log("event submitted!")
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        placeholder="Meal title" 
                        name="title"
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Meal description" 
                        name="description"
                    />
                    <br />
                    <textarea
                        placeholder="Instructions" 
                        name="instructions"
                    />
                    <br />
                    <input type="submit" value="Add new meal"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { addMeal })(MealsForm);