import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    
<div className="flex justify-end items-center cursor-pointer text-white" onClick={toggle}>
  <p className="transform -translate-x-1/3 font-bold text-2xl">Menu</p>
  <FaPizzaSlice className="text-2xl transform -translate-x-1/3 -translate-y-1/6" />
</div>
    
  );
};

export default Navbar;
