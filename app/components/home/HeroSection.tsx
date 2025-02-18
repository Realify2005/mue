import React from "react";
import Link from "next/link";
import Image from "next/image";
import '@fontsource/audiowide';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-MUE-dark-blue overflow-hidden px-8 lg:px-40 pt-24 pb-36 flex items-center">

      {/* Yellow Sphere */}
      <div
        className="
          absolute
          bottom-[-250px] left-1/2
          transform -translate-x-1/2
          w-[400px] h-[500px]
          bg-[radial-gradient(circle,rgba(255,206,86,0.8)_0%,rgba(0,17,77,0)_70%)]
          rounded-t-full
          pointer-events-none
        "
      />

      {/* Yellow Lines */}
      <svg
        width="893.5"
        height="157.5"
        viewBox="0 0 810 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block absolute bottom-0 left-[-40px] flex-shrink-0 pointer-events-none"
      >
        <path
          d="M-92 3H47.3064L100.375 54H685.241L801.5 160.5H-20"
          stroke="var(--MUE-Yellow, #FFD629)"
          strokeWidth="6"
        />
      </svg>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        {/* Left: Content */}
        <div className="relative z-10 text-white">
          <p className="text-MUE-yellow font-inter text-xl font-medium tracking-[6px] uppercase">
            Welcome to MUE
          </p>
          <h1 className="text-5xl lg:text-[80px] font-audiowide font-normal leading-[123%] mt-2 capitalize">
            Melbourne&apos;s Biggest <br />
            <span className="text-MUE-sky-blue">Gaming Club</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Become a part of the Unimelb Spirit in Esports
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"
              target="_blank"
              className="bg-MUE-yellow text-MUE-black font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-MUE-yellow-hover transition flex items-center gap-2"
            >
              JOIN NOW <span className="text-xl">&#x276F;</span>
            </Link>
            <Link
              href="https://discord.gg/NHAFvPqTDt"
              target="_blank"
              className="border-2 border-MUE-yellow hover:border-MUE-yellow-hover text-MUE-yellow font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-MUE-yellow-hover hover:text-MUE-black transition"
            >
              OUR DISCORD
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative flex justify-center">
          <Image
            src="/photos/gic2024_photo_3.jpg"
            alt="Gamer Illustration"
            width={500}
            height={500}
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
