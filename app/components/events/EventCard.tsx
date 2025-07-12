import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import { tagColors } from './tagColors';

interface Event {
  id?: number;
  affiliatedThirdParties: string;
  tags: string[];
  location: string;
  finalised: boolean;
  name: string;
  posterUrl: string;
  externalLink?: string | null;
  isNext?: boolean;
  mostRecent?: boolean;
  date?: string;
}

type EventCardProps = { event: Event };

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="shrink-0 w-80 snap-start">
      <div className="flex flex-col h-full rounded-2xl bg-MUE-dark-dark-blue-content overflow-hidden cursor-pointer filter drop-shadow-[0_0_20px_var(--MUE-sky-blue)] transition-transform hover:scale-105">
        {/* Poster + NEXT UP badge */}
        <div className="relative h-80">
          {(event.isNext || event.mostRecent) && (
            <span className="absolute top-4 left-4 bg-MUE-yellow text-black text-sm font-bold px-3 py-1 rounded-lg z-10">
              {event.mostRecent ? 'MOST RECENT' : 'NEXT UP'}
            </span>
          )}
          <Image
            src={event.posterUrl}
            alt={event.name}
            fill
            style={{ objectFit: 'cover' }}
            className="object-cover"
          />
        </div>

        {/* Body */}
        <div className="p-6 flex-1 flex flex-col justify-between items-center text-center">
          <div className="flex flex-col items-center gap-2">
            {/* Event title */}
            <h3 className="text-white text-2xl font-semibold">
              {event.name}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-2">
              {event.tags.map((tag, idx) => {
                const colourClass = tagColors[tag] ?? 'bg-gray-400 text-black';
                return (
                  <span
                    key={idx}
                    className={`text-sm font-medium px-3 py-1 rounded-full ${colourClass}`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            {/* Datetime */}
            <p className="text-MUE-sky-blue text-base mt-4">
              {event.date ? dayjs(event.date).format('D MMM YYYY, h:mm A') : ''}
            </p>

            {/* Location */}
            <p className="text-MUE-white text-base">
              {event.location}
            </p>
          </div>

          {/* DETAILS button */}
          {event.externalLink && (
            <Link
              href={event.externalLink}
              target="_blank"
              className="mt-4 inline-block bg-MUE-sky-blue hover:bg-MUE-sky-blue-hover text-black text-base font-bold py-2 px-6 rounded-full transition"
            >
              DETAILS&nbsp;&#x276F;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
