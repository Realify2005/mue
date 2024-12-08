import React from 'react'
import Image from 'next/image';

const LinkBar: React.FC<{title: string, link: string, image: string }> = ({title, link, image}) => {
  return (
    <a href={link}>
        <div className="bg-white border border-black rounded-lg p-4 flex items-center shadow-solid w-[700px] h-20 mt-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-hidden">
            <Image src={image} alt='link-image' width={40} height={40}/>
            <div className="text-center">
                <p className="text-2xl mx-36 text-center">{title}</p>
            </div>
        </div>
    </a>
  )
}

export default LinkBar