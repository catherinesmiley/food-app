import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchGroceryListItems } from '../actions/grocerylistitems'
import GroceryListItems from './GroceryListItems';

class GroceryListContainer extends Component {

    componentDidMount() {
        this.props.fetchGroceryListItems()
    }

    render() {
        return (
            <div>
                <GroceryListItems grocery_items={this.props.grocery_items} />
            </div>
        );
    }
};

const mapStateToProps = ({ grocery_items }) => ({ grocery_items })

export default connect(mapStateToProps, { fetchGroceryListItems })(GroceryListContainer);