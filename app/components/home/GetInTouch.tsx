import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GetInTouch: React.FC = () => {
    return (
    <section className="px-56 py-32 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-64 items-center">
        <div className="text-left">
          <h2 className="text-5xl font-bold">Get in touch</h2>
          <p className="mt-2 text-lg text-gray-300">
            Want to become part of supporting the gaming culture at Unimelb&apos;s biggest gaming club?
          </p>
          <Link
            href="mailto:melbuniesports@gmail.com"
            className="mt-6 inline-block bg-MUE-sky-blue text-black font-bold py-3 lg:px-6 rounded-full text-xl hover:bg-[#2694D1] transition shadow-md"
          >
            Become a Sponsor →
          </Link>
        </div>
        <Image 
          src="/photos/mue_stickers_photo.jpg"
          alt="Get in touch image"
          width={450} 
          height={350} 
          className="object-contain"
        />
      </div>
    </section>
    )
}

export default GetInTouch;
