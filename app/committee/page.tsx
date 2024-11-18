import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchCommitteeInfo } from '../components/api/fetchCommitteeInfo';

export const metadata = {
  title: 'Our Committee | MUE',
  description: 'Meet the dedicated team behind the fun at MUE! Introducing the 2024-2025 MUE Committee.',
  openGraph: {
    title: 'Our Committee | MUE',
    description: 'Meet the dedicated team behind the fun at MUE! Introducing the 2024-2025 MUE Committee.',
    url: '/committee',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Committee | MUE",
    description: 'Meet the dedicated team behind the fun at MUE! Introducing the 2024-2025 MUE Committee.',
  },
};

export const revalidate = 0;

const CommitteePage: React.FC = async () => {
  const data = await fetchCommitteeInfo();
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="mt-12 px-5 py-24 md:px-80 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('../public/background/committee_bg_1.jpg')]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="my-12 text-3xl font-semibold text-white bg-black inline-block">Our Committee</h2>
        </div>
      </div>
      <h1 className="text-5xl text-center py-48">2024-25 Committee reveal soon</h1> {/* Dummy text - Delete after */}
      <Footer />
    </>
  );
};

export default CommitteePage;