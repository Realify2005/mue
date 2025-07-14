'use client';

import React from 'react';
import Link from 'next/link';

const EsportsCTA = () => {
  return (
    <section className="text-center py-16 px-6 rounded-xl max-w-xl mx-auto">
      <h2 className="text-MUE-yellow text-3xl md:text-4xl font-extrabold">Got A Question?</h2>
      <p className="text-white text-lg font-semibold my-6">Send us a message on Discord!</p>

      <Link
        href="https://discord.gg/NHAFvPqTDt"
        target="_blank"
        className="inline-block bg-MUE-yellow hover:bg-yellow-400 text-black text-lg px-6 py-3 rounded-full transition"
      >
        CONTACT US <span className="ml-2">&gt;</span>
      </Link>
    </section>
  );
};

export default EsportsCTA;
