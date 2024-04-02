import React from 'react'
import Image from 'next/image'
import Header from './components/Header'
import MUExUMSU from './components/MUExUMSU'
import ContactUs from './components/home/ContactUs'
import Footer from './components/Footer'

const Home: React.FC = () => {
  return (
    <div>
      <div className="grid gap-5 justify-items-center align-items-center">
        <div className="flex justify-center p-5">
          <Header />
        </div>
        <MUExUMSU />
        <h2 className="text-4xl font-extrabold dark:text-white">Melbourne University Esports (MUE)</h2>
        <p className="text-base">The best of Unimelb spirit, now in e-sports</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y_fLIxCPSaQ?si=W3tCGvYiruMbPej_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="mt-12 px-80 flex flex-col justify-center items-center py-20 bg-cover bg-center bg-no-repeat bg-[url('../public/background/home_bg_1.jpg')]">
        <h1 className="my-12 text-6xl font-extrabold text-white">Welcome to MUE&apos;ss Official Website</h1>
        <p className="my-6 text-base text-white">As Unimelb&apos;ss official esports club, our very aim is to promote esports and develop students&apos;s talents in esports that they may have suppressed due to academic commitments. </p>
        <p className="my-6 text-base text-white">On this website, you can check out all about UMESA - our upcoming events, focused games, sponsors&apos;s information and membership benefits, the committee, and even the history of MUE&apos;ss founding! Feel free to take your time to navigate round this site!</p>
      </div>
      <div className="grid grid-cols-2 grid-flow-row">
        <div className="p-40 flex flex-col justify-center items-center bg-blue-600">
          <h2 className="my-10 text-4xl font-extrabold text-white">About MUE</h2>
          <p className="my-6 text-base text-white">Melbourne University Esports (MUE) is a club of the University of Melbourne, Australia, devoted to one of the fastest-growing interests in the world – E-sports! Simply put, we’re a club of gamers, by gamers, for gamers!</p>
          <p className="my-6 text-base text-white">MUE hosts a wide range of activities both on- and off-campus, whether it be tournaments, LAN parties, game-learning workshops or simply online sessions! Join scrawls of other E-sport gamers like you to party up in games! Build your sense of pride in the game that you have always known and loved!</p>
          <p className="my-6 text-base text-white">We focus on some of the most popular E-sport games, and each game will have its own community and range of activities. MUE celebrates the diversity within the wider gaming community and hopes that all new players, regardless of his/her language, will be welcomed and integrated into the Unimelb gaming community.</p>
          <button className="bg-white text-black font-bold py-2 px-4 hover:bg-gray-300 transition duration-300">Read More</button>
        </div>
        <div className="relative h-full">
          <Image
              src="/photos/home_photo_1.jpg"
              alt="Picture of a group of people attending an in-person event hosted by MUE"
              layout="fill"
              objectFit="cover"
              className="object-cover"
          />
        </div>
        <div className="relative h-full">
          <Image 
            src="/photos/home_photo_2.jpg"
            alt="Screenshot of #general chat inside MUE's discord server"
            height={5000}
            width={1000}
            objectFit="cover"
            className="object-cover"
          />
          <Image 
            src="/photos/home_photo_3.png"
            alt="Weekly Games inside MUE's discord server"
            height={5000}
            width={1000}
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="p-40 flex flex-col justify-center items-center bg-gray-600">
          <h2 className="my-10 text-4xl font-extrabold text-white">Our Discord</h2>
          <p className="my-6 text-base text-white">Seeking companions for your gaming adventures? Explore no further than our Discord server – a thriving hub within the Australian esports community. Find mates to queue ranked with, esports watch party, participate in your favorite games&apos; customs and tournaments - all in one place.</p>
          <iframe src="https://discord.com/widget?id=483256492762595328&theme=dark" width="500" height="500" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
        <ContactUs />
        <div className="relative h-full">
          <Image 
            src="/photos/home_photo_4.jpg"
            alt="Picture of MUE stand inside of Trinity College Foundation Studies"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
