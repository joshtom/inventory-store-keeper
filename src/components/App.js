import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import samplefishes from "../sample-fishes"
import Fish from './Fish'
import base from '../base'

class App extends React.Component {
    state = {
        fishes: {}, 
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

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

    // Adding order to state
    addToOrder = key => {
        // 1. Take a copy of the state
        const order = { ...this.state.order };
        // 2. Either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1
        // 3. Call setState to update our state object
        this.setState({ order });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="FRESH SEA FOOD MARKET" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => ( 
                        <Fish 
                        key={key} 
                        index={key}
                        details={this.state.fishes[key]}
                        addToOrder={this.addToOrder}
                        />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory 
                addFish={this.addFish}                                                          loadSampleFishes={this.loadSampleFishes}                
                
                />
                
            </div> 

        )
    }
}

export default App;