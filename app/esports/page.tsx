import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { fetchEsportsAchievements } from '../components/api/fetchEsportsAchievements';
import { fetchEsportsTeamsInfo } from '../components/api/fetchEsportsTeamsInfo';
import { fetchEsportsTournaments } from '../components/api/fetchEsportsTournaments';
import Tournaments from '../components/esports/Tournaments';
import EsportsTeams from '../components/esports/EsportsTeams';
import EsportsAchievements from '../components/esports/EsportsAchievements';
import EsportsCTA from '../components/esports/EsportsCTA';

export const metadata = {
  title: 'Esports | MUE',
  description: 'Check out how MUE is committed to our local esports scene!',
  openGraph: {
    title: 'Esports | MUE',
    description: 'Check out how MUE is committed to our local esports scene!',
    url: '/esports',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Esports | MUE",
    description: 'Check out how MUE is committed to our local esports scene!',
  },
};

const esportsGames = [
  'League of Legends',
  'Marvel Rivals',
  'Valorant',
  'Overwatch 2',
  'Rocket League',
  'Counter Strike 2',
];

const EsportsPage: React.FC = async () => {
  const allTournaments = await fetchEsportsTournaments();
  const now = new Date();

  const teamsData: { [game: string]: any[] } = {};

  for (const game of esportsGames) {
    teamsData[game] = await fetchEsportsTeamsInfo(game);
  }

  const upcomingEvents = allTournaments
    .filter(t => new Date(t.start) >= now)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
    .slice(0, 3);

  const pastEvents = allTournaments
    .filter(t => new Date(t.start) < now)
    .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())
    .slice(0, 3);

  const achievements = await fetchEsportsAchievements();

  return (
    <>
      <Navbar />
      <div className="px-6 lg:px-60">
        <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Represent the <br />
              University in <span className="text-MUE-green">Esports</span>
            </h1>
            <p className="text-white text-base lg:text-2xl sm:text-lg mt-10">
              Think you&apos;ve got what it takes? Compete and represent the University in tournaments.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/photos/agm2024_photo_1.jpg"
              alt="University Esports Team"
              className="rounded-xl w-full h-auto object-cover"
              width={700}
              height={400}
            />
          </div>
        </section>
        
        <Tournaments
          upcomingTournaments={upcomingEvents}
          pastTournaments={pastEvents}
        />

        <EsportsTeams teamsData={teamsData} />

        <EsportsAchievements achievements={achievements} />

        <EsportsCTA />
      </div>
      <Footer />
    </>
  );
};

export default EsportsPage;
