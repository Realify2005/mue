'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CommitteeMember } from '../interfaces/CommitteeMember';

interface CommitteeMembersProps {
  members: CommitteeMember[];
}

const categories = [
  { label: 'EXECUTIVES', match: 'Executive Committee' },
  { label: 'EVENTS', match: 'Events Department' },
  { label: 'PUBLICITY', match: 'Publicity Department' },
  { label: 'TECHNICAL', match: 'Technical Department' },
  { label: 'ESPORTS', match: 'Game/Esports Department' },
  { label: 'GENERAL', match: 'General' },
];

const roleStyles: { [key: string]: string } = {
  "President": "text-red-500 font-bold bg-red-100 px-3 py-1 rounded-lg shadow-sm",
  "Vice President": "text-blue-500 font-bold bg-blue-100 px-3 py-1 rounded-lg shadow-sm",
  "Secretary": "text-green-500 font-bold bg-green-100 px-3 py-1 rounded-lg shadow-sm",
  "Treasurer": "text-yellow-500 font-bold bg-yellow-100 px-3 py-1 rounded-lg shadow-sm",
  "Head of Technical": "text-purple-500 font-bold bg-purple-100 px-3 py-1 rounded-lg shadow-sm",
  "Head of Events": "text-orange-500 font-bold bg-orange-100 px-3 py-1 rounded-lg shadow-sm",
  "Head of Publicity": "text-pink-500 font-bold bg-pink-100 px-3 py-1 rounded-lg shadow-sm",
  "Head of Esports": "text-indigo-500 font-bold bg-indigo-100 px-3 py-1 rounded-lg shadow-sm",
  "Head of General": "text-cyan-500 font-bold bg-cyan-100 px-3 py-1 rounded-lg shadow-sm",
};

const CommitteeMembers: React.FC<CommitteeMembersProps> = ({ members }) => {
  const [activeTab, setActiveTab] = useState('EXECUTIVES');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const departmentMatch = categories.find((c) => c.label === activeTab)?.match;
  const filteredMembers = members
    .filter((member) => member.department?.includes(departmentMatch || ''))
    .sort((a, b) => {
      const aIsHead = a.role.toLowerCase().startsWith("head");
      const bIsHead = b.role.toLowerCase().startsWith("head");
      return Number(bIsHead) - Number(aIsHead); // department heads to be displayed first
    });

  return (
    <div className="min-h-screen py-24 px-6 text-white" ref={ref}>
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-MUE-sky-blue mb-12">
        Meet Your Committee
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActiveTab(cat.label)}
            className={`px-5 py-2 rounded-full border transition font-medium ${
              activeTab === cat.label
                ? 'bg-MUE-sky-blue text-black font-bold'
                : 'border-MUE-sky-blue text-MUE-sky-blue hover:bg-MUE-sky-blue hover:text-black'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center max-w-7xl mx-auto">
        {filteredMembers.map((member, index) => {
          const isExecutive = member.department.includes("Executive Committee");
          const isHead = member.role.toLowerCase().startsWith("head");
          const roleStyle =
            isExecutive || isHead
              ? roleStyles[member.role] || 'text-MUE-sky-blue font-semibold'
              : 'text-MUE-sky-blue';

          return (
            <motion.div
              key={member.name}
              className="flex flex-col items-center text-center"
              initial={{ x: -30, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 shadow-xl border-4 border-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={144}
                  height={144}
                  unoptimized
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-lg font-semibold">{member.name}</p>
              <p className={roleStyle}>{member.role}</p>
              {member.about && (
                <p className="text-gray-300 italic text-sm mt-2 px-4">{member.about}</p>
              )}
              {member.discord && (
                <p className="text-sm mt-1 text-gray-200">discord: <span className="font-mono">{member.discord}</span></p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CommitteeMembers;
