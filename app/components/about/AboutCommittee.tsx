import React from 'react';
import Image from 'next/image';
import { fetchCommitteeInfo } from "../api/fetchCommitteeInfo";

const displayedRoles = [
  "President",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Head of Technical",
  "Head of Publicity",
  "Head of Events"
];

const AboutCommittee: React.FC = async () => {
  const members = await fetchCommitteeInfo();
  const filteredMembers = members.filter(member => displayedRoles.includes(member.role));

  // Sort the filteredMembers array based on the order of roles in displayedRoles
  const sortedMembers = filteredMembers.sort((a, b) => {
    return displayedRoles.indexOf(a.role) - displayedRoles.indexOf(b.role);
  });

  return (
    <div className="flex flex-col items-center bg-MUE-dark-blue py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12">
        Meet Your 2025 Committee
      </h2>
      
      { /* First row (4 members) */ }
      <div className="grid grid-cols-4 gap-20 max-w-5xl">
        {sortedMembers.slice(0, 4).map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-MUE-white font-bold">{member.name}</p>
            <p className="text-MUE-sky-blue italic">{member.role}</p>
          </div>
        ))}
      </div>
      
      { /* Second row (3 members) */ }
      <div className="grid grid-cols-3 gap-20 max-w-5xl mt-8">
        {sortedMembers.slice(4).map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-MUE-white font-bold">{member.name}</p>
            <p className="text-MUE-sky-blue italic">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCommittee;