import React, { Component }from 'react';
import {useDispatch} from "react-redux";
//action
import {searchProducts} from "../actions";

import '../styles/components/Search.css';

const Search=()=>{
	const dispatch=useDispatch();
	const handleInput=(event)=>{
		event.preventDefault();
		dispatch(searchProducts(event.target.value));
	}
	return (
		<form>
			<input onChange={handleInput} id="search" className="header__search" type="text" placeholder="Search"/>
		</form>
	)

};
export default Search;