import React, { Component } from "react";
import '../styles/components/Catalog.css';
import BasketButton from "./BasketButton.jsx";
import { withRouter } from "react-router";


class Catalog extends Component {
	constructor(props) {
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick (productId) {
        return (event) => {
            event.preventDefault();
            this.props.history.push(productId);
        }
    }
	render () {
		return this.props.products.map( product => (
			<section key={product.id} className="container " id="section">
				<div className="row main">
					<div className="image">
						<img src={product.imageLink} alt=' ' />
					</div>
					<div className="properties">
						<a onClick={this.handleClick(product.id)} className="cart_title" href="#">{product.title}</a>
						<p className="characteristics" dangerouslySetInnerHTML={{__html: product.description}} />
					</div>
					<div className="product_price">
						<p className="price" >${product.price.value}.00</p>
						<BasketButton product={product}/>
					</div>
				</div>
			</section>
		))
	}
}

export default withRouter (Catalog);