import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import AboutCommittee from '../components/about/AboutCommittee';
import Timeline from '../components/about/Timeline';

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="relative bg-MUE-dark-blue text-MUE-white py-36 mb-40 px-12 w-full grid grid-cols-8 gap-16">
        <div className="col-span-5 flex flex-col justify-center ml-28">
          <h5 className="text-xl uppercase font-semibold">What We Do</h5>
          <h1 className="text-[84px] py-4 font-extrabold leading-tight">
            Uniting Gamers, <br /> Elevating Esports<span className="text-MUE-sky-blue">.</span>
          </h1>
          <h3 className="text-5xl mt-12 font-bold">How Two Communities Came Together</h3>
        </div>
        <div className="relative col-span-3 flex flex-col space-y-4">
          <div className="relative w-[400px] h-[400px]">
            <div className="absolute top-0 -left-40 -rotate-15 hover:z-10">
              <Image
                src="/photos/agm2024_photo_3.jpg"
                alt="Blue Sticky Note"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-40 right-0 rotate-15 hover:z-10">
              <Image
                src="/photos/agm2024_photo_5.jpg"
                alt="Yellow Sticky Note"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-80 -left-40 -rotate-15 hover:z-10">
              <Image
                src="/photos/agm2024_photo_4.jpg"
                alt="Pink Sticky Note"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Timeline />
      <AboutCommittee />
      

      <Footer />
    </>
  );
};

export default AboutPage;