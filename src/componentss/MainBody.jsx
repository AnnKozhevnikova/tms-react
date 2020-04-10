import React, {Component}  from 'react';


import '../styles/components/MainBody.css';

import Sort from "./Sort";
import Card from "./Card";

export default class MainBody extends Component {

	render(){
		return(
			<>
					<Sort />
					{this.props.products.map(currentValue => (
						<Card product={currentValue}/>
					))}
			</>
		)
	}
}