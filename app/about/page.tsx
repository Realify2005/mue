import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutCommittee from '../components/about/AboutCommittee';
import AboutHeroSection from '../components/about/AboutHeroSection';
import Timeline from '../components/about/Timeline';
import ImageCarousel from '../components/about/ImageCarousel';
import FrequentlyAskedQuestions from '../components/about/FrequentlyAskedQuestions';

export const revalidate = 0;

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <AboutHeroSection />
      <Timeline />
      <AboutCommittee />
      <ImageCarousel />
      <FrequentlyAskedQuestions />

      <Footer />
    </>
  );
};

export default AboutPage;