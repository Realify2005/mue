import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata = {
    title: 'Sponsors | MUE',
    description: 'Thank you so much to our sponsors!',
    openGraph: {
      title: 'Sponsors | MUE',
      description: 'Thank you so much to our sponsors!',
      url: '/sponsors',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Sponsors | MUE",
      description: 'Thank you so much to our sponsors!',
    },
}

const SponsorsPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Footer />
        </>
    )
}

export default SponsorsPage