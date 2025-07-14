'use client'
import React from 'react';
import TournamentCard from './TournamentCard';

interface Tournament {
  posterUrl: string;
  tournamentName: string;
  mode: string;
  game: string;
  start: string;
  end: string;
  streamLink: string;
  description: string;
}

type TournamentsSectionProps = {
  upcomingTournaments: Tournament[];
  pastTournaments: Tournament[];
};

const Tournaments: React.FC<TournamentsSectionProps> = ({
  upcomingTournaments,
  pastTournaments,
}) => {
  const [tab, setTab] = React.useState<'upcoming' | 'past'>('upcoming');
  const tournamentsToShow = tab === 'upcoming' ? upcomingTournaments : pastTournaments;

  return (
    <section className="py-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 bg-MUE-dark-blue-box p-4 rounded-lg gap-4">
        <h2 className="text-white text-3xl lg:text-4xl font-bold">Tournaments</h2>
        <div className="flex lg:space-x-4 text-lg">
          <button
            onClick={() => setTab('upcoming')}
            className={`transition ${
              tab === 'upcoming'
                ? 'text-black bg-MUE-lime px-4 py-1 rounded-full'
                : 'text-MUE-sky-blue px-4 py-1 rounded-full'
            }`}
          >
            UPCOMING
          </button>
          <button
            onClick={() => setTab('past')}
            className={`transition ${
              tab === 'past'
                ? 'text-black bg-MUE-lime px-4 py-1 rounded-full'
                : 'text-MUE-sky-blue px-4 py-1 rounded-full'
            }`}
          >
            PAST
          </button>
        </div>
      </div>

      {/* Cards */}
      {tournamentsToShow.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:justify-around gap-6 py-12">
          {tournamentsToShow.map((t, idx) => (
            <div key={idx} className="w-full lg:w-1/3 flex justify-center">
              <TournamentCard tournament={t} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-center mt-10">
          No {tab === 'upcoming' ? 'upcoming' : 'past'} tournaments available.
        </p>
      )}
    </section>
  );
};

export default Tournaments;
