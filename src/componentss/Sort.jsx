import React, { useState,useEffect } from "react";
import {useDispatch} from "react-redux";
//action
import {sortProducts} from "../actions";
import "../styles/components/Sort.css";

const Sort =()=>{
	const [active,setActive]=useState({status:true,load:false});
	const dispatch=useDispatch();
	useEffect(()=>{
		if(active.load){
			if(active.status) dispatch(sortProducts('desc'));
			else dispatch(sortProducts('asc'));
		}
	},[active]);
	const handleClick=(event)=>{
		event.preventDefault()
		setActive(prevState=>({status:!prevState.status,load:true}))

	};
	const sort=!active.status?'Desc':'Asc';
	return(

		<section className="container row sort">
			<div>Electronics</div>
			<div>Sort by price: <span onClick={handleClick} className='button_sort'>{sort}</span></div>
		</section>
	);

}
export default Sort;




