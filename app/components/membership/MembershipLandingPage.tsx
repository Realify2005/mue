"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@fontsource/audiowide";

/**
 * Membership Landing Page Hero Section
 * @returns {JSX.Element} Hero section with membership information and CTA buttons
 */
const MembershipLandingPage: React.FC = () => {
  return (
    <section
      className="
        relative w-full min-h-screen
        overflow-hidden px-8 lg:px-40 pb-20
        flex items-center bg-cover bg-center
        bg-MUE-dark-dark-blue
      "
    >
      {/* content grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 w-full items-center">
        {/* left text */}
        <div className="text-white md:col-span-3">
          <h1 className="font-montserrat font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-white">Become a member today</span>
          </h1>

          <p className="font-montserrat font-normal mt-4 text-xl md:text-2xl pb-4">
            Join our club to connect with fellow gamers, compete in tournaments,
            and enjoy exclusive member perks!
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"
              target="_blank"
              className="
                bg-[#9FB826] hover:bg-[#8FA726]
                text-black font-bold py-3 px-6 rounded-full
                transition flex items-center gap-2
              "
            >
              JOIN NOW <span className="text-xl">&#x276F;</span>
            </Link>
          </div>
        </div>

        {/* right side image */}
        <div className="flex justify-center md:justify-end md:col-span-2">
          <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/photos/membership_landing.png"
              alt="MUE Members"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipLandingPage;
