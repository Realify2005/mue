'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from "lucide-react";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="relative navbar bg-MUE-dark-dark-blue px-4 lg:px-24 py-4 text-MUE-light-blue shadow-md shadow-black sticky top-0 w-full z-20">
      {/* Yellow Lines */}
      {/* ... */}

      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-MUE-dark-dark-blue rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="">About Us</a>
              <ul className="p-2">
                <li><Link href='/'>Welcome Page</Link></li>
                <li><Link href='/about'>About Us</Link></li>
                <li><Link href='/linktree'>Linktree</Link></li>
                <li><Link href='/alumni'>Alumni</Link></li>
                <li><Link href='/membership'>Membership</Link></li>
              </ul>
            </li>
            <li><Link href='/events'>Events</Link></li>
            <li><Link href='/esports' target="_blank" rel="noopener noreferrer">Esports</Link></li>
            <li><Link href='https://shop.melbuniesports.com' target="_blank" rel="noopener noreferrer">Shop</Link></li>
          </ul>
        </div>

        {/* MUE Logos */}
        <Link href='/' className="hidden lg:block">
          <Image src="/logos/MUE_wide.png" alt="MUE Wide logo" width={0} height={0} sizes="100vw" className="w-full h-16" />
        </Link>
        <Link href='/' className="block lg:hidden">
          <Image src="/logos/MUE.png" alt="MUE logo" width={0} height={0} sizes="100vw" className="w-full h-16" />
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* ABOUT US dropdown */}
          <li className="group">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className={`flex justify-center items-center ${
                  pathname.startsWith('/about') ||
                  pathname.startsWith('/linktree') ||
                  pathname.startsWith('/alumni') ||
                  pathname.startsWith('/membership') ||
                  pathname === '/'
                    ? 'font-semibold'
                    : 'text-MUE-light-blue'
                }`}
              >
                ABOUT US <ChevronRight size={15} />
                <span className={`absolute bottom-0 inset-x-4 h-0.5 bg-MUE-sky-blue transition-transform duration-300 ${
                  pathname === '/' ||
                  pathname.startsWith('/about') ||
                  pathname.startsWith('/linktree') ||
                  pathname.startsWith('/alumni') ||
                  pathname.startsWith('/membership')
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100 origin-left'
                }`} />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-MUE-dark-dark-blue rounded-box mt-60 z-10 w-52 p-2 shadow-sm">
                {[
                  { href: '/', label: 'Welcome Page' },
                  { href: '/about', label: 'About Us' },
                  { href: '/linktree', label: 'Linktree' },
                  { href: '/alumni', label: 'Alumni' },
                  { href: '/membership', label: 'Membership' },
                ].map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`block px-4 py-2 transition-[background-size] duration-300 ease-out
                          text-MUE-light-blue bg-no-repeat bg-left-bottom 
                          ${isActive
                            ? 'font-semibold bg-[length:100%_2px] bg-gradient-to-r from-MUE-sky-blue to-MUE-sky-blue'
                            : 'bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-gradient-to-r from-MUE-sky-blue to-MUE-sky-blue'
                          }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>

          {/* EVENTS */}
          <li className="group">
            <Link
              href="/events"
              className={`relative inline-block transition-colors ${
                pathname.startsWith('/events') ? 'font-semibold' : 'text-MUE-light-blue'
              }`}
            >
              EVENTS
              <span className={`absolute bottom-0 inset-x-4 h-0.5 bg-MUE-sky-blue transition-transform duration-300 ${
                pathname.startsWith('/events') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'
              }`} />
            </Link>
          </li>

          {/* ESPORTS */}
          <li className="group">
            <Link
              href="/esports"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative inline-block transition-colors ${
                pathname.startsWith('/esports') ? 'font-semibold' : 'text-MUE-light-blue'
              }`}
            >
              ESPORTS
              <span className={`absolute bottom-0 inset-x-4 h-0.5 bg-MUE-sky-blue transition-transform duration-300 ${
                pathname.startsWith('/esports') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'
              }`} />
            </Link>
          </li>

          {/* SHOP */}
          <li className="group">
            <Link
              href="https://shop.melbuniesports.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block text-MUE-light-blue transition-colors"
            >
              SHOP
              <span className="absolute bottom-0 inset-x-4 h-0.5 bg-MUE-sky-blue scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </li>
        </ul>
      </div>

      {/* JOIN MUE Button */}
      <div className="navbar-end">
        <Link
          href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"
          target="_blank"
          className="bg-MUE-sky-blue text-MUE-black font-bold py-2 px-4 rounded-full text-sm hover:bg-MUE-sky-blue-hover hover:text-MUE-white transition"
        >
          JOIN MUE &#x276F;
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
