import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchIngredients } from '../actions/ingredients'

class IngredientsContainer extends Component {

    componentDidMount() {
        this.props.fetchIngredients()
    }

    render() {
        console.log("ingredients in ingredients container", this.props.ingredients)
        return (
            <div>
                hiiiiiiiii
            </div>
        );
    }
}

const mapStateToProps = ({ ingredients }) => ({ ingredients })

export default connect(mapStateToProps, { fetchIngredients})(IngredientsContainer)