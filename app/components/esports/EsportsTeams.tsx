'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Player = {
  name: string;
  discord: string;
  gamerTag: string;
  game: string;
  team: string[];
  role: string[];
  logo: string;
};

type Props = {
  teamsData: { [game: string]: Player[] };
};

const gameList = [
  { name: 'LOL', key: 'League of Legends', logo: 'league.svg' },
  { name: 'MARVEL RIVALS', key: 'Marvel Rivals', logo: 'rivals.svg' },
  { name: 'VALORANT', key: 'Valorant', logo: 'val.svg' },
  { name: 'OW2', key: 'Overwatch 2', logo: 'ow2.svg' },
  { name: 'ROCKET LEAGUE', key: 'Rocket League', logo: 'rl.svg' },
  { name: 'CS2', key: 'Counter Strike 2', logo: 'cs2.svg' },
];

const EsportsTeams: React.FC<Props> = ({ teamsData }) => {
  const [selectedGame, setSelectedGame] = useState('League of Legends');
  const players = teamsData[selectedGame] ?? [];

  const divisions = players.reduce((acc: Record<string, Player[]>, player) => {
    (player.team || []).forEach(team => {
      if (!acc[team]) acc[team] = [];
      acc[team].push(player);
    });
    return acc;
  }, {});

  return (
    <section className="py-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-2">
        <h2 className="text-white text-3xl font-bold">Esports Teams</h2>
        <p className="text-sm text-MUE-sky-blue font-medium">Updated for 2025 Semester 1</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-6 mb-8">
        {gameList.map(game => (
          <button
            key={game.key}
            onClick={() => setSelectedGame(game.key)}
            className={`flex text-md items-center gap-2 px-4 py-2 rounded-full border-2 transition ${
              selectedGame === game.key
                ? 'bg-MUE-lime text-black border-MUE-lime'
                : 'text-MUE-lime border-MUE-lime hover:border-white hover:text-white'
            }`}
          >
            <Image
              src={`/logos/games/svg_icons/${
                selectedGame === game.key
                  ? game.logo.replace('.svg', '_black.svg')
                  : game.logo.replace('.svg', '_lime.svg')
              }`}
              alt={game.name}
              width={30}
              height={30}
            />
            <span className="font-medium">{game.name}</span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-MUE-esports-dark-blue-box text-white rounded-xl py-12 px-4 sm:px-6 lg:px-20 space-y-10 max-w-4xl mx-auto overflow-x-auto">
        <h3 className="text-center text-2xl font-bold">{selectedGame.toUpperCase()}</h3>

        {Object.entries(divisions).map(([division, members]) => (
          <div key={division} className="space-y-4 min-w-[600px]">
            <p className="text-MUE-white text-xl font-semibold uppercase">{division}</p>

            {/* Header */}
            <div className="flex justify-around text-MUE-lime font-semibold text-lg">
              <div className="w-1/3 text-center">Discord ID</div>
              <div className="w-1/3 text-center">Game ID</div>
              <div className="w-1/3 text-center">Position</div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {members.map((player, idx) => (
                <div key={idx} className="flex justify-around text-md text-white">
                  <div className="w-1/3 text-center">{player.discord}</div>
                  <div className="w-1/3 text-center">{player.gamerTag}</div>
                  <div className="w-1/3 text-center">{player.role.join('/')}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EsportsTeams;
