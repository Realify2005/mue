'use client'
import React from 'react'
import Link from 'next/link'
import '@fontsource/audiowide'

const HeroSection: React.FC = () => {
  return (
    <section
      className="
        relative w-full md:h-screen bg-MUE-dark-blue
        overflow-hidden px-8 lg:px-40 pt-24 pb-36
        flex items-center bg-cover bg-center
        bg-[url('/photos/gic2024_photo_5.jpg')]
      "
    >
      {/* gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-MUE-dark-blue" />

      {/* content grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        {/* left text */}
        <div className="text-white">
          <h1 className="font-montserrat font-bold leading-tight text-4xl sm:text-5xl lg:text-[64px]">
            <span
              className="
                block
                mb-4
                bg-clip-text text-transparent
                bg-[linear-gradient(to_right,#46C8F0_0%,#EB7BBE_40%,#FED729_80%)]
              "
            >
              The Heart Of
            </span>
            <span
              className="
                block
                bg-clip-text text-transparent
                bg-[linear-gradient(to_right,#46C8F0_0%,#EB7BBE_40%,#FED729_80%)] pb-2
              "
            >
              University Gaming
            </span>
          </h1>

          <p className="font-montserrat font-bold mt-4 text-lg md:text-xl pb-4">
            Join Melbourne&apos;s Largest Gaming Club
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"
              target="_blank"
              className="
                bg-MUE-sky-blue hover:bg-MUE-sky-blue-hover
                text-white font-bold py-3 px-6 rounded-full
                transition flex items-center gap-2 text-MUE-dark-dark-blue-content
              "
            >
              BECOME A MEMBER <span className="text-xl">&#x276F;</span>
            </Link>

            <Link
              href="https://discord.gg/NHAFvPqTDt"
              target="_blank"
              className="
                border-2 border-MUE-sky-blue hover:border-MUE-sky-blue-hover
                text-MUE-sky-blue hover:text-white
                font-bold py-3 px-6 rounded-full
                transition
              "
            >
              OUR DISCORD
            </Link>
          </div>
        </div>

        {/* right side stays as background-image — remove this block if you want an <img> instead */}
        <div className="hidden md:block" />
      </div>
    </section>
  )
}

export default HeroSection
