import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addMeal } from '../actions/meals'

class MealsForm extends Component {
    render() {
        return (
            <div>
                Meals Form
            </div>
        );
    }
}

export default connect(null, { addMeal })(MealsForm);