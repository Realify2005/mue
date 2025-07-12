'use client';

import React, { useState } from 'react';
import EventCard from './EventCard';

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

interface EventsPageContentProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
  lastUpdatedAt: string;
}

const EventsPageContent: React.FC<EventsPageContentProps> = ({
  upcomingEvents,
  pastEvents,
  lastUpdatedAt,
}) => {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

  const eventsToShow = tab === 'upcoming' ? upcomingEvents : pastEvents;

  // Mark first event as next upcoming
  if (tab === 'upcoming' && eventsToShow.length > 0) {
    eventsToShow[0].isNext = true;
  }
  
  const mostRecentEvent = [...pastEvents]
    .filter(e => e.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())[0];

  if (mostRecentEvent) {
    mostRecentEvent.mostRecent = true;
  }


  return (
    <section className="px-5 py-16 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Discover Events</h2>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setTab('upcoming')}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition 
              ${tab === 'upcoming'
                ? 'bg-MUE-sky-blue text-black'
                : 'border border-MUE-sky-blue text-MUE-sky-blue hover:bg-MUE-sky-blue hover:text-black'}
            `}
          >
            UPCOMING
          </button>
          <button
            onClick={() => setTab('past')}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition 
              ${tab === 'past'
                ? 'bg-MUE-sky-blue text-black'
                : 'border border-MUE-sky-blue text-MUE-sky-blue hover:bg-MUE-sky-blue hover:text-black'}
            `}
          >
            PAST
          </button>
        </div>
      </div>

      {/* Event Cards */}
      <div className="flex flex-col items-center">
        {eventsToShow.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {eventsToShow.map((event) => (
              <EventCard key={event.name} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">No events available.</p>
        )}
      </div>
    </section>
  );
};

export default EventsPageContent;
