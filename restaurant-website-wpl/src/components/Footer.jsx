import React from 'react'
import logo from '../images/logo.png'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="footer-logo">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          </div>
          <div className="mb-2 md:mb-4">
            <a
              href="/"
              className="text-white text-2xl font-bold hover:text-gray-400"
            >
              Pizza
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/IstyaqueAhammed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white text-2xl hover:text-gray-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/istyaque_ahammed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white text-2xl hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Sunrise.Coaching.Centre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className="text-white text-2xl hover:text-gray-400"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/istyaqueahammed?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white text-2xl hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/istyaque-ahammed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="text-white text-2xl hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Resturant Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
