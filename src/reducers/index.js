import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import productsReducers from "./productsReducers";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = persistReducer({
    key:'root',
    storage,
    whitelist:[
        'basket',
    ],
    },
    combineReducers({
    ...basketReducer,
    ...productsReducers,
}));

export default reducer;