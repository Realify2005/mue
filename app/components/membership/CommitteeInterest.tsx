"use client";
import React from "react";

const CommitteeInterest: React.FC = () => {
  return (
    <section className="mt-60 mb-40 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="font-montserrat text-2xl sm:text-3xl font-semibold text-white mb-6">
          Interested in being part of the committee?
        </h3>
        <a
          href="https://discord.gg/NHAFvPqTDt"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block bg-MUE-green hover:bg-MUE-lime text-black
            font-montserrat font-bold text-base sm:text-lg
            py-3 px-6 rounded-full transition
          "
        >
          Let us know on Discord!
        </a>
      </div>
    </section>
  );
};

export default CommitteeInterest;
