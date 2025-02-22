'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PastCommitteeMember } from '../interfaces/PastCommitteeMember';

const displayedRoles = [
  "President",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Head of Technical",
  "Head of Publicity",
  "Head of Events"
];

const PastCommittee: React.FC = () => {
  const [committeeData, setCommitteeData] = useState<Record<string, PastCommitteeMember[]>>({});

  useEffect(() => {
    fetch('/pastCommitteeData.json')
      .then((response) => response.json())
      .then((data) => setCommitteeData(data))
      .catch((error) => console.error('Error loading committee members:', error));
  }, []);

  console.log(committeeData);

  return (
    <div className="flex flex-col items-center bg-MUE-dark-blue py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-MUE-sky-blue text-center mb-12">
        Past Committee Members
      </h2>
      {Object.keys(committeeData).sort((a, b) => b.localeCompare(a)).map((year) => (
        <div key={year} className="mb-16 w-full max-w-6xl">
          <h3 className="text-2xl font-bold text-MUE-white text-center mb-6">{year}-{parseInt(year)+1}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {committeeData[year].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg bg-white">
                  {member.image ? (
                    <Image src={member.image} alt={""} width={128} height={128} className="object-cover w-full h-full" />
                  ) : (
                    <div className="w-full h-full bg-gray-300"></div>
                  )}
                </div>
                <p className="mt-2 text-MUE-white font-bold">{member.name}</p>
                <p className="text-MUE-sky-blue italic">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastCommittee;
