'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-MUE-dark-blue px-4 lg:px-24 py-4 text-white shadow-md shadow-black sticky top-0 w-full z-50">
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
              className="menu menu-sm dropdown-content bg-[#1E3A8A] rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href='/events'>Events</Link></li>
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li><Link href='/'>Welcome Page</Link></li>
                  <li><Link href='/linktree'>Linktree</Link></li>
                  <li><Link href='/committee'>Committee</Link></li>
                  <li><Link href='/membership'>Membership</Link></li>
                  <li><Link href='/faq'>Frequently Asked Questions</Link></li>
                </ul>
              </li>
              <li>
                <a>Games</a>
                <ul className="p-2">
                  <li><Link href='/games'>Focused Games</Link></li>
                </ul>
              </li>
              <li><Link href='https://shop.melbuniesports.com' target="_blank" rel="noopener noreferrer">Shop</Link></li>
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
          <li><Link href='/events'>Events</Link></li>
          <li>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex">
                About <ChevronDown className="m-1 w-4 h-4" />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box mt-64 z-1 w-52 p-2 shadow-sm">
                {/* When changing the number of links in dropdown, please change the top margin of parent dropdown (mt) */}
                <li><Link href='/'>Welcome Page</Link></li>
                <li><Link href='/linktree'>Linktree</Link></li>
                <li><Link href='/committee'>Committee</Link></li>
                <li><Link href='/membership'>Membership</Link></li>
                <li><Link href='/faq'>Frequently Asked Questions</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex">
                Games <ChevronDown className="m-1 w-4 h-4" />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box mt-24 z-1 w-52 p-2 shadow-sm">
                {/* When changing the number of links in dropdown, please change the top margin of parent dropdown (mt) */}
                <li><Link href='/games'>Focused Games</Link></li>
              </ul>
            </div>
          </li>
          <li><Link href='https://shop.melbuniesports.com' target="_blank" rel="noopener noreferrer">Shop</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
          {/* Join Button */}
          <Link
            href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"
            target="_blank"
            className="bg-[#46C8F0] text-[#000000] font-bold py-2 px-4 rounded-full text-sm hover:bg-[#2694D1] transition"
          >
            JOIN MUE &#x276F;
          </Link>
      </div>
    </div>
  );
};

export default Navbar;