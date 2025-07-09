import React from 'react'
import Image from 'next/image'

const CompetitiveGames: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-40">
        <Image
          src="/logos/games/valorant.png"
          alt="valorant logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/cs2.jpg"
          alt="cs2 logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/league.webp"
          alt="league logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/overwatch.png"
          alt="overwatch logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/rocket.png"
          alt="rocket league logo"
          width={275}
          height={275}
        />
      </div>
    )
}

export default CompetitiveGames