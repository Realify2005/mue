'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const HomeDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-full py-6' onMouseLeave={closeDropdown}>
            <div className="relative inline-block bg-blue-500 rounded-lg" tabIndex={0}>
                <button
                    type="button"
                    className="px-4 py-2 text-black font-medium hover:text-white hover:bg-black rounded-lg text-sm inline-flex items-center focus:outline-none"
                    onClick={toggleDropdown}
                >
                    About Us <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <Link
                                    href="/"
                                    className="block px-4 py-2 text-black text-sm hover:bg-black hover:text-white"
                                    onClick={closeDropdown}
                                >
                                    Welcome Page
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-black text-sm hover:bg-black hover:text-white"
                                    onClick={closeDropdown}
                                >
                                    Our Committee
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/history" 
                                    className="block px-4 py-2 text-black text-sm hover:bg-black hover:text-white"
                                    onClick={closeDropdown}
                                >
                                    Our History
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomeDropdown;
