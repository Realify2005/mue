import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchNotionDatabase } from '../components/api/fetchNotionDatabase';
import EventCard from '../components/events/EventCard';

export const metadata = {
  title: 'Events | MUE',
  description: 'Check out MUE\'s upcoming and past events!',
  openGraph: {
    title: 'Events | MUE',
    description: 'Check out MUE\'s upcoming and past events!',
    url: '/events',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Events | MUE",
    description: 'Check out MUE\'s upcoming and past events!',
  },
};

export const revalidate = 0;

const EventsPage: React.FC = async () => {
  const data = await fetchNotionDatabase();
  const now = new Date();
  const upcomingEvents = data.filter(event => new Date(event.date) >= now);
  const pastEvents = data.filter(event => new Date(event.date) < now);

  return (
    <>
      <Navbar />
      <div className="mt-4 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
          {upcomingEvents.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map(event => <EventCard key={event.name} event={event} />)}
            </div>
          ) : (
            <p>No upcoming events</p>
          )}
        <h1 className="text-4xl font-bold mt-12 mb-8">Past Events</h1>
          {pastEvents.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map(event => <EventCard key={event.name} event={event} />)}
            </div>
          ) : (
            <p>No past events</p>
          )}
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;