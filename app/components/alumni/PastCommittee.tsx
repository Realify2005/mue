'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { PastCommitteeMember } from '../interfaces/PastCommitteeMember';

const Avatar: React.FC<{ src?: string; alt: string; size?: number }> = ({ src, alt, size = 128 }) => {
  const [errored, setErrored] = useState(false);
  if (!src || errored) return <div className="w-full h-full bg-gray-300" />;
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="object-cover w-full h-full"
      onError={() => setErrored(true)}
    />
  );
};

const executiveRoles = ['President', 'Vice President', 'Secretary', 'Treasurer'];

const PastCommittee: React.FC = () => {
  const [data, setData] = useState<Record<string, PastCommitteeMember[]>>({});
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    fetch('/pastCommitteeData.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="px-4" ref={ref}>
      {Object.keys(data).sort((a, b) => b.localeCompare(a)).map(year => {
        const members = data[year];
        const exec = members.filter(m => executiveRoles.includes(m.role));
        const head = members.filter(m => !executiveRoles.includes(m.role));
        return (
          <section key={year} id={year} className="mb-16 scroll-mt-28">
            <h2 className="text-4xl font-bold text-center text-MUE-white mb-8">{year}</h2>
            <div className="bg-MUE-dark-blue-box rounded-2xl p-8 mx-auto max-w-5xl">
              <h3 className="text-xl font-semibold text-MUE-sky-blue mb-4">Executive Team</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
                {exec.map(member => (
                  <div key={member.name} className="flex flex-col items-center space-y-2">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg bg-white">
                      <Avatar src={member.image} alt={member.name} size={128} />
                    </div>
                    <p className="text-MUE-white font-bold pt-1 text-center">{member.name}</p>
                    <p className="text-MUE-gray">{member.role}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-MUE-sky-blue mt-8 mb-4">Head Coordinators</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
                {head.map(member => (
                  <div key={member.name} className="flex flex-col items-center space-y-2">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg bg-white">
                      <Avatar src={member.image} alt={member.name} size={128} />
                    </div>
                    <p className="text-MUE-white font-bold pt-1 text-center">{member.name}</p>
                    <p className="text-MUE-gray">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default PastCommittee;