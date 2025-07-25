import React from "react";
import Image from "next/image";

interface PerkCardProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
}

const PerkCard: React.FC<PerkCardProps> = ({ imageSrc, imageAlt, text }) => {
  return (
    <div className="flex flex-col items-center text-center w-48 sm:w-56">
      {/* Circular Image */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Text Box */}
      <div className="bg-MUE-dark-dark-blue p-3 w-full min-h-[64px] rounded-lg shadow-[0_0_20px_rgba(70,200,240,0.3)] flex items-center justify-center">
        <p className="font-montserrat font-bold text-sm sm:text-base text-white leading-snug text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PerkCard;
