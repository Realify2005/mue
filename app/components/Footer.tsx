import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-MUE-footer-blue text-white lg:px-32 xl:px-60 py-8 lg:py-16 w-full">
      <div className="flex flex-col items-center text-center px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-72 text-left w-full">
          <div className="w-full lg:w-3/4">
            {/* Logo & Club Name */}
            <div className="flex flex-col lg:flex-row items-center mb-6">
            <Image 
              src="/logos/MUE_transparent.png" 
              alt="MUE Logo" 
              width={80} 
              height={80} 
              className="h-20 w-auto mb-2 lg:mb-0" 
            />
              <h2 className="text-lg font-bold text-center lg:mr-8">MELBOURNE UNIVERSITY ESPORTS & GAMING</h2>
            </div>

            {/* Slogan */}
            <p className="flex text-gray-300 text-sm mb-6 justify-center lg:justify-start">
              Connected by campus, powered by play
            </p>

            {/* Membership & Contact Links */}
            <div className="flex flex-col space-y-2 mb-6 items-center lg:items-start">
              <Link href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/" 
                target="_blank" 
                className="text-MUE-sky-blue font-bold hover:underline">
                GET A MEMBERSHIP &gt;
              </Link>
              <Link href="mailto:melbuniesports@gmail.com" className="text-MUE-sky-blue font-bold hover:underline">
                CONTACT US &gt;
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-end items-center space-x-6 lg:space-x-10 text-xl mb-6">
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