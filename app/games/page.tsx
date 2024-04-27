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
            <Footer />
        </>
    )
}

export default GamesPage
