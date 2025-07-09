import React from 'react';
import Image from 'next/image';

const AboutHeroSection: React.FC = () => {
    return (
        <div className="relative text-MUE-white py-4 md:py-24 lg:py-36 mb-40 px-8 lg:px-4 w-full grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col justify-center lg:ml-28">
                <h5 className="text-lg md:text-xl uppercase font-semibold">What We Do</h5>
                <h1 className="text-4xl py-4 mr-8 md:text-[84px] xl-about-hero-section:mr-28 2xl-about-hero-section:mr-8 font-extrabold leading-tight">
                    Uniting Gamers, <br /> Elevating Esports<span className="text-MUE-sky-blue">.</span>
                </h1>
                <h3 className="text-2xl mr-8 md:text-5xl xl-about-hero-section:mr-28 2xl-about-hero-section:mr-8 mt-8 lg:mt-12 font-bold">How Two Communities Came Together</h3>
            </div>
            <div className="relative lg:col-span-3 flex flex-col space-y-4 items-center lg:items-start">
                <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                    <div className="absolute top-10 lg:top-0 -left-15 md:-left-10 lg:-left-40 -rotate-15 hover:z-10">
                        <Image
                            src="/photos/agm2024_photo_3.jpg"
                            alt="Blue Sticky Note"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="absolute top-40 lg:top-40 right-0 rotate-15 hover:z-10">
                        <Image
                            src="/photos/agm2024_photo_5.jpg"
                            alt="Yellow Sticky Note"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="absolute top-60 lg:top-80 -left-15 md:-left-10 lg:-left-40 -rotate-15 hover:z-10">
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
    )
};

export default AboutHeroSection;