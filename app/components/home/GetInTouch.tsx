import React from 'react';
import Link from 'next/link';

const GetInTouch: React.FC = () => {
    return (
        <section className="py-32 text-center text-white">
            <h2 className="text-4xl font-bold">Get in touch</h2>
            <p className="mt-2 text-lg text-gray-300">
            Want to become part of supporting the gaming culture at UniMel&apos;s biggest gaming club?
            </p>
            <Link
            href="mailto:melbuniesports@gmail.com"
            className="mt-6 inline-block bg-[#46C8F0] text-black font-bold py-3 lg:px-6 rounded-full text-xl hover:bg-[#2694D1] transition shadow-md"
            >
            Become a Sponsor →
            </Link>
        </section>
    )
}

export default GetInTouch;
