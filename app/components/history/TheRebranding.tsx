import React from 'react'
import Image from 'next/image'

const TheRebranding: React.FC = () => {
    return(
        <div className="flex flex-col space-y-12 justify-center items-left">
            <span>
            <h6 className="text-1xl font-semibold text-white">
                The Rebranding
            </h6>
            <p className="text-white font-light">
                Around the end of 2023, the committee has decided to rebrand the club&apos;s name. University of Melbourne Esports Association (UMESA) has been rebranded into Melbourne University Esports (MUE). We also came up a brand new logo as part of rebranding.
            </p>
            </span>
            <div className="flex justify-center items-center space-x-16">
            <Image 
                src="/logos/UMESA_transparent.png"
                alt="UMESA logo"
                width={275}
                height={200}
            />
            <Image 
                src="/logos/icons/right-arrow.png"
                alt="Right Arrow Logo"
                width={150}
                height={150}
            />
            <Image 
                src="/logos/MUE_transparent.png"
                alt="MUE logo"
                width={275}
                height={200}
            />
            </div>
        </div>
    )
}

export default TheRebranding;