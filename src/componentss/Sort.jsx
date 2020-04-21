import React, { Component } from "react";
import "../styles/components/Sort.css";

export default class Sort extends Component {




	render() {
		return(
			<section className="container row sort">
				<div>
					Electronics
				</div>

				<div>
					Sort by price: <span id="Desc">Desc</span>
				</div>
			</section>
		);
	}
}




