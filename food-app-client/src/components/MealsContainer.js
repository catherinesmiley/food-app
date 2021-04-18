import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { fetchMeals } from '../actions/meals'
import Meals from './Meals'

class MealsContainer extends Component {

    componentDidMount() {
        this.props.fetchMeals()
    }

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/meals" render={() => <Meals meals={this.props.meals} />} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ meals }) => ({ meals })

export default connect(mapStateToProps, { fetchMeals })(MealsContainer);