import React, { Component } from 'react';

import '../styles/components/Header.css';

import Basket from "./Basket.jsx";
import '../styles/components/Basket.css';
import Search from "./Search.jsx";


const Header = () => {
	return (
		<header className="header">
			<div className="container header__container">
					<div className="header__logo">The best shop</div>
					<Search/>
					<Basket/>
			</div>
		</header>
	)
}

export default Header;