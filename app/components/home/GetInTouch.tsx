import React from 'react'
import Image from 'next/image'
import SocialMediaIcons from '../SocialMediaIcons'

const GetInTouch: React.FC = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="p-40 flex flex-col justify-center items-center bg-black text-white">
                <h2 className="my-12 text-4xl font-extrabold">Get In Touch</h2>
                <h6 className="my-4 text-2xl font-extrabold">Address:</h6>
                <p className="my-2 text-base text-white">Mailbox 122, First Floor Union House</p>
                <p className="my-2 text-base text-white">The University of Melbourne 3010, VIC</p>
                <h6 className="my-4 text-2xl font-extrabold">For enquiries, please email us at</h6>
                <a href="mailto:melbuniesports@gmail.com" className="my-2 text-base text-white">melbuniesports@gmail.com</a>
                <h6 className="my-4 text-2xl font-extrabold">Alternatively, feel free to chat to us on</h6>
                <a className="mb-24" href="https://discord.gg/unimelb" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="/logos/discord.png"
                        alt="Discord logo"
                        width={250}
                        height={200}
                    />
                </a>
                <SocialMediaIcons />
            </div>
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
    );
};

export default GetInTouch;
