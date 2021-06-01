import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { fetchMeals, deleteMeal } from '../actions/meals'
import Meals from './Meals'
import Meal from './Meal'
import MealsForm from './MealsForm'
import GroceryList from './GroceryList'

class MealsContainer extends Component {

    componentDidMount() {
        this.props.fetchMeals()
    }

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/meals" render={() => <Meals meals={this.props.meals} deleteMeal={this.props.deleteMeal} />} />
                    <Route exact path="/meals/new" component={MealsForm} />
                    <Route exact path="/meals/:id" render={() => <Meal meals={this.props.meals} />} />
                    <Route exact path="/grocerylist" component={GroceryList} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ meals }) => ({ meals })

export default connect(mapStateToProps, { fetchMeals, deleteMeal })(MealsContainer);