import React,{Component} from 'react';
import './Display.css';

class Display extends Component {
	constructor(props){
		super(props);
		this.state = {value:0};
	}
	render(){
		return(
			<div className="display"> {this.state.value} </div>
		);
	}
}

export default Display;