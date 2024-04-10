import React from 'react'
import Navbar from './components/Navbar'
import LandingSection from './components/home/LandingSection'
import GetInTouch from './components/home/GetInTouch'
import Footer from './components/Footer'
import WelcometoMUE from './components/home/WelcometoMUE'
import AboutMUE from './components/home/AboutMUE'
import OurDiscord from './components/home/OurDiscord'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <LandingSection />
      <WelcometoMUE />
      <div className="grid grid-cols-1 grid-flow-row">
        <AboutMUE />
        <OurDiscord />
        <GetInTouch />
      </div>
      <Footer />
    </>
  )
}

export default Home;
