import React, {Component} from 'react';
import '../styles/components/BasketButton.css';
import ClassNames from 'classnames';
import {connect} from "react-redux";
import {addToBasket,removeFromBasket} from "../actions";

class BasketButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:false,
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event){
        event.preventDefault();
        this.setState(prevState=>({active:!prevState.active}),()=>{
            if (this.state.active) {
                this.props.addToBasket({productId:this.props.product.id, priceValue: this.props.product.price.value})
            }
            else {
                this.props.removeFromBasket({productId:this.props.product.id, priceValue: this.props.product.price.value})
            }

        });
    }
    render() {
        const active=this.state.active ? "Remove from basket" : "Add to basket";
        return (
            <a onClick={this.handleClick} className={ClassNames("button", {"active": this.state.active})} href="#">{active}</a>
        )
    }
}
const mapDispatchToProps = {
    addToBasket,
    removeFromBasket,
}
export default connect (null,mapDispatchToProps)(BasketButton);