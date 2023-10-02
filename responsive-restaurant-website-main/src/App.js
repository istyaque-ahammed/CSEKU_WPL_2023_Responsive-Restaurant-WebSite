import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Edit from './admin/Component/Edit.jsx';
import Add from './admin/Component/Add.jsx';
import MainBoard from './admin/Component/MainBoard.jsx';
import ProductPage from './components/Products/ProductPage.js';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pizza" element={<Products data={productData} />} />
        <Route path="/desserts" element={<Products data={productDataTwo} />} />
        <Route path="/fullmenu" element={<Products data={productData} />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/admin" element={<MainBoard />} />  
        <Route path="/productpage" element={<ProductPage/>}/>   
      </Routes>
    </Router>
  );
}

export default App;
