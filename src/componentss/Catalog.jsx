import React, { Component } from "react";
import '../styles/components/Catalog.css';
import BasketButton from "./BasketButton.jsx";
import { withRouter } from "react-router";


class Catalog extends Component {
	constructor(props) {
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick (event) {
		event.preventDefault();
		this.props.history.push(this.props.product.id);
	}
	render () {
		console.log(this.props);
		return (
			<section className="container " id="section">
				<div className="row main">
						<div className="image">
								<img src={this.props.product.imageLink} alt=' ' />
						</div>
						<div className="properties">
								<a onClick={this.handleClick} className="cart_title" href="#">{this.props.product.title}</a>
								<p className="characteristics" dangerouslySetInnerHTML={{__html: this.props.product.description}} />
						</div>
						<div className="product_price">
								<p className="price" >${this.props.product.price.value}.00</p>
								<BasketButton />
						</div>
				</div>
			</section>
		)
	}
}

export default withRouter (Catalog);