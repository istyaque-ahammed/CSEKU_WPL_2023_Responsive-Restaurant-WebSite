import styled from "styled-components";

export const CartContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) / 2);
background: black;
color: #fff;font-size: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add this line to distribute elements evenly */
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

export const CartItemImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
`;

export const CartItemInfo = styled.div`
  flex: 1;
`;

export const CartItemTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const CartItemPrice = styled.p`
  font-size: 16px;
  margin: 0;
  color: #fff;
`;

export const RemoveButton = styled.button`
  background-color: #ffc500;
  color: #000;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 3px;
`;

export const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 20px 0;
`;
export const CheckoutButton = styled.button`
font-size: 1.2rem;
padding: 1rem 1rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2 ease-out;

&:hover {
  background: #ffc500;
  transition: 0.5s ease-out;
  cursor: pointer;
  color: #000;
    `;
