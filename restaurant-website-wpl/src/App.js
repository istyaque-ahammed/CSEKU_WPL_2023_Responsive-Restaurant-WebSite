import React from "react";
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import { GlobalStyle } from "./globalStyles";
import Products from "./pages/Products";
import { productData } from "./components/data";
const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pizza" element={<Products data={productData}/>} />
      </Routes>
    </Router>
  );
}

export default App;
