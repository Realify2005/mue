import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ESportsinUnimelb from '../components/history/ESportsinUnimelb'
import LanguageBarrier from '../components/history/LanguageBarrier'
import TheAffiliation from '../components/history/TheAffilitation'
import TheRebranding from '../components/history/TheRebranding'


export const metadata = {
    title: 'Our History | MUE',
    description: 'Discover the history of how MUE has come along thus far.',
    openGraph: {
      title: 'Our History | MUE',
      description: 'Discover the history of how MUE has come along thus far.',
      url: '/history',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Our History | MUE",
      description: 'Discover the history of how MUE has come along thus far.',
    },
}

const HistoryPage: React.FC = () => {
    return (
        <>
            <Navbar />
              <div className="mt-12 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-cover bg-center bg-no-repeat bg-[url('../public/background/history_bg_1.png')]">
                <h4 className="my-16 text-3xl font-semibold text-white">The History of MUE</h4>
                {/* Purposely put the content inside background so that shown background is the top part of image */}
                <div className="py-12 px-8 md:px-96 w-screen flex flex-col space-y-12 bg-gray-600">
                  <ESportsinUnimelb />
                  <LanguageBarrier />
                  <TheAffiliation />
                  <TheRebranding />
                </div>
              </div>
            <Footer />
        </>
    )
}

export default HistoryPage