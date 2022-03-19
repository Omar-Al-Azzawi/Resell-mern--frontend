import React from 'react';
import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from "react-router"

/* import Navbar from './components/Navbar'; */
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Cart from './components/pages/Cart';
import LikeProducts from './components/pages/LikeProducts';
import Landing from './components/pages/Landing';
import UpdataProduct from './components/pages/UpdataProduct';
import Product from './components/pages/Product';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <BrowserRouter>
   {/*  <Navbar /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/likeproducts" element={<LikeProducts />} />
          <Route path="/products/:id" element={<UpdataProduct />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
