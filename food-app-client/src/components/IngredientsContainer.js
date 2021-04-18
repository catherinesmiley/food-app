import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { fetchIngredients } from '../actions/ingredients'
import Ingredients from './Ingredients'

class IngredientsContainer extends Component {

    componentDidMount() {
        this.props.fetchIngredients()
    }

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/ingredients" render={() => <Ingredients ingredients={this.props.ingredients} />} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ ingredients }) => ({ ingredients })

export default connect(mapStateToProps, { fetchIngredients })(IngredientsContainer);