import React from 'react'
import Image from 'next/image'

const OurDiscord: React.FC = () => {
    return (
        <div className="grid grid-cols-2">
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
        </div>
    )
}

export default OurDiscord