'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

interface LinkType {
  text: string;
  link: string;
  description: string;
}

interface SectionType {
  icon: string;
  category: string;
  title: string;
  button: {
    text: string;
    link: string;
  };
  image: string;
  links: LinkType[];
}

const highlights: SectionType[] = [
  {
    icon: "🧑‍🧑‍🧒‍🧒",
    category: "Community",
    title: "Weekly games night in our discord servers with over 10+ games",
    button: { text: "Join our Discord", link: process.env.MUE_DISCORD_PERMALINK || "https://discord.gg/NHAFvPqTDt" },
    image: "/photos/gic2024_photo_1.jpg",
    links: [
      { text: "Competitive gaming", link: process.env.MUE_DISCORD_PERMALINK || "https://discord.gg/NHAFvPqTDt", description: "for those with a competitive edge" },
      { text: "Casual gaming", link: process.env.MUE_DISCORD_PERMALINK || "https://discord.gg/NHAFvPqTDt", description: "for those just looking to have a fun time" },
    ],
  },
  {
    icon: "🏆",
    category: "Esports",
    title: "Represent the Melbourne University in official tournaments",
    button: { text: "Registrations", link: "/games" },
    image: "/photos/agm2024_photo_1.jpg",
    links: [
      { text: "Registrations dates", link: "/games", description: "for those with a competitive edge"  },
      { text: "Rules & regulations", link: "/games", description: "to see eligibility"  },
    ],
  },
  {
    icon: "🎮",
    category: "Friday Weekly Gaming",
    title: "Join us on campus",
    button: { text: "See Events", link: "/events" },
    image: "/photos/campus2024_photo_1.jpg",
    links: [
      { text: "Registrations dates", link: "/events", description: "for those with a competitive edge"  },
      { text: "Rules & regulations", link: "/events", description: "to see eligibility"  }
    ],
  },
];

const ClubHighlights: React.FC = () => {
  return (
    <section className="py-12 md:py-[30rem] text-white">
      <div className="container mx-auto space-y-40 md:space-y-[35rem] px-8 lg:px-24">
        {highlights.map((section, index) => (
          <HighlightSection key={index} section={section} index={index} />
        ))}
      </div>
    </section>
  );
};

const HighlightSection: React.FC<{ section: SectionType; index: number }> = ({ section, index }) => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const imageRef = React.useRef<HTMLDivElement>(null);

  const { ref } = useInView({ triggerOnce: true, threshold: 1 });


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position
      const documentHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
  
      // Dynamic fade-in and fade-out values based on index
      const fadeStart = documentHeight * (0.22 + index * 0.15); 
      const fullVisible = documentHeight * (0.31 + index * 0.16);
      const fadeEnd = documentHeight * (0.37 + index * 0.18);
  
      let newOpacity = 1;
      if (scrollY < fadeStart) newOpacity = 0; // Hidden before fadeStart
      else if (scrollY >= fadeStart && scrollY < fullVisible) {
        newOpacity = (scrollY - fadeStart) / (fullVisible - fadeStart); // Fade in
      } else if (scrollY >= fullVisible && scrollY < fadeEnd) {
        newOpacity = 1; // Fully visible
      } else {
        newOpacity = 1 - (scrollY - fullVisible) / (fadeEnd - fullVisible); // Fade out
      }
  
      setScrollOpacity(Math.max(0, Math.min(1, newOpacity))); // Clamp between 0 and 1
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]); // Add index as a fixed dependency
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center" ref={ref}>
      <div>
        <span className="text-2xl text-white font-bold flex items-center">
          {section.icon} {section.category}
        </span>
        <h2 className="text-4xl font-bold my-4">{section.title}</h2>
        
        <div className="flex justify-center block md:hidden py-6" ref={imageRef}>
          {index === 0 ? (
            <iframe
              className="rounded-3xl shadow-[0_0_20px_theme(colors.MUE-sky-blue)]"
              src="https://discord.com/widget?id=483256492762595328&theme=dark"
              width="550"
              height="400"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          ) : (
            <Image
              src={section.image}
              alt={section.category}
              width={550}
              height={400}
              className="rounded-3xl shadow-[0_0_20px_theme(colors.MUE-sky-blue)]"
            />
          )}
        </div>
        
        <Link
          href={section.button.link}
          target="_blank"
          className="inline-block bg-MUE-sky-blue text-black font-bold my-6 py-2 px-4 rounded-full text-2xl hover:bg-MUE-sky-blue-hover transition"
        >
          {section.button.text} →
        </Link>
        <div className="mt-4 text-sm">
          <p className="text-white font-semibold">See also</p>
          {section.links.map((link, i) => (
            <p className="my-2" key={i}>
              <Link href={link.link} target="_blank" className="text-blue-400 font-semibold hover:underline">
                {link.text}
              </Link>{' '}
              {link.description}
            </p>
          ))}
        </div>
      </div>
      {/* Sticky Image Section */}
      <div className="fixed top-1/2 left-[55%] transform -translate-y-1/2 hidden md:block">
        <div
          style={{
            opacity: scrollOpacity,
            transition: "opacity 0.2s ease-in-out", // Smooth fade effect
          }}
        >
          {index === 0 ? (
            <iframe
              className="rounded-3xl shadow-[0_0_20px_theme(colors.MUE-sky-blue)]"
              src="https://discord.com/widget?id=483256492762595328&theme=dark"
              width="550"
              height="400"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          ) : (
            <Image
              src={section.image}
              alt={section.category}
              width={550}
              height={400}
              className="rounded-3xl shadow-[0_0_20px_theme(colors.MUE-sky-blue)]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClubHighlights;
