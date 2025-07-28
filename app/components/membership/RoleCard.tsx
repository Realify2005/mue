import React from "react";

interface RoleCardProps {
  title: string;
  description: string;
}

/**
 * Role Card Component
 * Displays a single committee role with title, description, and call-to-action button.
 * @param {RoleCardProps} props - Component props
 * @param {string} props.title - Title of the role
 * @param {string} props.description - Description of the role responsibilities
 * @returns {JSX.Element} Card displaying a single committee role
 */
const RoleCard: React.FC<RoleCardProps> = ({ title, description }) => {
  return (
    <div className="bg-MUE-dark-dark-blue border border-MUE-sky-blue rounded-2xl p-6 shadow-lg max-w-sm">
      <h3 className="font-montserrat font-bold text-xl text-white mb-3">
        {title}
      </h3>
      <p className="font-montserrat text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default RoleCard;
