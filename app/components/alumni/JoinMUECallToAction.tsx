import React from 'react';
import Image from 'next/image';

const JoinMUECallToAction: React.FC = () => {
  return (
    <div className="bg-MUE-dark-dark-blue py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-MUE-yellow mb-6 leading-tight">
            Interested in joining the<br />MUE team?
          </h2>
          <p className="text-MUE-white font-semibold text-lg mb-6">
            Keen to make a difference in the gaming community? We&apos;d love to have you onboard!
          </p>
          <a
            href="https://discord.gg/NHAFvPqTDt" rel="noopener noreferrer" target="_blank"
            className="inline-block bg-MUE-yellow text-MUE-dark-dark-blue py-3 px-6 rounded-full text-lg hover:text-MUE-white hover:bg-MUE-sky-blue transition-transform duration-200"
          >
            View open roles &gt;
          </a>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/photos/agm2024_photo_4.jpg"
            alt="AGM 2024 Committee Photo"
            width={700}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default JoinMUECallToAction;