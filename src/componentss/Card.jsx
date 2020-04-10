import React, { Component } from "react";
import '../styles/components/Card.css';

export default class Card extends Component {
	render () {
		return (
			<section className="container " id="section">
				<div className="row main">
						<div className="image">
								<img src={this.props.product.imageLink} alt=' ' />
						</div>

						<div className="properties">
								<p>{this.props.title}</p>
							<p className="characteristics" dangerouslySetInnerHTML={{__html: this.props.product.description}} />
						</div>

						<div className="product_price">
							<p className="price" >${this.props.product.price.value}.00</p>
								<a className="button" href="#">Add to basket</a>
						</div>

				</div>
			</section>
		)
	}
}