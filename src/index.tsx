import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './featurs/cartSlice';
import authReducer from './featurs/authSlice';
import updataReducer from './featurs/updataSlice';
import productReducer from './featurs/productSlice';
import offerReducer from './featurs/offerSlice';  

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    updata: updataReducer,
    product: productReducer,
    offer: offerReducer
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

