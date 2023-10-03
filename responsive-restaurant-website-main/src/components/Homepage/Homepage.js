import React from 'react'
import Footer from '../Footer'
import Hero from '../Hero'
import Feature from '../Feature'
import { productData, productDataTwo } from '../Products/data';
import Products from '../Products'
import Dessert from '../Products/dessert';

const Homepage = () => {
  return (
    <>
      <Hero/>
      <Products heading='Delicious Pizza For You' data={productData}/>
      <Feature/>
      <Dessert heading='Sweet Treats For You' data={productDataTwo}/>
      <Footer />
    </>
  )
}

export default Homepage
