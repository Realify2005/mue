import React from 'react';
import Header from './components/header'
import MUExUMSU from './components/MUExUMSU'

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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y_fLIxCPSaQ?si=W3tCGvYiruMbPej_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="my-6 px-80 flex flex-col justify-center items-center py-20 bg-cover bg-center bg-no-repeat bg-[url('../public/background/home_bg_1.jpg')]">
        <h1 className="my-12 text-6xl font-extrabold text-white">Welcome to MUE's Official Website</h1>
        <p className="my-6 text-base text-white">As Unimelb's official esports club, our very aim is to promote esports and develop students' talents in esports that they may have suppressed due to academic commitments. </p>
        <p className="my-6 text-base text-white">On this website, you can check out all about UMESA - our upcoming events, focused games, sponsors' information and membership benefits, the committee, and even the history of UMESA's founding! Feel free to take your time to navigate round this site!</p>
      </div>
    </div>
  )
}

export default Home;
