import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GetInTouch: React.FC = () => {
  return (
    <section className="px-6 py-8 lg:py-20 lg:px-96 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-MUE-yellow">
        Ready to power up the future of university esports?
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-white font-semibold my-8">
        Partner with us to support student gamers and esports events!
      </p>
      <Link
        href="mailto:melbuniesports@gmail.com"
        className="inline-block bg-MUE-yellow hover:bg-MUE-sky-blue text-black hover:text-white font-normal uppercase tracking-wide py-3 px-8 rounded-full text-lg sm:text-xl transition-shadow shadow-md"
      >
        Contact Us &gt;
      </Link>
    </section>
  );
}

export default GetInTouch;