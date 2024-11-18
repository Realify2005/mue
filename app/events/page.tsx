import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchEventsInfo } from '../components/api/fetchEventsInfo';
import { fetchMostRecentEventsNotionUpdate } from '../components/api/fetchMostRecentEventsNotionUpdate';
import EventsPageContent from '../components/events/EventsPageContent';

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
  const data = await fetchEventsInfo();
  const now = new Date();
  const past30Days = new Date();
  past30Days.setDate(now.getDate() - 30);

  const mostRecentUpdate = await fetchMostRecentEventsNotionUpdate();
  const lastUpdatedAt = new Date(mostRecentUpdate).toLocaleString('en-GB', {
    timeZone: 'Australia/Sydney',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const upcomingEvents = data.filter(event => new Date(event.date) >= now);
  const pastEvents = data.filter(event => new Date(event.date) < now && new Date(event.date) >= past30Days);

  return (
    <>
      <Navbar />
      <div className="mt-12 px-5 py-8 md:px-80 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('../public/background/events_bg_1.jpg')]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="my-12 text-3xl font-semibold text-white bg-black inline-block">Events</h2>
          <p className="mb-12 text-1xl font-semibold text-white bg-black">
            Browse through our exciting list of events. Lots of fun here!
          </p>
        </div>
      </div>
      {/* Pass events data to the client-side component */}
      <EventsPageContent
        upcomingEvents={upcomingEvents}
        pastEvents={pastEvents}
        lastUpdatedAt={lastUpdatedAt}
      />
      <Footer />
    </>
  );
};

export default EventsPage;
