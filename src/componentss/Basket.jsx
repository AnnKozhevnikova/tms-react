import React from 'react';
import {useSelector} from "react-redux";


const  Basket=()=> {
		const {count,amount}=useSelector(state=>({count:state.basket.count,amount:state.basket.amount}));
		return (
			<div className="basket">
				<div>Basket<span id="count" className="basket__count">{count}</span></div>
				<div className="basket__amount">amount: <span id="amount">{amount}</span></div>
			</div>
		)

}
export default Basket;