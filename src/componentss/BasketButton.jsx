import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
///styles
import '../styles/components/BasketButton.css';
import ClassNames from 'classnames';
import {addToBasket,removeFromBasket} from "../actions";

const BasketButton=(props)=>{
    const dispatch = useDispatch();
    const [active, setActive] = useState({status: true, load: false});
    const basket=useSelector(store=>store.basket);

    useEffect(()=>{
        if(basket.productId.includes(props.product.id)){
            setActive({status:false,load:false});
        }
    },[]);
    useEffect(() => {
             if (active.load) {
                 if (!active.status) {
                     dispatch(addToBasket({productId: props.product.id, priceValue: props.product.price.value}))
                } else {
                    dispatch(removeFromBasket({productId: props.product.id, priceValue: props.product.price.value}))
                }
            }
        }, [active]);
    const handleClick = (event) => {
            event.preventDefault();
            setActive(prevState=>({status:!prevState.status,load:true}));
    };
    const activeButton = active.status ?  "Add to basket":"Remove from basket" ;
    return(
        <a onClick={handleClick} className={ClassNames("button", {"active": !active.status})} href="#">{activeButton}</a>
    )
}
export default BasketButton;

