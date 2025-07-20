"use client";
import React from "react";
import Image from "next/image";
import "@fontsource/audiowide";

/**
 * Join Our Committee Section
 * @returns {JSX.Element} Section encouraging users to join the committee
 */
const JoinOurCommittee: React.FC = () => {
  return (
    <section
      className="
        relative w-full min-h-screen
        overflow-hidden px-8 lg:px-40 pt-4 pb-4
        flex items-center bg-cover bg-center
        bg-MUE-dark-dark-blue
      "
    >
      {/* content grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 w-full items-center">
        {/* left side image */}
        <div className="flex justify-center md:justify-start md:col-span-2">
          <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/photos/membership/join_our_comitee.jpg"
              alt="MUE Committee"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* right text */}
        <div className="text-white md:col-span-3">
          <h1 className="font-montserrat font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-white">Join our committee</span>
          </h1>

          <p className="font-montserrat font-normal mt-4 text-lg md:text-xl pb-4">
            Join our club committee and help shape epic tournaments, events, and
            the future of our gaming community!
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinOurCommittee;
