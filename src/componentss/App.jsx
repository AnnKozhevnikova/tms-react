import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import data from '../constants/catalogData';
import '../styles/components/App.css';

import Header from "./Header.jsx";
import MainBody from "./MainBody.jsx";
import products from "../constants/catalogData";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			basket: {
				count: 0,
				amount: 0,
			}


		};

		this.addToBasket = this.addToBasket.bind(this);
		this.removeFromBasket = this.removeFromBasket.bind(this);

	}

		addToBasket(product){
			this.setState(prevState => ({
				basket: {
					count: prevState.basket.count + 1,
					amount: prevState.basket.amount + product.price.value,
				}})
			)
		}

		removeFromBasket(product){
			this.setState(prevState => ({
				basket: {
					count: prevState.basket.count - 1,
					amount: prevState.basket.amount - product.price.value,
				}
			}))
		}


	render() {
		return (
			<div className="App">
				<Header  count={this.state.basket.count} amount={this.state.basket.amount}/>
				<MainBody products={products}/>
			</div>
		);
	}
}

export default hot(App);