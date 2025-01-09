import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import LinkBar from '../components/LinkBar';

const LinkPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 px-2 py-8 lg:px-40 flex flex-col justify-center items-center bg-gradient-to-b from-teal-500 to-blue-500">
        <Image className="rounded-full" src="/logos/MUE_no_words.webp" width={75} height={75} alt="muelogo" />

        <div className="mt-6 flex flex-col justify-center items-center">
          <h1 className="text-xl text-white text-center">@MelbUniEsports</h1>
          <p className="text-lg text-white text-center">Your home of Esports and Gaming at @unimelb! 🏆🎮</p>
        </div>

        <LinkBar title="🎮MUE Membership 2025! 🎮" link="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/" image="/logos/icons/umsu.png"/>

        <div className="mt-6 flex flex-col justify-center items-center">
          <p className="text-lg text-white">🙌 JOIN US 🙌</p>
        </div>

        <LinkBar title="👾 MUE Discord Server 👾" link="https://discord.gg/VvXuE2NGX6" image="/logos/icons/discord.png" />
        <LinkBar title="📸MUE Instagram📸" link="https://www.instagram.com/melbuniesports/" image="/logos/icons/instagram.png" />
        <LinkBar title="🌐MUE WEBSITE 🌐" link="https://www.melbuniesports.com/" image="/logos/MUE.png" />
        <LinkBar title="MUE 小红书" link="https://www.xiaohongshu.com/user/profile/6596163500000000220065a5" image="/logos/icons/w.webp" />
        <LinkBar title="📱MUE Facebook📱" link="https://www.facebook.com/MelbUniEsports/" image="/logos/icons/facebook.png" />
        <LinkBar title="MUE WeChat 微信" link="https://u.wechat.com/kPJgYn2Wn1W2P9MC7gyqKU8" image="/logos/icons/wechat.png" />
        <LinkBar title="🎬MUE TikTok🎬" link="https://www.tiktok.com/@melbuniesports" image="/logos/icons/tiktok.png" />

        <div className="mt-4 flex flex-col justify-center items-center">
          <p className="mt-6 text-lg text-white">Contact</p>
        </div>

        <LinkBar title="Sponsors/Marketing Contact" link="mailto:publicity.melbuniesports@gmail.com" image="/logos/icons/shakehands.png" />
      </div>
      <Footer />
    </>
  );
};

export default LinkPage;
