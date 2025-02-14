'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface Event {
  id: number;
  posterUrl: string;
  date: string;
  month: string;
  title: string;
  isNext: boolean;
}

const tagColors: { [key: string]: string } = {
  "📅 Weeklies": 'bg-pink-200',
  "🏆 Tournament": 'bg-yellow-200',
  "🌏 Collab": 'bg-purple-200',
  "📚 Trivia": 'bg-green-200',
  "❄️ Winterfest": "bg-blue-200",
  "✨ Special": "bg-orange-100"
};

const UpcomingEvents = ({ events }: { events: Event[] }) => {
  const [paused, setPaused] = useState(false);
  const animation = useAnimation();

  const startAnimation = () => {
    animation.start({
      x: "-100%",
      transition: { ease: "linear", duration: 15, repeat: Infinity },
    });
  };

  const pauseAnimation = () => {
    animation.stop();
  };

  const handleMouseEnter = () => {
    setPaused(true);
    pauseAnimation();
  };

  const handleMouseLeave = () => {
    setPaused(false);
    startAnimation();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  // Duplicate events array 20 times to ensure smooth looping for carousel
  const duplicatedEvents = Array.from({ length: 20 }, () => events).flat();

  return (
    <section className="relative w-full bg-MUE-dark-blue py-32 px-8 lg:px-40 overflow-hidden">
      <h2 className="text-white text-2xl font-bold uppercase">
        UPCOMING&nbsp;
        <Link href="https://discord.gg/NHAFvPqTDt" target="_blank" className="text-MUE-sky-blue hover:text-MUE-sky-blue-hover">
          EVENTS &#x276F;
        </Link>
      </h2>

      <div
        className="mt-6 relative w-full overflow-x-auto snap-x snap-mandatory"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          key={1}
          className="flex gap-6"
          animate={animation}
        >
          {duplicatedEvents.map((event, index) => (
            <motion.div
              key={`${event.id}-${index}`}
              className="bg-MUE-white rounded-xl shadow-lg overflow-hidden w-64 shrink-0 cursor-pointer snap-start h-fit"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-60 bg-MUE-white flex items-center justify-center">
                {event.isNext && (
                  <span className="absolute top-2 left-2 bg-MUE-yellow text-black text-xs font-bold px-2 py-1 z-10 rounded">
                    NEXT UP
                  </span>
                )}
                <Image
                  src={event.posterUrl}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 bg-black text-white flex items-center">
                <div className="text-MUE-sky-blue text-3xl font-bold leading-none flex flex-col items-center">
                  {event.date}
                  <p className="text-MUE-white text-xs uppercase tracking-wide">{event.month}</p>
                </div>
                <p className="ml-3 text-lg font-semibold leading-tight">{event.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
