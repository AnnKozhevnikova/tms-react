import { createStore } from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension'
import reducer from "../reducers";
import { persistStore} from 'redux-persist';

export const store = createStore(
    reducer,
    devToolsEnhancer(),
);

export  const persistor=persistStore(store);