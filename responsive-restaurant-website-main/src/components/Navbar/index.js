import React from 'react';
import { Nav, NavLink, NavIcon, Bars, CartIcon } from './NavbarElements';

const Navbar = ({ toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/productpage'> 
          <CartIcon  />  
          <p>&nbsp; My Cart</p>
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
