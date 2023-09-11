import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import { productData } from '../components/data';
import Products from './Products'

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Products heading='Delicious Pizza For You' data={productData}/>
      <Feature/>
      <Footer />
    </>
  )
}

export default Homepage
