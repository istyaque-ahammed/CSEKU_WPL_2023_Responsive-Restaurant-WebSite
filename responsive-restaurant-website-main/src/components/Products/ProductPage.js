import React, { useState, useRef } from 'react';
import Products from './Page';
import Cart from '../Cart';
import { productData, productDataTwo } from './data';
import Footer from '../Footer';

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const cartRef = useRef(null);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.amount++;
    } else {
      const newProduct = { ...product, amount: 1 };
      updatedCart.push(newProduct);
    }

    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };


  return (
    <div>
      <Products heading='Delicious Pizza For You' data={productData} addToCart={addToCart} />
      <Products heading='Sweet Treats For You' data={productDataTwo} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />  
        <Footer />
    </div>
  );
};

export default ProductPage;
