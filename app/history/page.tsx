import react from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
    title: 'Our History | MUE',
    description: 'Discover the history of how MUE has come along thus far',
    openGraph: {
      title: 'Our History | MUE',
      description: 'Discover the history of how MUE has come along thus far',
      url: '/history',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Our History | MUE",
      description: 'Discover the history of how MUE has come along thus far',
    },
}

const HistoryPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <p>TEXT TEXT TEXT</p>
            <p>TEXT TEXT TEXT</p>
            <p>TEXT TEXT TEXT</p>
            <p>TEXT TEXT TEXT</p>
            <p>TEXT TEXT TEXT</p>
            <p>TEXT TEXT TEXT</p>
            <p>TEXT TEXT TEXT</p>
            <p>TEXT TEXT TEXT</p>
            <p>TEXT TEXT TEXT</p>
            <Footer />
        </>
    )
}

export default HistoryPage