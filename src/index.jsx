import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './styles/components/index.css';
import { PersistGate } from 'redux-persist/integration/react';

import App from './componentss/App.jsx';
import {store,persistor} from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


