import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Delicious Pizza For You' data={productData}/>
      <Feature/>
<<<<<<< HEAD
      <Products heading='Sweet Treats For You' data={productDataTwo}/> 
      <Footer/>   
=======
      <Products heading='Sweet Treats For You' data={productDataTwo}/>
      
    
>>>>>>> parent of f8ab9d5 (menu add)
    </Router>

  );
}

export default App;
