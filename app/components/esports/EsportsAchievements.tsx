'use client';

import React from 'react';

type Achievement = {
  medal: string | null;
  placement: string;
  tournament: string;
  category: string;
  period: string;
};

type Props = {
  achievements: Achievement[];
};

const EsportsAchievements: React.FC<Props> = ({ achievements }) => {
  return (
    <section className="px-6 py-16 text-white max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Achievements</h2>
      <div className="space-y-4 text-lg">
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 gap-x-6 items-center"
          >
            {/* Placement (with emoji) */}
            <div className="flex items-center gap-2 font-medium min-w-[120px]">
              <span>{ach.medal}</span>
              <span>{ach.placement}</span>
            </div>

            {/* Tournament */}
            <div className="truncate">{ach.tournament}</div>

            {/* Category */}
            <div className="truncate">{ach.category}</div>

            {/* Period */}
            <div className="text-MUE-sky-blue truncate">{ach.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EsportsAchievements;
