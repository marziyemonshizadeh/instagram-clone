import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
      <Provider store={store}>
        <Routes/>
      </Provider>
    // </React.StrictMode>
  
)
