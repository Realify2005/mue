import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

interface Tournament {
  posterUrl: string;
  tournamentName: string;
  mode: string; // 'Online' or 'LAN'
  game: string;
  start: string;
  end: string;
  streamLink: string;
  description: string;
}

type TournamentCardProps = {
  tournament: Tournament;
};

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament }) => {
  const formattedDate = dayjs(tournament.start).format('D MMM YYYY, h:mm A');

  // Mode color based on "Online" or "LAN"
  const modeColor =
    tournament.mode === 'LAN'
      ? 'bg-MUE-pink'
      : 'bg-MUE-sky-blue';

  return (
    <div className="shrink-0 w-80 snap-start">
      <div className="flex flex-col h-full rounded-2xl bg-MUE-dark-dark-blue-content overflow-hidden cursor-pointer filter drop-shadow-[0_0_20px_var(--MUE-sky-blue)] transition-transform hover:scale-105">
        {/* Poster */}
        <div className="relative h-80">
          <Image
            src={tournament.posterUrl}
            alt={tournament.tournamentName}
            fill
            className="object-cover"
          />
        </div>

        {/* Body */}
        <div className="p-6 flex-1 flex flex-col justify-between items-center text-center">
          <div className="flex flex-col items-center gap-2">
            {/* Title */}
            <h3 className="text-white text-2xl font-semibold">
              {tournament.tournamentName}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-lime-300 text-black">
                Competitive
              </span>
              <span className={`text-sm font-medium px-3 py-1 rounded-full text-black ${modeColor}`}>
                {tournament.mode}
              </span>
            </div>

            {/* Date */}
            <p className="text-MUE-sky-blue text-base mt-4">{formattedDate}</p>
          </div>

          {/* Details button */}
          {tournament.streamLink && (
            <Link
              href={tournament.streamLink}
              target="_blank"
              className="mt-4 inline-block bg-MUE-sky-blue hover:bg-MUE-sky-blue-hover text-black text-base font-bold py-2 px-6 rounded-full transition"
            >
              DETAILS&nbsp;&#x276F;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
