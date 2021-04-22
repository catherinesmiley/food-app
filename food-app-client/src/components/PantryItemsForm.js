import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPantryItem } from '../actions/pantryitems'

class PantryItemsForm extends Component {
    render() {

        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Pantry item"
                    />
                    <br />
                    <input type="submit" value="Add new pantry item"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPantryItem })(PantryItemsForm);