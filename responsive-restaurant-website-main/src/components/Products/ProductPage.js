import React, { useState } from "react";
import Products from "./Page";
import Cart from "../Cart";
import { productData, productDataTwo } from "./data"; 

const ProductPage = () => {
  const [cart, setCart] = useState([]);

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
      <Products heading="Our Pizzas" data={productData} addToCart={addToCart} />
      <Products heading="Our Sweets" data={productDataTwo} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductPage;
