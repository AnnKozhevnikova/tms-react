import React, { Component} from 'react';



export default class Basket extends Component {
	render() {
		return (
			<div className="basket">
				<div>Basket<span id="count" className="basket__count">0</span></div>
				<div className="basket__amount">amount: <span id="amount">0$</span></div>
			</div>
		)
	}
}