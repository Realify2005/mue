'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CommitteeMember } from '../interfaces/CommitteeMember';

interface CommitteeMembersProps {
  members: CommitteeMember[];
}

const displayedRoles = [
  "President",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Head of Technical",
  "Head of Publicity",
  "Head of Events"
];

const CommitteeMembers: React.FC<CommitteeMembersProps> = ({ members }) => {

  const filteredMembers = members.filter(member => displayedRoles.includes(member.role));

  // Sort the filteredMembers array based on the order of roles in displayedRoles
  const sortedMembers = filteredMembers.sort((a, b) => {
    return displayedRoles.indexOf(a.role) - displayedRoles.indexOf(b.role);
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center bg-MUE-dark-blue py-16 px-4" ref={ref}>
      <h2 className="text-3xl md:text-4xl font-bold text-MUE-sky-blue text-center mb-12">
        Meet Your 2025 Committee
      </h2>
      
      { /* First row (4 members) */ }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 max-w-5xl">
        {sortedMembers.slice(0, 4).map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: index * 0.3, duration: 1 }}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
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
          </motion.div>
        ))}
      </div>
      
      { /* Second row (3 members) */ }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 max-w-5xl mt-8">
        {sortedMembers.slice(4).map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: (index + 4) * 0.3, duration: 1 }}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeMembers;