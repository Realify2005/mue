/* import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { faqs } from '../components/faq/faqs'

export const metadata = {
    title: 'Frequently Asked Questions | MUE',
    description: 'Find answers to common questions about Melbourne University Esports (MUE), including information about our events, teams, and how to get involved.',
    openGraph: {
      title: 'Frequently Asked Questions | MUE',
      description: 'Find answers to common questions about Melbourne University Esports (MUE), including information about our events, teams, and how to get involved.',
      url: '/faq',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Frequently Asked Questions | MUE",
      description: 'Find answers to common questions about Melbourne University Esports (MUE), including information about our events, teams, and how to get involved.',
    },
}

const FAQPage: React.FC = () => {
    return (
      <>
      <Navbar />
        <div className="mt-4 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-cover bg-center bg-no-repeat bg-[url('../public/background/faq_bg_1.jpg')]">
          <h4 className="my-16 text-3xl font-semibold text-center text-white">Frequently Asked Questions</h4>
          <div className="bg-white w-screen flex flex-col justify-center items-center">
            <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-8 sm:py-12 lg:px-8 lg:py-16">
              <dl className="space-y-8 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                    <dd className="mt-4 lg:col-span-7 lg:mt-0">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="my-6 max-w-2xl text-base text-center leading-7">
              Have a different question and can&apos;t find the answer you&apos;re looking for? Reach out to our committee by{' '}
              <a href="mailto:publicity.melbuniesports@gmail.com" className="font-semibold text-indigo-400 hover:text-indigo-300">
                sending us an email
              </a>{' '}
              and we&apos;ll get back to you as soon as we can.
            </p>
            <p className="my-6 max-w-2xl text-base text-center leading-7">
                For quicker response time, please join our discord and chat with our committee team.
            </p>
            <a className="mb-12" href={process.env.MUE_DISCORD_PERMALINK} target="_blank" rel="noopener noreferrer">
                <Image 
                    src="/logos/discord.png"
                    alt="Discord logo"
                    width={250}
                    height={200}
                />
            </a>
          </div>
        </div>
      <Footer />
  </>
    )
}

export default FAQPage; */