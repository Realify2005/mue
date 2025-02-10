import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
    {
      icon: "🧑‍🧑‍🧒‍🧒",
      category: "Community",
      title: "Weekly games night in our discord servers with over 10+ games",
      /* Need to provide fallback after process.env.MUE_DISCORD_PERMALINK otherwise runtime error */
      button: { text: "Join our Discord", link: process.env.MUE_DISCORD_PERMALINK || "https://discord.gg/NHAFvPqTDt" },
      /* In the actual code below, index == 0 is substituted with discord's iframe widget */
      /* So the images and links "content" here are not relevant, however please don't remove them */
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
        <section className="py-12 text-white">
        <div className="container mx-auto space-y-40 px-8 lg:px-24">
          {highlights.map((section, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
              {/* Text Content */}
              <div>
                <span className="text-2xl text-white font-bold flex items-center">
                  {section.icon} {section.category}
                </span>
                <h2 className="text-4xl font-bold my-4">{section.title}</h2>

                {/* MOBILE ONLY: Image before "See Also" section*/}
                <div className="flex justify-center block lg:hidden py-6">
                  {index === 0 ? (
                    // First section: Replace the image with a Discord iframe
                    <iframe
                      className="rounded-3xl shadow-[0_0_20px_#46C8F0]"
                      src="https://discord.com/widget?id=483256492762595328&theme=dark"
                      width="550"
                      height="400"
                      frameBorder="0"
                      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                  ) : (
                    // Other sections: Regular images
                    <Image
                      src={section.image}
                      alt={section.category}
                      width={550}
                      height={400}
                      className="rounded-3xl shadow-[0_0_20px_#46C8F0]"
                    />
                  )}
                </div>

                <Link
                  href={section.button.link}
                  target="_blank"
                  className="inline-block bg-[#46C8F0] text-black font-bold my-6 py-2 px-4 rounded-full text-2xl hover:bg-[#2694D1] transition"
                >
                  {section.button.text} →
                </Link>

                {/* See Also Links */}
                <div className="mt-4 text-sm">
                  <p className="text-white font-semibold">See also</p>
                  {section.links.map((link, i) => (
                    <p className="my-2" key={i}>
                      <Link href={link.link} target="_blank" className="text-blue-400 font-semibold hover:underline">
                        {link.text}
                      </Link>{" "}
                      {link.description}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Side: Image or Discord iframe (PC ONLY)*/}
              <div className="flex justify-center hidden lg:block">
                {index === 0 ? (
                  // First section: Replace the image with a Discord iframe
                  <iframe
                    className="rounded-3xl shadow-[0_0_20px_#46C8F0]"
                    src="https://discord.com/widget?id=483256492762595328&theme=dark"
                    width="550"
                    height="400"
                    frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  ></iframe>
                ) : (
                  // Other sections: Regular images
                  <Image
                    src={section.image}
                    alt={section.category}
                    width={550}
                    height={400}
                    className="rounded-3xl shadow-[0_0_20px_#46C8F0]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default ClubHighlights;
