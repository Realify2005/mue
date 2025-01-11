'use client'
import React, { useState } from 'react'
import HomeDropdown from './HomeDropdown'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutUs = () => {
    setAboutUsOpen(!aboutUsOpen);
  };


  return (
    <div className="fixed top-0 w-screen bg-gray-200 border border-gray-400 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <Link href="/">
                <span className="font-semibold text-xl">
                  <Image
                    src="/logos/MUE_transparent.png"
                    alt="MUE logo"
                    width={60}
                    height={60}
                  />
                </span>
            </Link>
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
            <ul className="flex gap-4 items-center">
              <li className="transition-colors duration-300 ease-in-out">
                <HomeDropdown />
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <Link href="/events" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Events
                </Link>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <Link href="/games" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Focused Games
                </Link>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <Link href="/membership" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Membership
                </Link>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <Link href="/sponsors" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Our Sponsors
                </Link>
              </li>
              <li className="transition-colors duration-300 ease-in-out">
                <Link href="/faq" className="text-black hover:text-white hover:bg-black px-2 py-1 rounded">
                  Frequently Asked Questions  
                </Link>
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
              <a href="#" className="block text-gray-900 hover:text-black flex items-center" onClick={toggleAboutUs}>
                About Us
                <svg className={`w-2.5 h-2.5 ml-2.5 ${aboutUsOpen ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </a>
              {aboutUsOpen && (
                <ul className="ml-4">
                  <li>
                    <Link href="/" className="block text-gray-900 hover:text-black">Welcome Page</Link>
                  </li>
                  <li>
                    <Link href="/committee" className="block text-gray-900 hover:text-black">Our Committee</Link>
                  </li>
                  <li>
                    <Link href="/linktree" className="block text-gray-900 hover:text-black">Linktree</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/events" className="block text-gray-900 hover:text-black">Events</Link>
            </li>
            <li>
              <Link href="/games" className="block text-gray-900 hover:text-black">Focused Games</Link>
            </li>
            <li>
              <Link href="/membership" className="block text-gray-900 hover:text-black">Membership</Link>
            </li>
            <li>
              <Link href="/sponsors" className="block text-gray-900 hover:text-black">Our Sponsors</Link>
            </li>
            <li>
              <Link href="/faq" className="block text-gray-900 hover:text-black">FAQs</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
