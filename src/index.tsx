import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './featurs/cartSlice';
import authReducer from './featurs/authSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
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
