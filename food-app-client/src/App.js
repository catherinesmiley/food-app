import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import PantryItemsContainer from './components/PantryItemsContainer'
import MealsContainer from './components/MealsContainer'
import IngredientsContainer from './components/IngredientsContainer'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <PantryItemsContainer />
                    <MealsContainer />
                    <IngredientsContainer />
                </div>
            </Router>
        )
    }
}

export default App;