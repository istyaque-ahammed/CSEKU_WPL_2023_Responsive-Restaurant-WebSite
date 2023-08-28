import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Delicious Pizza For You' data={productData}/>
      <Products heading='Sweet Treats For You' data={productDataTwo}/>
      
    
    </Router>

  );
}

export default App;
