import React from 'react';
import ImgBg from "../images/featured3.jpg"

const Feature = () => {
  return (
    <div className="bg-gradient-to-r from-opacity-10 via-opacity-80 to-transparent relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${ImgBg})` }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
          Pizza of the Day
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6">
          Truffle alfredo sauce topped with 24 carat gold dust.
        </p>
        <button className="text-2xl sm:text-3xl px-6 py-2 bg-yellow-500 text-black hover:bg-red-600 hover:text-white transition duration-200 ease-out">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Feature;
