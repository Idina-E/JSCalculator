import React,{Component} from 'react';
import './Button.css';

class Button extends Component {
	handleClick = () => {
		console.log(this.props.value);
	}
	render(){
		return(
			<div className="button" onClick={this.handleClick}> {this.props.value} </div>
		);
	}
}

export default Button;

/*x= 5
(x) => {
	x-2
}.bind(this) <--Bullshit*/