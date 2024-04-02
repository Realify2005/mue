import React from 'react'
import Image from 'next/image'
import LandingSection from './components/LandingSection'
import GetInTouch from './components/home/GetInTouch'
import Footer from './components/Footer'
import WelcometoMUE from './components/home/WelcometoMUE'

const Home: React.FC = () => {
  return (
    <div>
      <LandingSection />
      <div className="flex justify-center items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y_fLIxCPSaQ?si=W3tCGvYiruMbPej_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <WelcometoMUE />
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
        <GetInTouch />
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
