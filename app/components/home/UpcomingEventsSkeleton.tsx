'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { tagColors } from '../events/tagColors';

interface Event {
  id: number;
  affiliatedThirdParties: string;
  tags: string[];
  location: string;
  finalised: boolean;
  name: string;
  posterUrl: string;
  externalLink?: string | null;
  isNext: boolean;
  datetime: string;
}

const UpcomingEvents = ({ events }: { events: Event[] }) => {
  const [paused, setPaused] = useState(false);
  const animation = useAnimation();
  
  // Mark the first event as the next upcoming event
  if (events.length > 0) {
    events[0].isNext = true;
  }

  const startAnimation = () => {
    animation.start({
      x: "-100%",
      transition: { ease: "linear", duration: 100, repeat: Infinity },
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
  }, [animation]);

  // Duplicate events array 20 times to ensure smooth looping for carousel
  const duplicatedEvents = Array.from({ length: 20 }, () => events).flat();

  return (
    <section className="relative w-full bg-MUE-dark-dark-blue py-32 px-8 lg:px-40 overflow-hidden">
      <h2 className="text-white text-3xl md:text-4xl font-bold uppercase">
        UPCOMING&nbsp;
        <Link href="/events" target="_blank" className="text-MUE-sky-blue hover:text-MUE-sky-blue-hover">
          EVENTS &#x276F;
        </Link>
      </h2>

      <div
        className="mt-6 flex items-center relative h-[550px] w-full overflow-x-auto snap-x snap-mandatory"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          key={1}
          className="flex gap-6"
          animate={animation}
        >
        {duplicatedEvents.map((event, index) => (
          <div key={index} className="shrink-0 w-64 md:w-80 md:h-128 snap-start">
            <motion.div
              className="flex flex-col h-full rounded-xl bg-MUE-dark-dark-blue-content overflow-hidden cursor-pointer filter drop-shadow-[0_0_15px_var(--MUE-sky-blue)]
"
              whileHover={{ scale: 1.05 }}
            >
              {/* Poster + NEXT UP badge */}
              <div className="relative h-60">
                {event.isNext && (
                  <span className="absolute top-2 left-2 bg-MUE-yellow text-black text-xs font-bold px-2 py-2 rounded z-50">
                    NEXT&nbsp;UP
                  </span>
                )}
                <Image
                  src={event.posterUrl}
                  alt={event.name}
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between items-center text-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  {/* Event title */}
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {event.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2 justify-center">
                    {event.tags.map((tag, i) => {
                      const colourClass = tagColors[tag] ?? "bg-blue-300";

                      return (
                        <span
                          key={i}
                          className={`
                            text-xs font-medium px-2 py-1 rounded-full text-MUE-dark-dark-blue-content
                            ${colourClass}
                          `}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Date • Duration */}
                  <p className="text-MUE-sky-blue text-sm mb-1">
                    {event.datetime}
                  </p>

                  {/* Location */}
                  <p className="text-MUE-white text-sm mb-4">
                    {event.location}
                  </p>
                </div>

                {/* DETAILS button */}
                {event.externalLink && (
                  <Link
                    href={event.externalLink}
                    target="_blank"
                    className="inline-block self-center bg-MUE-sky-blue hover:bg-MUE-sky-blue-hover text-black text-base py-1 px-3 rounded-full transition text-MUE-dark-dark-blue-content"
                  >
                    DETAILS&nbsp;&#x276F;
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        ))}


        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
