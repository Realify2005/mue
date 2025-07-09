import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutCommittee from '../components/about/AboutCommittee';
import AboutHeroSection from '../components/about/AboutHeroSection';
import Timeline from '../components/about/Timeline';
import ImageCarousel from '../components/about/ImageCarousel';
import FrequentlyAskedQuestions from '../components/about/FrequentlyAskedQuestions';
import { fetchPhotos } from '../components/api/fetchGalleryPhoto';

export const revalidate = 0;

export const metadata = {
  title: 'About Us | MUE',
  description: 'Learn more about Melbourne University Esports as a club.',
  openGraph: {
    title: 'About Us | MUE',
    description: 'Learn more about Melbourne University Esports as a club.',
    url: '/games',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us | MUE",
    description: 'Learn more about Melbourne University Esports as a club.',
  },
}

const AboutPage: React.FC = async () => {
  const photos = await fetchPhotos();
  return (
    <>
      <Navbar />

      <AboutHeroSection />
      <Timeline />
      <AboutCommittee />
      <FrequentlyAskedQuestions />
      <ImageCarousel slides={photos}/>

      <Footer />
    </>
  );
};

export default AboutPage;