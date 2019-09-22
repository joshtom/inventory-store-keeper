import React from 'react';
import formatPrice from '../helpers'

class Fish extends React.Component{
    render() {
        // Using es6 destructuring to set multiple variables 
        const { desc, image, name, price, status } = this.props.details;
        return(
           <li className="menu-fish">
               <img src={image} alt={image} />
            <h3 className="fish-name">{name}
                <span className="price">{formatPrice(price)}</span>
            </h3>

           </li>
        )           
    }
}

export default Fish;