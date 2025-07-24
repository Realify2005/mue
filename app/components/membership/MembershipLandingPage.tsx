"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@fontsource/audiowide";

const MembershipLandingPage: React.FC = (): JSX.Element => {
  return (
    <section
      className="
        relative w-full min-h-screen
        overflow-hidden px-4 sm:px-8 lg:px-72 pb-16
        flex items-center bg-cover bg-center
        bg-MUE-dark-dark-blue
      "
    >
      {/* content grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 w-full items-center gap-8 md:gap-20">
        {/* left text */}
        <div className="text-white md:col-span-3">
          <h1 className="font-montserrat font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl">
            Become a member today
          </h1>

          <p className="font-montserrat font-normal mt-3 text-base sm:text-lg md:text-xl pb-4">
            Join our club to connect with fellow gamers, compete in tournaments,
            and enjoy exclusive member perks!
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"
              target="_blank"
              className="
                bg-MUE-green hover:bg-MUE-lime
                text-black py-3 px-6 rounded-full
                transition flex items-center gap-2
              "
            >
              JOIN NOW <span className="text-xl">&#x276F;</span>
            </Link>
          </div>
        </div>

        {/* right image */}
        <div className="flex justify-center md:justify-end md:col-span-2">
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[430px] lg:h-[430px]">
            <Image
              src="/photos/membership/membership_landing.png"
              alt="MUE Members"
              fill
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipLandingPage;
