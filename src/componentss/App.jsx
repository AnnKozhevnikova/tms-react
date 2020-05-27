import React, {useEffect} from 'react';
import {hot} from 'react-hot-loader/root';
import { useDispatch } from 'react-redux';

import '../styles/components/App.css';

import Header from "./Header.jsx";
import MainBody from "./MainBody.jsx";


//action
import {addProducts} from "../actions";


const  App =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('/api/products')
            .then(res=>res.json())
            .then(products=>{
                dispatch(addProducts(products));
            })
    },[]);

    return (
        <div className="App">
            <Header />
            <MainBody/>
        </div>
    );

}
export default hot(App);