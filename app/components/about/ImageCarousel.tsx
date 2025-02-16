'use client';

import React from 'react';

// Temporary images, will hopefully integrate with Notion in the future
const slides = [
  '/photos/agm2024_photo_1.jpg',
  '/photos/agm2024_photo_2.jpg',
  '/photos/agm2024_photo_3.jpg',
  '/photos/agm2024_photo_4.jpg',
  '/photos/agm2024_photo_5.jpg',
];

const InfinityScrollCarousel: React.FC = () => {
  // Duplicate the slides to create a seamless loop
  const allSlides = Array(100).fill(slides).flat();

  const slideWidth = 600;

  const containerWidth = allSlides.length * slideWidth;

  const visibleWidth = 1200;

  return (
    <div className="bg-MUE-dark-blue flex flex-col items-center justify-center p-8">
      <h2 className="flex align-left text-MUE-sky-blue text-5xl font-bold px-64 py-16 w-full">Gallery</h2>

      <div className="overflow-hidden" style={{ width: visibleWidth }}>
        <div
          className="flex"
          style={{
            width: containerWidth,
            animation: 'scrollLeft 15s linear infinite', 
            // ↑ Adjust duration for slower or faster sliding
          }}
        >
          {allSlides.map((slide, index) => (
            <div key={index} className="flex-none px-4" style={{ width: slideWidth }}>
              <img
                src={slide}
                alt={`Slide ${index}`}
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for infinite left scroll */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Slide half the track width: 3000px / 2 = 1500px */
            transform: translateX(-1500px);
          }
        }
      `}</style>
    </div>
  );
};

export default InfinityScrollCarousel;
