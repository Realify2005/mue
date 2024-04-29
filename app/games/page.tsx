import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
    title: 'Focused Games | MUE',
    description: 'MUE currently focuses on these games when planning events and activities',
    openGraph: {
      title: 'Focused Games | MUE',
      description: 'MUE currently focuses on these games when planning events and activities',
      url: '/games',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Focused Games | MUE",
      description: 'MUE currently focuses on these games when planning events and activities',
    },
}

const GamesPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="mt-12 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-cover bg-center bg-no-repeat bg-[url('../public/background/games_bg_1.jpg')]">
                <h4 className="m-12 text-3xl font-semibold text-white">Focused Games</h4>
                <h6 className="mb-20 text-1xl font-semibold text-white">
                  MUE currently focused on these games when planning events and activities, and the list includes both PC and mobile games. This list is not exhaustive, however - 
                  when we see a growing demand and popularity in other games, we&apos;ll add them to this list!
                </h6>
              </div>
              <div className="py-12 px-8 md:px-96 w-screen flex flex-col justify-center items-center space-y-12 bg-black">
                  <h3 className="text-4xl font-semibold text-white">PC Games</h3>
              </div>
            <Footer />
        </>
    )
}

export default GamesPage
