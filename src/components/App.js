import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

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
        fishes[`fish${Date.now}`] = fish;
        //Setting the new fishes object to the state
        this.setState({ fishes });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="FRESH SEA FOOD MARKET" />
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
                
            </div> 

        )
    }
}

export default App;