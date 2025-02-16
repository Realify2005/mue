'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CommitteeMember } from '../interfaces/CommitteeMember';

interface CommitteeMembersProps {
  members: CommitteeMember[];
}

const CommitteeMembers: React.FC<CommitteeMembersProps> = ({ members }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center bg-MUE-dark-blue py-16 px-4" ref={ref}>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12">
        Meet Your 2025 Committee
      </h2>
      
      { /* First row (4 members) */ }
      <div className="grid grid-cols-4 gap-20 max-w-5xl">
        {members.slice(0, 4).map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: index * 0.3, duration: 1 }}
          >
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
          </motion.div>
        ))}
      </div>
      
      { /* Second row (3 members) */ }
      <div className="grid grid-cols-3 gap-20 max-w-5xl mt-8">
        {members.slice(4).map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: (index + 4) * 0.3, duration: 1 }}
          >
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeMembers;