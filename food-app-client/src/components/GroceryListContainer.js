import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchGroceryListItems } from '../actions/grocerylistitems'

class GroceryListContainer extends Component {

    componentDidMount() {
        this.props.fetchGroceryListItems()
    }

    render() {
        
        return (
            <div>
                Grocery List!
            </div>
        );
    }
};

const mapStateToProps = ({ grocery_items }) => ({ grocery_items })

export default connect(mapStateToProps, { fetchGroceryListItems })(GroceryListContainer);