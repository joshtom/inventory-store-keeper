import React from 'react';
import { getFunName } from '../helpers';



class StorePicker extends React.Component{

	myInput = React.createRef();
	goToStore = e => {
		// 1. Prevent form from submitting
		e.preventDefault();
		//2. Get the text from the input
		const storeName = myInput.current.value;
		//3.  Change the page to whatever the user entered
		this.history.push(`/store/${storeName}`);
	}
	render() {
		return(
			<form className="store-selector" onSubmit={this.goToStore}>	
				<h2> Please Enter A Store </h2>
				<input 
				type="text" 
				ref={this.myInput}
				required 
				placeholder="Store Name" 
				defaultValue={getFunName()}/>
				<button type="submit"> Visit Store -> </button>
			</form>
			)
	}
}

export default StorePicker;	