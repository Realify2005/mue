'use client'
import React, { useState } from 'react';
import Image from 'next/image'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 w-screen bg-gray-200 border border-gray-400 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <span className="font-semibold text-xl">
              <Image               
                  src="/logos/MUE.png"
                  alt="MUE logo"
                  width={50}
                  height={50}      
              />
            </span>
          </div>
          <div className="md:hidden flex">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-black focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="md:block hidden">
            <ul className="flex gap-4">
              <li className="transition-colors duration-300 ease-in-out">
                <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Home
                </a>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Events
                </a>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Focused Games
                </a>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Membership
                </a>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Our Sponsors
                </a>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <a href="#" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 w-full bg-gray-200">
          <ul className="px-2 py-1">
            <li>
              <a href="#" className="block text-gray-900 hover:text-black">Home</a>
            </li>
            <li>
              <a href="#" className="block text-gray-900 hover:text-black">Events</a>
            </li>
            <li>
              <a href="#" className="block text-gray-900 hover:text-black">Focused Games</a>
            </li>
            <li>
              <a href="#" className="block text-gray-900 hover:text-black">Membership</a>
            </li>
            <li>
              <a href="#" className="block text-gray-900 hover:text-black">Our Sponsors</a>
            </li>
            <li>
              <a href="#" className="block text-gray-900 hover:text-black">FAQs</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
