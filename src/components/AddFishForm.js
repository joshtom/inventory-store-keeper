import React from 'react';


class AddFishForm extends React.Component{
    createFish = (e) => {
        // 1. Stop the form from submitting
        e.preventDefault();
        console.log("Making a fish");
    }
    render() {
        return(     
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" ref="name" placeholder="name" />
                <input type="text" name="price" ref="price" placeholder="price" />
                <select  name="status" ref="status" >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref="desc" placeholder="desc" />
                <input type="text" name="image" ref="image" placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;