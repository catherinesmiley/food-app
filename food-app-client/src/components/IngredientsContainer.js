import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchIngredients } from '../actions/ingredients'

class Ingredients extends Component {

    componentDidMount() {
        this.props.fetchIngredients()
    }

    render() {
        console.log("ingredients in ingredients container", this.props.ingredients)
        return (
            <div>
                All Ingredients
            </div>
        );
    }
}

const mapStateToProps = ({ ingredients }) => ({ ingredients })

export default connect(mapStateToProps, { fetchIngredients })(Ingredients);