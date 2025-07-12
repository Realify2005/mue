'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Highlight = {
  title: string;
  description: string;
  button: { text: string; href: string };
  imageSrc: string;
  reverse?: boolean;
};

const highlights: Highlight[] = [
  {
    title: 'Weekly Games Night (Discord)',
    description: 'Join us in our Discord server with over 3000+ members for weekly games!',
    button: { text: 'DISCORD >', href: process.env.MUE_DISCORD_PERMALINK || 'https://discord.gg/NHAFvPqTDt' },
    imageSrc: '/photos/gic2024_photo_5.jpg',
  },
  {
    title: 'Esport Tournaments',
    description: 'Got a competitive edge? Sign up for our inter-uni esport tournaments.',
    button: { text: 'ESPORTS ›', href: '/games' },
    imageSrc: '/photos/gic2025_photo_1.jpg',
    reverse: true,
  },
  {
    title: 'Friday Weekly Games',
    description: 'Join us on campus every Friday with 2000+ students for casual and competitive play.',
    button: { text: 'DISCORD ›', href: process.env.MUE_DISCORD_PERMALINK || 'https://discord.gg/NHAFvPqTDt' },
    imageSrc: '/photos/weeklies2025_photo_1.jpg',
  },
];

const ClubHighlights: React.FC = () => (
  <section className="bg-MUE-dark-dark-blue pt-16 px-8 2xl:px-80 text-white">
    <h2 className="text-center text-3xl md:text-5xl font-bold text-MUE-sky-blue mb-12">
      The Gaming Community for Everyone
    </h2>

    <div className="space-y-32 my-16 md:my-32">
      {highlights.map((h, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-x-32"
        >
          {/* Text side */}
          <div className={h.reverse ? 'md:order-2 bg-MUE-dark-dark-blue' : 'bg-MUE-dark-dark-blue'}>
            <h3 className="text-4xl font-bold mb-4">{h.title}</h3>
            <p className="text-2xl text-gray-200 mb-6">{h.description}</p>
            <Link
              href={h.button.href}
              target="_blank"
              className="inline-block bg-MUE-sky-blue hover:bg-MUE-sky-blue-hover text-black font-normal py-2 px-5 rounded-full transition"
            >
              {h.button.text}
            </Link>
          </div>

          {/* Image side */}
          <div className={h.reverse ? 'md:order-1' : undefined}>
            <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-[0_0_20px_var(--MUE-sky-blue)]">
              <Image
                src={h.imageSrc}
                alt={h.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ClubHighlights;
