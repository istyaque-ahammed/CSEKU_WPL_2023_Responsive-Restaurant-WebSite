import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ImgBg from '../images/pizza-3.jpg'
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-opacity-10 via-opacity-80 to-transparent relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${ImgBg})` }}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-2/3 md:w-1/2 lg:w-1/3 text-center">
      <div className="grid place-items-center">
  <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
    Greatest Pizza Ever
  </h1>
</div>

        <p className="text-xl md:text-2xl mb-8">Ready in 60 seconds</p>
        <button className="text-white bg-red-700 hover:bg-yellow-400 transition duration-300 ease-in-out px-8 py-2 rounded-full text-lg font-semibold">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
