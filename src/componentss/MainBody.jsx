import React, {Component}  from 'react';
import { Link , BrowserRouter , Route , Switch } from "react-router-dom";

import '../styles/components/MainBody.css';

import Sort from "./Sort.jsx";
import Card from "./Card.jsx";
import Catalog from "./Catalog.jsx";

export default class MainBody extends Component {

	render(){
		return(
			<>
					<Sort />
					<Switch>
						<Route path="/:id">
							<Card products={this.props.products} />
						</Route>

						<Route path="/">
							{this.props.products.map(currentValue => (
								<Catalog key={currentValue.id} product={currentValue}/>
							))}
						</Route>
					</Switch>

			</>
		)
	}
}