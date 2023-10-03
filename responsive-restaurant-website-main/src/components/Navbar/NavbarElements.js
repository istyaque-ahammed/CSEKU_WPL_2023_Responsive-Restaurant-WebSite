import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: left;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px; /* Adjust the top position as needed */
    left: 0; /* Position the link on the left */
  }
  p {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;


export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-130%, 80%);
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
export const CartIcon = styled(FaShoppingCart)`
  font-size: 2.5rem;
  transform: translate(30%, 0%);
`;
