import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
    title: 'Membership | MUE',
    description: 'Our sponsors play a crucial role in our success. We are deeply grateful for their unwavering support and contributions. Thank you to all our sponsors for helping us thrive!',
    openGraph: {
      title: 'Membership | MUE',
      description: 'Our sponsors play a crucial role in our success. We are deeply grateful for their unwavering support and contributions. Thank you to all our sponsors for helping us thrive!',
      url: '/membership',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Membership | MUE",
      description: 'Our sponsors play a crucial role in our success. We are deeply grateful for their unwavering support and contributions. Thank you to all our sponsors for helping us thrive!',
    },
}

const SponsorsPage: React.FC = () => {
    return (
      <>
      <Navbar />
        <div className="mt-4 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-gradient-to-r from-green-400 to-blue-500">
          <h4 className="m-16 text-3xl font-semibold text-white">Our 2024 Sponsors</h4>
        </div>
      <Footer />
  </>
    )
}

export default SponsorsPage