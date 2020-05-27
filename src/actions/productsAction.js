import {createActions} from "redux-actions";

export const {
    addProducts,
    searchProducts,
    sortProducts,
} = createActions (
    'ADD_PRODUCTS',
    'SEARCH_PRODUCTS',
    'SORT_PRODUCTS',
);
