import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-MUE-footer text-white py-16 w-full">
            <div className="flex flex-col items-center text-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-72 text-left">
                    <div className="w-3/4">
                        {/* Logo & Club Name */}
                        <div className="flex items-center mb-6">
                            <img src="/logos/MUE_transparent.png" alt="MUE Logo" className="h-20 mb-2" />
                            <h2 className="text-lg font-bold">MELBOURNE UNIVERSITY ESPORTS & GAMING</h2>
                        </div>

                        {/* Slogan */}
                        <p className="text-gray-300 text-sm mb-6">
                            Connected by campus, powered by play
                        </p>

                        {/* Membership & Contact Links */}
                        <div className="flex flex-col space-y-2 mb-6">
                            <Link href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/" 
                                target="_blank" 
                                className="text-[#46C8F0] font-bold hover:underline">
                                GET A MEMBERSHIP &gt;
                            </Link>
                            <Link href="/contact" className="text-[#46C8F0] font-bold hover:underline">
                                CONTACT US &gt;
                            </Link>
                        </div>
                        
                    </div>


                    {/* Social Media Links */}
                    <div className="flex justify-end items-center space-x-10 text-xl mb-6">
                        <Link href="https://www.linkedin.com/company/melbourne-university-esports/" 
                            target="_blank" 
                            className="hover:text-gray-400">
                            <FaLinkedin />
                        </Link>
                        <Link href="https://www.instagram.com/melbuniesports/" 
                            target="_blank" 
                            className="hover:text-gray-400">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.facebook.com/MelbUniEsports/" 
                            target="_blank" 
                            className="hover:text-gray-400">
                            <FaFacebook />
                        </Link>
                        <Link href="https://discord.gg/NHAFvPqTDt" 
                            target="_blank" 
                            className="hover:text-gray-400">
                            <FaDiscord />
                        </Link>
                    </div>

                </div>



                {/* Copyright */}
                <p className="text-gray-400 text-xs">
                    © Copyrights MUE 2024 All Rights Reserved
                </p>

            </div>
        </footer>
    );
};

export default Footer;
