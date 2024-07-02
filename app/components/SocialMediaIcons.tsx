import React from 'react'
import Image from 'next/image'

const SocialMediaIcons: React.FC = () => {
    return (
        <div className="flex justify-between items-center gap-6">
            <a href="https://www.facebook.com/MelbUniEsports/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/logos/icons/facebook.png"
                    alt="facebook icon"
                    width={50}
                    height={50}
                />
            </a>
            <a href={process.env.MUE_DISCORD_PERMALINK} target="_blank" rel="noopener noreferrer">
                <Image
                    src="/logos/icons/discord.png"
                    alt="discord icon"
                    width={50}
                    height={50}
                />
            </a>
            <a href="https://www.instagram.com/melbuniesports/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/logos/icons/instagram.png"
                    alt="instagram icon"
                    width={50}
                    height={50}
                />
            </a>
            <a href="https://www.linkedin.com/company/melbourne-university-esports" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/logos/icons/linkedin.png"
                    alt="linkedin icon"
                    width={50}
                    height={50}
                />
            </a>
            <a href="https://twitter.com/MelbUniEsports" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/logos/icons/twitter.png"
                    alt="twitter icon"
                    width={50}
                    height={50}
                />
            </a>
            <a href="https://www.youtube.com/@MelbourneUniversityEsports" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/logos/icons/youtube.png"
                    alt="youtube icon"
                    width={50}
                    height={50}
                />
            </a>
        </div>
    )
}

export default SocialMediaIcons