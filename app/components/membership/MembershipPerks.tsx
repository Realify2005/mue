import React from "react";
import PerkCard from "./PerkCard";
import { membershipPerks } from "./data/membershipPerks";

const MembershipPerks: React.FC = () => {
  return (
    <section className="mb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-montserrat font-bold text-3xl tracking-tight text-white sm:text-4xl">
            Perks as a member
          </h2>
        </div>

        {/* Perks Grid */}
        <div className="mx-auto mt-12 max-w-6xl">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              gap-y-10 gap-x-6
              justify-items-center
            "
          >
            {membershipPerks.map((perk, index) => (
              <PerkCard
                key={index}
                imageSrc={perk.imageSrc}
                imageAlt={perk.imageAlt}
                text={perk.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipPerks;
