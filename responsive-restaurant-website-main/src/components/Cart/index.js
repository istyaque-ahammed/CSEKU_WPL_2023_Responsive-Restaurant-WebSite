import React from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  CartContainer,
  CartItem,
  CartItemInfo,
  CartItemImg,
  CartItemTitle,
  CartItemPrice,
  RemoveButton,
  TotalPrice,
  EmptyCartMessage,
  CheckoutButton,
} from "./CartElements";

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  const makePayment = async()=>{
    const stripe = await loadStripe("pk_test_51Nz6mCBwDyAJHsE8D2JcHzB0rHKQz2dSekiZ4zODYEDlwxWePiHE5eVYts9pA8SHq3AmS0nQMNtwB7Ye5Y7OoYUI00J4eJfQzW")

    const body = {
      products: cart
    }
    const headers ={
      "Content-Type": "application/json"
    }
    const response = await fetch("http://localhost:7000/api/create-checkout-session",{
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    });

    if(result.error){
      console.log(result.error);
    }
  } 

  return (
    <CartContainer>
      <h1 align="center">My Cart</h1>
      {cart.length === 0 ? (
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <CartItemImg src={item.img} alt={item.name} />
              <CartItemInfo>
                <CartItemTitle>{item.name}</CartItemTitle>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <CartItemPrice>{item.price * item.amount}</CartItemPrice>
                    <div>Quantity: {item.amount}</div>
                  </div>
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    Remove
                  </RemoveButton>
                </div>
              </CartItemInfo>
            </CartItem>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TotalPrice>Total Price: {totalPrice}</TotalPrice>
            <Link to="">
              <CheckoutButton onClick={makePayment}>Checkout</CheckoutButton>
            </Link>
          </div>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
