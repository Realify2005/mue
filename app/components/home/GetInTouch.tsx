import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GetInTouch: React.FC = () => {
  return (
    <section className="px-4 pb-16 lg:px-32 xl:px-56 lg:pb-32 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-64 items-center">
        <div className="text-center lg:text-left">
          <h2 className="mb-8 lg:mb-0 text-4xl xl:text-5xl font-bold">Get in touch</h2>
          <p className="mt-2 text-base xl:text-lg text-gray-300">
            Want to become part of supporting the gaming culture at Unimelb&apos;s biggest gaming club?
          </p>
          
          <div className="flex py-8 lg:py-0 justify-center lg:justify-end block lg:hidden">
            <Image 
              src="/photos/mue_stickers_photo.jpg"
              alt="Get in touch image"
              width={450} 
              height={350} 
              className="object-contain"
            />
          </div>

          <Link
            href="mailto:melbuniesports@gmail.com"
            className="mt-6 inline-block bg-MUE-sky-blue text-black font-bold py-3 px-6 rounded-full text-lg xl:text-xl hover:bg-MUE-sky-blue-hover transition shadow-md"
          >
            Become a Sponsor →
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end hidden lg:block">
          <Image 
            src="/photos/mue_stickers_photo.jpg"
            alt="Get in touch image"
            width={450} 
            height={350} 
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;