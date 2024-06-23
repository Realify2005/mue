import React from 'react'

const WelcometoMUE: React.FC = () => {
    return (
        <div className="mt-12 px-5 md:px-80 flex flex-col justify-center items-center py-20 bg-cover bg-bottom bg-no-repeat bg-[url('../public/background/home_bg_2.jpg')]">
            <h1 className="my-12 text-6xl font-extrabold text-white">Welcome to MUE&apos;s Official Website</h1>
            <p className="my-6 text-base text-white">As Unimelb&apos;s official esports club, our very aim is to promote esports and develop students&apos;s talents in esports that they may have suppressed due to academic commitments. </p>
            <p className="my-6 text-base text-white">On this website, you can check out all about MUE - our upcoming events, focused games, sponsors&apos;s information and membership benefits, the committee, and even the history of MUE&apos;ss founding! Feel free to take your time to navigate round this site!</p>
        </div>
    )
}

export default WelcometoMUE