import React from "react";
import RoleCard from "./RoleCard";
import { availableRoles } from "./data/availableRoles";

/**
 * Available Roles Section
 * @returns {JSX.Element} Section displaying available committee roles
 */
const AvailableRoles: React.FC = () => {
  return (
    <section className="mb-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl tracking-tight text-white sm:text-4xl">
            Available roles
          </h2>
        </div>

        {/* Roles Grid - 2 rows */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableRoles.map((role, index) => (
              <RoleCard
                key={index}
                title={role.title}
                description={role.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableRoles;
