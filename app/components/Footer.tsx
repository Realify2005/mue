import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-28">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-8">

                {/* Left: Copyright text */}
                <div className="flex flex-col items-center md:items-start text-gray-500 text-sm mt-6">
                    {/* <p>&copy; Copyrights MUE 2024 All Rights Reserved</p> */}
                    <p>Made with ❤️ by MUE Dev Team</p>
                </div> 

                {/* Center: Membership Link */}
                <div className="flex flex-col items-center text-center px-24">
                    <img src="/logos/MUE_transparent.png" alt="MUE Logo" className="h-36 mb-4" />
                    <p className="text-lg font-bold text-white">MELBOURNE UNIVERSITY ESPORTS & GAMING</p>
                    <p className="text-sm text-gray-400 mt-1 py-4">Connected by campus, powered by play</p>
                    <Link href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"
                     target="_blank" 
                     className="text-blue-400 font-bold hover:underline mt-2">
                        GET A MEMBERSHIP &rarr;
                    </Link>
                </div>

                {/* Right: Social Icons */}
                <div className="flex justify-center md:justify-end space-x-8">
                    <Link href="https://www.linkedin.com/company/melbourne-university-esports/" target="_blank" className="text-white text-2xl hover:text-blue-400"><FaLinkedin /></Link>
                    <Link href="https://www.instagram.com/melbuniesports/" target="_blank" className="text-white text-2xl hover:text-pink-400"><FaInstagram /></Link>
                    <Link href="https://www.facebook.com/MelbUniEsports/" target="_blank" className="text-white text-2xl hover:text-blue-500"><FaFacebook /></Link>
                    <Link href="https://discord.gg/NHAFvPqTDt" target="_blank" className="text-white text-2xl hover:text-purple-500"><FaDiscord /></Link>
                </div>

            </div>
        </footer>

    )
}

export default Footer