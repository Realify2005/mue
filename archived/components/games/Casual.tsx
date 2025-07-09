import React from 'react'
import Image from 'next/image'

const CasualGames: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-40 justify-center items-center">
        <Image
          src="/logos/games/minecraft.png"
          alt="minecraft logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/dota.webp"
          alt="dota 2 logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/destiny.png"
          alt="destiny 2 logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/smash.webp"
          alt="super smash bros logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/apex.jpeg"
          alt="apex legends"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/hearthstone.png"
          alt="hearthstone logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/r6.webp"
          alt="rainbow 6 siege logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/marvel_rivals.png"
          alt="marvel rivals logo"
          width={275}
          height={275}
        />
        <Image
          src="/logos/games/osu.png"
          alt="osu logo"
          width={275}
          height={275}
        />
      </div>
    )
}

export default CasualGames