import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord, FaWeixin } from 'react-icons/fa';
import { SiXiaohongshu } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-MUE-dark-dark-blue text-white lg:px-32 xl:px-60 py-8 lg:py-20 w-full">
      <div className="flex flex-col items-center text-center px-4 lg:px-0">

        {/* Horizontal line strip */}
        <div className="border-t border-gray-700 w-full mb-8" />

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
            <Link
              href="https://www.xiaohongshu.com/user/profile/6596163500000000220065a5?xsec_token=YBpEcQK1iZEXCOYemnmCDwWWcor8AsPuoi-5wd4TJku5M=&xsec_source=app_share&xhsshare=CopyLink&appuid=612d02b8000000002002f10e&apptime=1752048295&share_id=f353bf0c9cec4af2bd559b9ba8da44b0"
              target="_blank"
              className="hover:text-gray-400"
            >
              <SiXiaohongshu />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1iTUyXeirQVuk2bO7823WTNaOcQa6M-HR/view?usp=sharing"
              target="_blank"
              className="hover:text-gray-400"
            >
              <FaWeixin />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs">
          © Copyrights MUE 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;