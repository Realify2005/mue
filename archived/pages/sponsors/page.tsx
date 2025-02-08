/* import React from 'react'
//import Navbar from '../components/Navbar'
//import Footer from '../components/Footer'
import Link from 'next/link'
//import SponsorsList from '../components/sponsors/sponsorslist'

export const metadata = {
    title: 'Sponsors | MUE',
    description: 'Our sponsors play a crucial role in our success. We are deeply grateful for their unwavering support and contributions. Thank you to all our sponsors for helping us thrive!',
    openGraph: {
      title: 'Sponsors | MUE',
      description: 'Our sponsors play a crucial role in our success. We are deeply grateful for their unwavering support and contributions. Thank you to all our sponsors for helping us thrive!',
      url: '/sponsors',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Sponsors | MUE",
      description: 'Our sponsors play a crucial role in our success. We are deeply grateful for their unwavering support and contributions. Thank you to all our sponsors for helping us thrive!',
    },
}

const SponsorsPage: React.FC = () => {
    return (
      <>
      <Navbar />
        <div className="mt-4 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-gradient-to-r from-green-400 to-blue-500">
          <h4 className="my-16 text-3xl font-semibold text-white">Our 2024 Sponsors</h4>
          <h5 className="mb-5 text-2xl font-semibold text-center text-white">We sincerely thank all of our sponsors who help keep our club alive and thriving. Their generosity helps MUE provide quality gaming equipment and wonderful events as well as membership benefits that are accessible to all members.</h5>
          <h6 className="mb-20 mt-5 md:mt-0 text-1xl font-semibold text-white">Want to become a sponsor? <a className="text-blue-700 underline hover:text-blue-900" href="mailto:publicity.melbuniesports@gmail.com">Email us</a> or join <a className="text-blue-700 underline hover:text-blue-900" href="https://discord.gg/unimelb">our discord</a> and chat with us!</h6>
            <SponsorsList />
          <p className="mt-20 mb-10 text-black font-light text-1xl leading-relaxed">* Full list of membership benefits can be found <Link className="text-blue-700 underline hover:text-blue-900" href="/membership">here</Link></p>
        </div>
      <Footer />
  </>
    )
}

export default SponsorsPage */