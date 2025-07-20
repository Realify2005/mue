import React from "react";
import PerkCard from "./PerkCard";
import { membershipPerks } from "./data/membershipPerks";

/**
 * Membership Perks Section
 * @returns {JSX.Element} Section displaying membership perks in a grid layout
 */
const MembershipPerks: React.FC = () => {
  return (
    <section className="mb-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-montserrat font-bold text-3xl tracking-tight text-white sm:text-4xl">
            Perks as a member
          </h2>
        </div>

        {/* Perks Grid */}
        <div className="mx-auto mt-12 max-w-6xl flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 items-center">
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
