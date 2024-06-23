import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CasualGames from '../components/games/Casual'
import CompetitiveGames from '../components/games/Competitive'
import Image from 'next/image'

export const metadata = {
    title: 'Focused Games | MUE',
    description: 'MUE currently focuses on these games when planning events and activities.',
    openGraph: {
      title: 'Focused Games | MUE',
      description: 'MUE currently focuses on these games when planning events and activities.',
      url: '/games',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Focused Games | MUE",
      description: 'MUE currently focuses on these games when planning events and activities.',
    },
}

const GamesPage: React.FC = () => {
    return (
        <>
            <Navbar />
              <div className="mt-12 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-cover bg-bottom bg-no-repeat bg-[url('../public/background/games_bg_1.jpg')]">
                <h4 className="m-12 text-3xl font-semibold text-white">Focused Games</h4>
                <h6 className="mb-20 text-1xl font-semibold text-white">
                  MUE focuses on these games when planning events and activities, and the list includes both PC and mobile games. 
                  This list is not exhaustive, however - when we see a growing demand and popularity in other games, 
                  we&apos;ll add them to this list! Other games not on this list can also be found in <a className="bg-purple-600" href="https://discord.gg/unimelb">our discord</a> under misc-games.
                </h6>
              </div>
              <div className="py-12 px-8 md:px-24 w-screen flex flex-col justify-center items-center bg-black">
                  <h3 className="mb-20 md:mb-0 text-4xl font-semibold text-white">Casual</h3>
                    <CasualGames />
                  <h3 className="my-24 md:my-20 text-4xl font-semibold text-white">Competitive</h3>
                    <CompetitiveGames />
                  <p className="mt-20 text-white font-light leading-relaxed">
                    * MUE boasts its own roster of competitive teams actively participating in a range of inter-university tournaments across multiple gaming titles. 
                    While these games are predominantly played at a competitive level, we embrace gamers of all backgrounds, including those who prefer a more casual gaming experience. 
                    Don&apos;t hesitate to join our Discord server, where you can connect with fellow gamers, find teammates, and dive into the gaming world, regardless of your skill level or playstyle!
                  </p>
              </div>
            <Footer />
        </>
    )
}

export default GamesPage
