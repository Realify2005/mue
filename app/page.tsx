import React from 'react'
import Image from 'next/image'
import LandingSection from './components/LandingSection'
import GetInTouch from './components/home/GetInTouch'
import Footer from './components/Footer'
import WelcometoMUE from './components/home/WelcometoMUE'
import AboutMUE from './components/home/AboutMUE'
import OurDiscord from './components/home/OurDiscord'

const Home: React.FC = () => {
  return (
    <div>
      <LandingSection />
      <div className="flex justify-center items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y_fLIxCPSaQ?si=W3tCGvYiruMbPej_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <WelcometoMUE />
      <div className="grid grid-cols-1 grid-flow-row">
        <AboutMUE />
        <OurDiscord />
        <GetInTouch />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
