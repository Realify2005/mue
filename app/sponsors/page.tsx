import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'


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
          <h4 className="m-16 text-3xl font-semibold text-white">Our 2024 Sponsors</h4>
          <h5 className="mb-5 text-2xl font-semibold text-white">Our sponsors play a crucial role in our success. We are deeply grateful for their unwavering support and contributions. Thank you to all our sponsors for helping us thrive!</h5>
          <h6 className="mb-20 text-1xl font-semibold text-white">Want to become a sponsor? <a className="text-blue-700 underline hover:text-blue-900" href="publicity.melbuniesports@gmail.com">Email us</a> or join <a className="text-blue-700 underline hover:text-blue-900" href="https://discord.gg/unimelb">our discord</a> and chat with us!</h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-40 justify-center items-center">
              <Image
                src="/logos/sponsors/aftershock.png"
                alt="aftershock logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/sponsors/centrecom.jpg"
                alt="centrecom logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/sponsors/gic.png"
                alt="gic logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/sponsors/gigabyte.png"
                alt="gigabyte logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/sponsors/gxs.png"
                alt="gxs logo"
                width={275}
                height={275}
              />
              <Image
                src="/logos/sponsors/hungrypanda.png"
                alt="hungry panda logo"
                width={275}
                height={275}
              />
            </div>
            <p className="mt-20 mb-10 text-black font-light text-1xl leading-relaxed">* Full list of membership benefits can be found <Link className="text-blue-700 underline hover:text-blue-900" href="/membership">here</Link></p>
        </div>
      <Footer />
  </>
    )
}

export default SponsorsPage