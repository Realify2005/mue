import React from "react";
import Image from "next/image";

interface PerkCardProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
}

/**
 * Perk Card Component
 * Displays a single membership perk with a circular image and text description.
 * @param {PerkCardProps} props - Component props
 * @param {string} props.imageSrc - Source URL for the perk image
 * @param {string} props.imageAlt - Alt text for the image
 * @param {string} props.text - Text description of the perk
 * @returns {JSX.Element} Card displaying a single membership perk
 */
const PerkCard: React.FC<PerkCardProps> = ({ imageSrc, imageAlt, text }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circular Image */}
      <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={128}
          height={128}
          className="rounded-full object-cover w-full h-full shadow-lg"
        />
      </div>

      {/* Text Box */}
      <div className="bg-MUE-dark-dark-blue p-3 w-48 h-16 rounded-b-lg shadow-[0_0_20px_rgba(70,200,240,0.3)] flex items-center justify-center">
        <p className="font-montserrat font-bold text-xs text-white leading-relaxed text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PerkCard;
