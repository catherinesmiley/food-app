import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchIngredients } from '../actions/ingredients'
import Ingredients from './Ingredients'

class IngredientsContainer extends Component {

    componentDidMount() {
        this.props.fetchIngredients()
    }

    render() {

        return (
            <div>
                <Ingredients ingredients={this.props.ingredients} />
            </div>
        );
    }
}

const mapStateToProps = ({ ingredients }) => ({ ingredients })

export default connect(mapStateToProps, { fetchIngredients})(IngredientsContainer)