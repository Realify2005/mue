'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="relative navbar bg-MUE-dark-blue px-4 lg:px-24 py-4 text-MUE-light-blue shadow-md shadow-black sticky top-0 w-full z-20">

      {/* Yellow Lines */}
      <svg
        width="656"
        height="163"
        viewBox="0 0 656 163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block absolute top-[-60px] right-[-300px] flex-shrink-0 pointer-events-none"
      >
        <path
          d="M136.685 -11.4007L7 151H290.983L323.167 119.156H609.99L663 -12"
          stroke="var(--MUE-Yellow, #FFD629)"
          strokeWidth="6"
        />
      </svg>

      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Navbar Icon */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-MUE-dark-blue rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="hover:text-MUE-yellow">About</a>
                <ul className="p-2">
                  <li className="hover:text-MUE-yellow"><Link href='/'>Welcome Page</Link></li>
                  <li className="hover:text-MUE-yellow"><Link href='/linktree'>Linktree</Link></li>
                  <li className="hover:text-MUE-yellow"><Link href='/committee'>Committee</Link></li>
                  <li className="hover:text-MUE-yellow"><Link href='/membership'>Membership</Link></li>
                  <li className="hover:text-MUE-yellow"><Link href='/faq'>Frequently Asked Questions</Link></li>
                </ul>
              </li>
              <li className="hover:text-MUE-yellow"><Link href='/events'>Events</Link></li>
              <li className="hover:text-MUE-yellow"><Link href='/games' target="_blank" rel="noopener noreferrer">Games</Link></li>
              <li className="hover:text-MUE-yellow"><Link href='https://shop.melbuniesports.com' target="_blank" rel="noopener noreferrer">Shop</Link></li>
            </ul>
          </div>

        {/* The below code style is used due to desktop and mobile version having swapping places MUE logo */}
        <Link href='/' className="hidden lg:block">
          <Image src="/logos/MUE_wide.png" alt="MUE Wide logo" width={0} height={0} sizes="100vw" className="w-full h-16" />
        </Link>
        <Link href='/' className="block lg:hidden">
          <Image src="/logos/MUE.png" alt="MUE logo" width={0} height={0} sizes="100vw" className="w-full h-16" />
        </Link>
      </div>

      {/* Desktop Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex justify-center items-center hover:text-MUE-yellow">
                ABOUT <ChevronRight size={15}/>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-MUE-dark-blue rounded-box mt-64 z-1 w-52 p-2 shadow-sm">
                {/* When changing the number of links in dropdown, please change the top margin of parent dropdown (mt) */}
                <li className="hover:text-MUE-yellow"><Link href='/'>Welcome Page</Link></li>
                <li className="hover:text-MUE-yellow"><Link href='/linktree'>Linktree</Link></li>
                <li className="hover:text-MUE-yellow"><Link href='/committee'>Committee</Link></li>
                <li className="hover:text-MUE-yellow"><Link href='/membership'>Membership</Link></li>
                <li className="hover:text-MUE-yellow"><Link href='/faq'>Frequently Asked Questions</Link></li>
              </ul>
            </div>
          </li>
          <li className="hover:text-MUE-yellow"><Link href='/events'>EVENTS</Link></li>
          <li className="hover:text-MUE-yellow"><Link href='/games' target="_blank" rel="noopener noreferrer">GAMES</Link></li>
          <li className="hover:text-MUE-yellow"><Link href='https://shop.melbuniesports.com' target="_blank" rel="noopener noreferrer">SHOP</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
          {/* Join Button */}
          <Link
            href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"
            target="_blank"
            className="bg-MUE-yellow text-MUE-black font-bold py-2 px-4 rounded-full text-sm hover:bg-MUE-yellow-hover transition"
          >
            JOIN MUE &#x276F;
          </Link>
      </div>
    </div>
  );
};

export default Navbar;