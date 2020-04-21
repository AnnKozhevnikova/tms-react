import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";


import './styles/components/index.css';

import App from './componentss/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


