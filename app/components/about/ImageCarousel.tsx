// components/about/ImageCarousel.tsx
import React from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  slides: string[];   // already fetched by your page
}

const shuffleArray = (arr: string[]) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ slides }) => {
  // pick up to 10 random slides (if >10)
  const chosen =
    slides.length <= 10 ? slides : shuffleArray(slides).slice(0, 10);

  // destructure into exactly ten variables (undefined if fewer)
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10] = chosen;

  return (
    <section className="bg-MUE-dark-dark-blue py-16 px-6 lg:px-72">
      <h2 className="text-4xl font-bold text-MUE-white mb-8">Gallery</h2>

      <div className="grid grid-cols-10 gap-4">
        {/* Top-left big (4 cols) */}
        {p1 && (
          <div className="col-span-4 row-span-1 relative rounded-lg overflow-hidden shadow-md">
            <Image src={p1} alt="" fill className="object-cover" unoptimized />
          </div>
        )}

        {/* Top-right 2×2 inside 6 cols */}
        <div className="col-span-6 row-span-1 grid grid-cols-2 grid-rows-2 gap-4">
          {[p2, p3, p4, p5].map(
            (src, i) =>
              src && (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )
          )}
        </div>

        {/* Bottom-left 2×2 inside 6 cols */}
        <div className="col-span-6 row-span-1 grid grid-cols-2 grid-rows-2 gap-4">
          {[p6, p7, p8, p9].map(
            (src, i) =>
              src && (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )
          )}
        </div>

        {/* Bottom-right big (4 cols) */}
        {p10 && (
          <div className="col-span-4 row-span-1 relative rounded-lg overflow-hidden shadow-md">
            <Image src={p10} alt="" fill className="object-cover" unoptimized />
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageCarousel;
