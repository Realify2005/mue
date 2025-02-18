import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutMUE: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-40 flex flex-col justify-center items-center bg-blue-600">
            <h3 className="my-10 text-4xl font-extrabold text-white">About MUE</h3>
            <p className="my-6 text-base text-white">Melbourne University Esports [MUE] is a club of the University of Melbourne, Australia, devoted to one of the fastest-growing interests in the world, E&#x2011;sports! Simply put, we&apos;re a club of gamers, by gamers, for gamers!</p>
            <p className="my-6 text-base text-white">MUE hosts a wide range of activities both on- and off-campus, whether it be tournaments, LAN parties, game-learning workshops or simply online sessions! Join scrawls of other Esports gamers like you to party up in games! Build your sense of pride in the game that you have always known and loved!</p>
            <p className="my-6 text-base text-white">We focus on some of the most popular Esports games, and each game will have its own community and range of activities. MUE celebrates the diversity within the wider gaming community and hopes that all new players, regardless of his/her language, will be welcomed and integrated into the Unimelb gaming community.</p>
            <button className="bg-white text-black font-bold py-2 px-4 hover:bg-gray-300 transition duration-300">
                <Link href="/history">
                  Read More
                </Link>
            </button>
            </div>
                <div className="relative h-screen md:h-full">
                    <Image
                    src="/photos/home_photo_1.jpg"
                    alt="Picture of a group of people attending an in-person event hosted by MUE"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover w-full"
                />
            </div>
        </div>
    )
}

export default AboutMUE
