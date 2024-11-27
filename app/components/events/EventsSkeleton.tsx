import React from 'react';

const EventsSkeleton: React.FC = () => {
  return (
    <div className="px-5 pb-5 md:px-80 flex flex-col justify-center items-center py-20">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-full p-4 border border-gray-200 rounded-lg shadow animate-pulse">
            <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSkeleton;
