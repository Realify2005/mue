'use client';
import React from 'react';
import Image from 'next/image';
import { fetchPhotos } from '../api/fetchGalleryPhoto';

interface SlidesProps {
  slides: any[];
}

// Temporary images, will hopefully integrate with Notion in the future
// const slides = [
//   '/photos/agm2024_photo_1.jpg',
//   '/photos/agm2024_photo_2.jpg',
//   '/photos/agm2024_photo_3.jpg',
//   '/photos/agm2024_photo_4.jpg',
//   '/photos/agm2024_photo_5.jpg',
// ];

const InfinityScrollCarousel: React.FC<SlidesProps> = ({ slides }) => {
  // Duplicate the slides to create a seamless loop
  const allSlides = Array(100).fill(slides).flat();

  const slideWidthLg = 600;
  const slideWidthMd = 400;
  const slideWidthSm = 200;

  const containerWidthLg = allSlides.length * slideWidthLg;
  const containerWidthMd = allSlides.length * slideWidthMd;
  const containerWidthSm = allSlides.length * slideWidthSm;

  return (
    <div className="bg-MUE-dark-blue flex flex-col items-center justify-center p-8">
      <h2 className="text-MUE-sky-blue text-5xl font-bold mb-8 w-full text-left">Gallery</h2>

      <div className="overflow-x-auto w-full">
        <div
          className="flex"
          style={{
            width: containerWidthLg,
            animation: 'scrollLeft 60s linear infinite', 
            // ↑ Adjust duration for slower or faster sliding
          }}
        >
          {allSlides.map((slide, index) => (
            <div key={index} className="flex-none px-4">
              <Image
                src={slide}
                alt={`Slide ${index}`}
                width={600}
                height={400}
                className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto object-cover rounded-md shadow-md"
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
            transform: translateX(-${containerWidthLg / 20}px);
          }
        }

        @media (max-width: 1024px) {
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${containerWidthMd / 20}px);
            }
          }
        }

        @media (max-width: 640px) {
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${containerWidthSm / 20}px);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default InfinityScrollCarousel;