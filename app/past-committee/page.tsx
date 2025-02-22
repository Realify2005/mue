import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CurrentCommittee from '../components/past-committee/CurrentCommittee';
import PastCommittee from '../components/past-committee/PastCommittee';

export const metadata = {
  title: 'Past Committee | MUE',
  description: 'The dedicated team over the years who has helped built MUE into what it is today.',
  openGraph: {
    title: 'Past Committee | MUE',
    description: 'The dedicated team over the years who has helped built MUE into what it is today.',
    url: '/games',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Past Committee | MUE",
    description: 'The dedicated team over the years who has helped built MUE into what it is today.',
  },
}

const PastCommitteePage: React.FC = () => {
  return (
    <>
      <Navbar />

      <CurrentCommittee />
      <PastCommittee />

      <Footer />
    </>
  );
};

export default PastCommitteePage;