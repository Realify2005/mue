'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WeeklyOnlineEvents: React.FC = () => {
  return (
    <section className="px-6 lg:px-60">
      <h2 className="text-4xl font-extrabold text-white text-center py-20">
        Other Events
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start rounded-2xl overflow-hidden shadow-2xl">
        <div className="w-full md:w-1/2">
          <Image
            src="/photos/gic2025_photo_2.jpg"
            alt="Weekly Online Events"
            width={800}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-8 w-full md:w-1/2 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <span className="inline-block bg-MUE-pink text-sm px-3 py-1 rounded-full font-semibold">
              Casual
            </span>
            <span className="inline-block bg-MUE-sky-blue text-sm px-3 py-1 rounded-full font-semibold">
              Online
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Weekly Online Customs</h3>
          <p className="mb-6 text-lg leading-relaxed">
            Join us weekly for custom online matches and good vibes — meet fellow players, play for fun, and chill from the comfort of your home!
          </p>
          <Link
            href="https://www.instagram.com/p/DId2UpiTMdd/"
            className="inline-block text-base font-semibold border border-MUE-sky-blue text-MUE-sky-blue px-5 py-2.5 rounded-full hover:bg-MUE-sky-blue hover:text-black transition"
          >
            Full Schedule →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WeeklyOnlineEvents;
