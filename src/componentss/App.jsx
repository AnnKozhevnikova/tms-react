import React, {Component} from 'react';
import data from '../constants/catalogData';
import '../styles/components/App.css';
import Header from "./Header";
import MainBody from "./MainBody";


export default class App extends Component {
	render() {
		return (
			<div className="App">
				<body>
				<Header />
				<MainBody products={data}/>
				</body>
			</div>
		);
	}
}