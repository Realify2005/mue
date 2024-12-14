import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import LinkBar from '../components/LinkBar'

const LinkPage = () => {
  return (
    <>
        <Navbar />
            <div className="mt-12 px-5 py-8 md:px-80 flex flex-col justify-center items-center bg-white">
            <Image className="rounded-full" src="/logos/MUE_no_words.webp" width={200} height={200} alt="muelogo" />
            <div className='mt-12 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl'>@MelbUniEsports</h1>
                    <p className='text-2xl'>Your home of Esports and Gaming at @unimelb! 🏆🎮</p>
                </div>
                
                <LinkBar title="🎮MUE Membership 2025! 🎮" link="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/" image="/logos/icons/umsu.png"/>
                <div className='mt-8 flex flex-col justify-center items-center'>
                    <p className='text-2xl'>🙌 JOIN US 🙌</p>
                </div>
                <LinkBar title="👾 MUE Discord Server 👾" link="https://discord.gg/VvXuE2NGX6" image="/logos/icons/discord.png"/>
                <LinkBar title="📸MUE Instagram📸" link="https://www.instagram.com/melbuniesports/" image="/logos/icons/instagram.png"></LinkBar>
                <LinkBar title="MUE 小红书" link="https://www.xiaohongshu.com/user/profile/6596163500000000220065a5" image="/logos/icons/w.webp"></LinkBar>
                <LinkBar title="📱MUE Facebook📱" link="https://www.facebook.com/MelbUniEsports/" image="/logos/icons/facebook.png"></LinkBar>
                <LinkBar title="MUE WeChat 微信" link="https://u.wechat.com/kPJgYn2Wn1W2P9MC7gyqKU8" image="/logos/icons/wechat.png"></LinkBar>
                <LinkBar title="🎬MUE TikTok🎬" link="https://www.tiktok.com/@melbuniesports" image="/logos/icons/tiktok.png"></LinkBar>
            </div>
        <Footer />
    </>
  )
}

export default LinkPage 