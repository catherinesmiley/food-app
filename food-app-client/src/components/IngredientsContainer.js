import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchIngredients } from '../actions/ingredients'
import Ingredients from './Ingredients'

class IngredientsContainer extends Component {

    componentDidMount() {
        this.props.fetchIngredients()
    }

    render() {
        console.log("props in ingredients container", this.props)
        return (
            <div>
                <Ingredients ingredients={this.props.ingredients} mealID={this.props.mealID} />
            </div>
        );
    }
}

const mapStateToProps = ({ ingredients }) => ({ ingredients })

export default connect(mapStateToProps, { fetchIngredients})(IngredientsContainer)