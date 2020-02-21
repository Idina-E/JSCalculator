import React,{Component} from 'react';
import './ButtonGrid.css';
import Button from '../Button/Button';

class ButtonGrid extends Component {
	render(){
		return(
			<div className="buttonGrid">  
				<Button value="%" /> 
				<Button value="√" />
				<Button value="x²" /> 
				<Button value="1/x" />

				<Button value="CE" /> 
				<Button value="C" />
				<Button value="⌫" /> 
				<Button value="÷" />

				<Button value="7" /> 
				<Button value="8" />
				<Button value="9" /> 
				<Button value="×" />

				<Button value="4" /> 
				<Button value="5" />
				<Button value="6" /> 
				<Button value="-" />

				<Button value="1" /> 
				<Button value="2" />
				<Button value="3" /> 
				<Button value="+" />

				<Button value="±" /> 
				<Button value="0" />
				<Button value="." /> 
				<Button value="=" />
			</div>
		);
	}
}

export default ButtonGrid;