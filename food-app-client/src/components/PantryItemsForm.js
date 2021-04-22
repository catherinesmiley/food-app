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

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Pantry item"
                        name="name"
                        onChange={this.handleOnChange}
                        value={this.state.name}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Purchase date"
                        name="purchase_date"
                        onChange={this.handleOnChange}
                        value={this.state.purchase_date}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Expiration date"
                        name="expiration_date"
                        onChange={this.handleOnChange}
                        value={this.state.expiration_date}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Amount"
                        name="amount"
                        onChange={this.handleOnChange}
                        value={this.state.amount}
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