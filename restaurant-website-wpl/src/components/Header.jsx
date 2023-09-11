import React from 'react'
import '../index.css'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <>
    <header className="bg-black text-white p-1 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Pizza Logo" className="w-10 h-10" />
      </div>
      <ul className="flex space-x-4">
        <li><a href="http://localhost:3003/signup" className="text-white font-semibold hover:underline">Sign Up</a></li>
      </ul>
    </header>
    </>
  )
}

export default Header
