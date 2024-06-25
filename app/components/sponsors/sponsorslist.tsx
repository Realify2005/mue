import React from 'react'
import Image from 'next/image'

const SponsorsList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-40 justify-center items-center">
            <Image
            src="/logos/sponsors/aftershock.png"
            alt="aftershock logo"
            width={275}
            height={275}
            />
            <Image
            src="/logos/sponsors/centrecom.jpg"
            alt="centrecom logo"
            width={275}
            height={275}
            />
            <Image
            src="/logos/sponsors/gic.png"
            alt="gic logo"
            width={275}
            height={275}
            />
            <Image
            src="/logos/sponsors/gigabyte.png"
            alt="gigabyte logo"
            width={275}
            height={275}
            />
            <Image
            src="/logos/sponsors/gxs.png"
            alt="gxs logo"
            width={275}
            height={275}
            />
            <Image
            src="/logos/sponsors/hungrypanda.png"
            alt="hungry panda logo"
            width={275}
            height={275}
            />
        </div>
    )
}

export default SponsorsList