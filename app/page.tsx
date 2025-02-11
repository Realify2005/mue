'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ClubHighlights from './components/home/ClubHighlights'
import GetInTouch from './components/home/GetInTouch'
import HeroSection from './components/home/HeroSection'
import Sponsors from './components/home/Sponsors'

const Home: React.FC = () => {

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <HeroSection />
      <Sponsors />
      <ClubHighlights />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Home;
