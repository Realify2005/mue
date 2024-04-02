import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center p-8 bg-gray-900">
            <p className="my-4 text-base text-white">Check us out on our other social medias!</p>
            <SocialMediaIcons />
            <p className="my-20 text-sm text-white">Melbourne University Esports (MUE) is a club affiliated with the University of Melbourne Union Clubs & Societies (UMSU)</p>
        </div>
    )
}

export default Footer