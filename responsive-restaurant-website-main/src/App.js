import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products';
import Dessert from './components/Products/dessert'
import { productData, productDataTwo } from './components/Products/data';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Edit from './admin/Component/Edit.jsx';
import Add from './admin/Component/Add.jsx';
import MainBoard from './admin/Component/MainBoard.jsx';
import ProductPage from './components/Products/ProductPage.js';
import CheckoutForm from './components/CheckOut/CheckoutForm';
import Success from './components/Payment/Success';
import Cancel from './components/Payment/Cancel';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pizza" element={<Products heading='Delicious Pizza For You' data={productData} />} />
        <Route path="/dessert" element={<Dessert heading='Sweet Treats For You' data={productDataTwo} />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/admin" element={<MainBoard />} />  
        <Route path="/productpage" element={<ProductPage/>}/>
        <Route path="/checkout" element={<CheckoutForm/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>

      </Routes>
    </Router>
  );
}

export default App;
