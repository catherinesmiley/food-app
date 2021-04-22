import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPantryItem } from '../actions/pantryitems'

class PantryItemsForm extends Component {

    state = {
        name: '',
        purchase_date: '',
        expiration_date: '',
        amount: ''
    }

    render() {
        console.log("state in pantry items form", this.state)
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Pantry item"
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Purchase date"
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Expiration date"
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Amount"
                    />
                    <br />
                    <br />
                    <input type="submit" value="Add new pantry item"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPantryItem })(PantryItemsForm);