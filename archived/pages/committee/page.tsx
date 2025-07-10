/*import React, { Suspense } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchCommitteeInfo } from '../components/api/fetchCommitteeInfo';
import CommitteeSkeleton from '../components/committee/CommitteeSkeleton';


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

const roleStyles: { [key: string]: string } = {
  "President": "text-red-500 font-bold bg-red-100 px-3 py-1 rounded-lg shadow-sm",
  "Vice President": "text-blue-500 font-bold bg-blue-100 px-3 py-1 rounded-lg shadow-sm",
  "Secretary": "text-green-500 font-bold bg-green-100 px-3 py-1 rounded-lg shadow-sm",
  "Treasurer": "text-yellow-500 font-bold bg-yellow-100 px-3 py-1 rounded-lg shadow-sm",
  "Head of Technical": "text-purple-500 font-bold bg-purple-100 px-3 py-1 rounded-lg shadow-sm",
  "Head of Events": "text-orange-500 font-bold bg-orange-100 px-3 py-1 rounded-lg shadow-sm",
  "Head of Publicity": "text-pink-500 font-bold bg-pink-100 px-3 py-1 rounded-lg shadow-sm",
};


const CommitteePage: React.FC = async () => {
  // Fetch committee data
  const data = await fetchCommitteeInfo();
  const executives = data.filter((member: any) => member.department[0] === 'Executive Committee');
  const technical = data.filter((member: any) => member.department[0] === 'Technical Department');
  const events = data.filter((member: any) => member.department[0] === 'Events Department');
  const publicity = data.filter((member: any) => member.department[0] === 'Publicity Department');
  const games = data.filter((member: any) => member.department[0] === 'Game/Esports Department');

  return (
    <>
      <Navbar />

      {/* Hero Section
      <div className="px-5 py-24 md:px-80 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('../public/background/committee_bg_1.jpg')]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="my-12 text-3xl font-semibold text-white bg-black inline-block">
            2024-25 Committee
          </h2>
        </div>
      </div>

      <Suspense fallback={<CommitteeSkeleton />}>
        {/* Render Departments
        {[
          { title: 'Executives', data: executives, bg: 'bg-gray-100' },
          { title: 'Technical Department', data: technical, bg: 'bg-white' },
          { title: 'Events Department', data: events, bg: 'bg-gray-100' },
          { title: 'Publicity Department', data: publicity, bg: 'bg-white' },
          { title: 'Game/Esports Department', data: games, bg: 'bg-gray-100' },
        ].map((section) => (
          <div key={section.title} className={`text-MUE-black py-12 px-5 md:px-32 ${section.bg}`}>
            <h3 className="text-4xl font-semibold text-center mb-8">{section.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.data.map((member: any) => {
                const roleStyle = roleStyles[member.role] || "text-gray-600"; // Default style
                return (
                  <div
                    key={member.name}
                    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      height={128}
                      width={128}
                      className="w-32 h-32 rounded-full mb-4"
                    />
                    <h4 className="text-xl font-semibold">{member.name}</h4>
                    <p className={`mb-4 ${roleStyle}`}>{member.role}</p>
                    <p className="text-gray-700 italic text-center mb-4">{member.about}</p>
                    <p className="text-gray-800">discord: {member.discord}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Suspense>

      {/* Disclaimer
      <div className="py-6 px-5 md:px-32 bg-gray-200 text-center">
        <p className="text-sm text-gray-600 italic">
          This page may not include all committee members.
        </p>
      </div>
      
      <Footer />
    </>
  );
};

export default CommitteePage;*/
