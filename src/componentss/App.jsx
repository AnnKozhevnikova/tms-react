import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

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

    }

    render() {
        return (
            <div className="App">
                <Header />
                <MainBody products={products}/>
            </div>
        );
    }
}

export default hot(App);