import React from 'react';
import {Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import '../styles/components/MainBody.css';

import Sort from "./Sort.jsx";
import Card from "./Card.jsx";
import Catalog from "./Catalog.jsx";

const MainBody=()=>{
    const products=useSelector(store=>store.products.current)
    return (
        <>
            <Sort/>
            <Switch>
                <Route path="/:id">
                    <Card products={products}/>
                </Route>

                <Route path="/">
                    <Catalog products={products}/>
                </Route>
            </Switch>

        </>
    )
}
export default MainBody;