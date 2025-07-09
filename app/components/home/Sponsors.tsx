import React from 'react';
import Image from 'next/image';

const sponsors = [
    { name: "Aftershock", src: "/logos/sponsors/aftershock.png" },
    { name: "Centrecom", src: "/logos/sponsors/centrecom.png" },
    { name: "GIC", src: "/logos/sponsors/gic.png" },
    { name: "Gigabyte", src: "/logos/sponsors/gigabyte.png" },
    { name: "HungryPanda", src: "/logos/sponsors/hungrypanda.png" },
];

const Sponsors: React.FC = () => {
    return (
        <>
            <div className="text-center my-16">
                <p className="text-MUE-white text-center font-inter text-20 font-bold leading-normal">
                Proudly Sponsored By
                </p>
            </div>
            <section className="pb-16 text-white text-center">
                <div className="mt-6 flex flex-wrap justify-center items-center gap-24">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex justify-center">
                    <Image 
                        src={sponsor.src} 
                        alt={sponsor.name} 
                        width={150} 
                        height={90} 
                        className="object-contain"
                    />
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}

export default Sponsors;
