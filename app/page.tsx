import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ClubHighlights from './components/home/ClubHighlights'
import GetInTouch from './components/home/GetInTouch'
import HeroSection from './components/home/HeroSection'
import Sponsors from './components/home/Sponsors'
import UpcomingEventsServer from './components/home/UpcomingEventsServer'

export const revalidate = 0;

const Home: React.FC = () => {
  
  return (
    <>
      {/* Light Blue Glowing Light Effect */}
      {/*<div
        className="
          absolute
          top-[-140px] left-[-100px]
          lg:top-[-200px] lg:left-[-200px]
          z-10
          w-[320px] h-[320px]
          lg:w-[520px] lg:h-[520px]
          rounded-full
          bg-[radial-gradient(circle,rgba(173,216,230,0.5)_0%,rgba(0,17,77,0)_70%)]
          pointer-events-none
        "
      />*/}

      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <HeroSection />
        <Sponsors />
        <ClubHighlights />
        <UpcomingEventsServer />
        <GetInTouch />
        <Footer />
      </div>
    </>
  )
}

export default Home;
