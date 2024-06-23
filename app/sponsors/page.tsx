import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'


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
        <div className="mt-12 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-gradient-to-r from-green-400 to-blue-500">
          <h4 className="m-16 text-3xl font-semibold text-white">Our 2024 Sponsors</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-40 justify-center items-center">
              <Image
                src="/logos/games/minecraft.png"
                alt="minecraft logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/games/dota.webp"
                alt="dota 2 logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/games/destiny.png"
                alt="destiny 2 logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/games/smash.webp"
                alt="super smash bros logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/games/apex.jpeg"
                alt="apex legends"
                width={275}
                height={275}
              />
              <Image
                src="/logos/games/hearthstone.png"
                alt="hearthstone logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/games/r6.webp"
                alt="rainbow 6 siege logo"
                width={275}
                height={275}
              />
            </div>
        </div>
      <Footer />
  </>
    )
}

export default SponsorsPage