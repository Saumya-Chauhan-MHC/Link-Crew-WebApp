import React from 'react';

class Greet extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: "amazing"};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "curious"}
			);
		}
	
	render(){
		return(
			<div>
				<h1>Hello {this.state.val} Incoming Freshman!</h1>
				<button type="button" onClick={this.changeValue}>Change value</button>
			</div>
		);
	}
}


export default Greet;