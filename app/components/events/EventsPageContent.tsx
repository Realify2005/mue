'use client';

import React, { useState } from 'react';
import EventCard from './EventCard';

interface Event {
  affiliatedThirdParties: string;
  tags: string[];
  location: string;
  finalised: boolean;
  date: string;
  posterUrl: string;
  duration: string;
  name: string;
  externalLink?: string;
}

interface EventsPageContentProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
  lastUpdatedAt: string;
}

const categories = [
  "📅 Weeklies",
  "🏆 Tournament",
  "🌏 Collab",
  "📚 Trivia",
  "❄️ Winterfest",
  "✨ Special"
];

const EventsPageContent: React.FC<EventsPageContentProps> = ({ upcomingEvents, pastEvents, lastUpdatedAt }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredUpcomingEvents = selectedCategory 
    ? upcomingEvents.filter(event => event.tags.includes(selectedCategory)) 
    : upcomingEvents;

  const filteredPastEvents = selectedCategory 
    ? pastEvents.filter(event => event.tags.includes(selectedCategory)) 
    : pastEvents;

  return (
    <div className="bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
      {/* Category Filters */}
      <div className="flex justify-center space-x-4 pt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 rounded-lg border-2 transition ${
              selectedCategory === category 
                ? 'border-blue-500 bg-blue-100' 
                : 'border-gray-300'
            } hover:shadow-lg`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="px-5 pb-5 md:px-80 flex flex-col justify-center items-center py-20">
        <p className="text-sm text-gray-500 mb-4">
          All times shown are in <span className="font-bold text-black">AEST</span>.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Last updated at {lastUpdatedAt}. 
        </p>

        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
        {filteredUpcomingEvents.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUpcomingEvents.map(event => <EventCard key={event.name} event={event} />)}
          </div>
        ) : (
          <p>No upcoming events for this category :(</p>
        )}

        <h1 className="text-4xl font-bold mt-12 mb-8">Past Events</h1>
        {filteredPastEvents.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPastEvents.map(event => <EventCard key={event.name} event={event} />)}
          </div>
        ) : (
          <p>No past events in the last 30 days for this category</p>
        )}

        <p className="text-sm text-gray-500 my-4">
          Only events held in the past <span className="font-bold text-black">30 days</span> are shown. 
        </p>
      </div>
    </div>
  );
};

export default EventsPageContent;
