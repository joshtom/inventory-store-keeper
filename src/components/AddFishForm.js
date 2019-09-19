import React from 'react';


class AddFishForm extends React.Component{
            nameRef = React.createRef();
            priceRef = React.createRef();
            statusRef = React.createRef();
            descRef = React.createRef();
            imageRef = React.createRef();
    
    createFish = (e) => {
        // 1. Stop the form from submitting
        e.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        console.log(fish);
    }
    render() {
        return(     
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" ref={this.nameRef} placeholder="name" />
                <input type="text" name="price" ref={this.priceRef} placeholder="price" />
                <select  name="status" ref={this.statusRef} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="desc" />
                <input type="text" name="image" ref={this.imageRef} placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;