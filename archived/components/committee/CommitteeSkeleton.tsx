import React from 'react';

const CommitteeSkeleton: React.FC = () => {
  return (
    <div className="py-12 px-5 md:px-32 bg-gray-100">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center animate-pulse"
          >
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
            <div className="w-24 h-6 bg-gray-300 rounded-md mb-4"></div>
            <div className="w-32 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-40 h-3 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-36 h-3 bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeSkeleton;
