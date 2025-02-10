import React from 'react';
import Image from 'next/image';

const sponsors = [
    { name: "Aftershock", src: "/logos/sponsors/aftershock.png" },
    { name: "Centrecom", src: "/logos/sponsors/centrecom.png" },
    { name: "GIC", src: "/logos/sponsors/gic.png" },
    { name: "Gigabyte", src: "/logos/sponsors/gigabyte.png" },
    { name: "GXS", src: "/logos/sponsors/gxs.png" },
    { name: "HungryPanda", src: "/logos/sponsors/hungrypanda.png" },
];

const Sponsors: React.FC = () => {
    return (
        <section className="py-16 text-white text-center">
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
    )
}

export default Sponsors;
