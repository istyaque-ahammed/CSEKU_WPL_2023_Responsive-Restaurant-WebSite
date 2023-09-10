import React from 'react';
import { Link } from 'react-router-dom';
import { XIcon } from '@heroicons/react/solid'; // Import from solid in Heroicons v1

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-yellow-500 w-64 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button
          className="text-black hover:text-red-500"
          onClick={toggle}
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="text-center">
        <Link
          to="/Hero"
          className="block py-4 text-black hover:text-red-500 text-lg"
          onClick={toggle}
        >
          Pizzas
        </Link>
        <Link
          to="/"
          className="block py-4 text-black hover:text-red-500 text-lg"
          onClick={toggle}
        >
          Desserts
        </Link>
        <Link
          to="/"
          className="block py-4 text-black hover:text-red-500 text-lg"
          onClick={toggle}
        >
          Full Menu
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className="bg-red-500 text-white py-4 px-8 text-lg font-semibold hover:bg-yellow-500 transition duration-300 ease-in-out rounded-full"
          onClick={toggle}
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
