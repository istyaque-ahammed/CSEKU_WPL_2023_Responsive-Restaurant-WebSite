import React from 'react'
import '../index.css'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <>
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
       
        <img src={logo} alt="Pizza Logo" className="w-16 h-16" />
      </div>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-white font-semibold hover:underline">Pizza</a></li>
        <li><a href="#" className="text-white font-semibold hover:underline">Dessert</a></li>
        <li><a href="#" className="text-white font-semibold hover:underline">Full Menu</a></li>
        <li><a href="http://localhost:3003/signup" className="text-white font-semibold hover:underline">Sign Up</a></li>
      </ul>
    </header>
    </>
  )
}

export default Header
