import React, { Component} from 'react';
import { connect } from "react-redux";

class Basket extends Component {
	render() {
		return (
			<div className="basket">
				<div>Basket<span id="count" className="basket__count">{this.props.basket.count}</span></div>
				<div className="basket__amount">amount: <span id="amount">{this.props.basket.amount}</span></div>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	basket: state.basket,
})
export default connect (mapStateToProps)(Basket);