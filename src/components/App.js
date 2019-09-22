import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import samplefishes from "../sample-fishes"
import Fish from './Fish'

class App extends React.Component {
    state = {
        fishes: {}, 
        order: {}
    };

    addFish = fish => {
        //1. Taking a copy of the existing state
        // Do not modify a state directly
        const fishes = { ...this.state.fishes };
        //2. Add our new fish to the fishes variale
        fishes[`fish${Date.now()}`] = fish;
        //Setting the new fishes object to the state
        this.setState({ fishes });
    }; 
    // NB : Any function that wants to update state needs to be in the same Component as the state.
    loadSampleFishes = () => {
        this.setState({ fishes: samplefishes })
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="FRESH SEA FOOD MARKET" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order />
                <Inventory 
                addFish={this.addFish}                                                          loadSampleFishes={this.loadSampleFishes}                
                
                />
                
            </div> 

        )
    }
}

export default App;