import React from 'react'
import Image from 'next/image'

const MUExUMSU: React.FC = () => {
    return (
        <div className="flex flex-col mt-6 justify-center items-center md:flex-row">
            <Image
                src="/logos/UMSU.webp"
                alt="UMSU logo"
                width={275}
                height={200}
            />
            <Image
                src="/logos/MUE.png"
                alt="MUE logo"
                width={200}
                height={200}
            />
        </div>
    )
}

export default MUExUMSU