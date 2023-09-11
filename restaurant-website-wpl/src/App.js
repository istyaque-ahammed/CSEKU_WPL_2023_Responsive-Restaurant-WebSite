import React from "react";
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import { GlobalStyle } from "./globalStyles";
import Products from "./pages/Products";
import { productData, productDataTwo } from "./components/data";
const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pizza" element={<Products data={productData}/>} />
        <Route path="/desserts" element={<Products data={productDataTwo}/>} />
        <Route path="/fullmenu" element={<Products data={ productDataTwo}/>} />
      </Routes>
    </Router>
  );
}

export default App;
