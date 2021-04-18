import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchMeals } from '../actions/meals'

class MealsContainer extends Component {

    componentDidMount() {
        this.props.fetchMeals()
    }

    render() {
        console.log("meals in meals container", this.props.meals)
        return (
            <div>
                hiiiiiiiiiiiii
            </div>
        );
    }
}

const mapStateToProps = ({ meals }) => ({ meals })

export default connect(mapStateToProps, { fetchMeals })(MealsContainer);