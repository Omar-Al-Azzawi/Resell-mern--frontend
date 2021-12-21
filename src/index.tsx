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
import likeReducer from './featurs/likeSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    updata: updataReducer,
    product: productReducer,
    offers: offerReducer,
    like: likeReducer
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

