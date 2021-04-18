import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { fetchPantryItems } from '../actions/pantryitems'
import PantryItems from './PantryItems'

class PantryItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchPantryItems()
    }

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/pantryitems" render={() => <PantryItems items={this.props.items} />} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps, { fetchPantryItems })(PantryItemsContainer);