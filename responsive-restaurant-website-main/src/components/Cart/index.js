import React from "react";
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
            <CheckoutButton>Checkout</CheckoutButton>
          </div>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
