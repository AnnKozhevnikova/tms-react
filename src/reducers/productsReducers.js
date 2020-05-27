import {handleActions} from 'redux-actions';
import CloneDeep from 'lodash.clonedeep';
import {
    addProducts,
    searchProducts,
    sortProducts
} from "../actions";
import {productsState} from '../constants/defaultState';

export default {
    products:handleActions({
        [addProducts]:(state,{payload=[]})=>{
            payload.sort((a,b)=>b.price.value-a.price.value);
            return {origin:payload,current:payload};
        },
        [searchProducts]:(state,{payload=''})=>{
            const reg=new RegExp(payload,'i');
            return {...state,current:state.origin.filter(product => reg.test(product.title))};
        },
        [sortProducts]:(state,{payload=''})=>{
            const newState=CloneDeep(state);
            if(payload==='asc'){
                newState.current.sort((a,b)=>a.price.value-b.price.value);
                newState.origin.sort((a,b)=>a.price.value-b.price.value);
                return {origin:newState.origin,current:newState.current};
            }else if (payload==='desc'){
                newState.current.sort((a,b)=>b.price.value-a.price.value);
                newState.origin.sort((a,b)=>b.price.value-a.price.value);
                return {origin:newState.origin,current:newState.current};
            }
        }
    },productsState)
}