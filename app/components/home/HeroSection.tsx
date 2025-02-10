import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/photos/gic2024_photo_3.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Join Melbourne&apos;s Biggest <br /> Gaming Community
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#46C8F0]">
            Become a part of the Unimelb Spirit in Esports
          </p>

          <Link
            href="https://discord.gg/NHAFvPqTDt"
            target="_blank"
            className="mt-6 bg-[#FFD700] text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-[#FFC107] transition"
          >
            JOIN NOW &#x276F;
          </Link>
        </div>
      </section>
    )
}

export default HeroSection;