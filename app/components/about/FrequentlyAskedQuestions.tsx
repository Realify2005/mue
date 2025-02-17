'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: JSX.Element | string;
}

const faqData: FAQItem[] = [
  {
    question: 'How Can I Officially Join MUE?',
    answer: (
      <>
        You can officially become a MUE member for the current year by joining via the{' '}
        <a
          href="https://umsu.unimelb.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-MUE-sky-blue hover:text-MUE-sky-blue-hover"
        >
          UMSU website
        </a>. Your patronage supports all our activities for the year!
      </>
    ),
  },
  {
    question: 'How Can I Find Other MUE Members/Gamers?',
    answer: (
      <>
        Our members and all announcements are centralised on the official{' '}
        <a
          href={process.env.MUE_DISCORD_PERMALINK || 'https://discord.com/invite/NHAFvPqTDt'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-MUE-sky-blue hover:text-MUE-sky-blue-hover"
        >
          MUE Discord server
        </a>.
      </>
    ),
  },
  {
    question: 'How Do I Join MUE’s Esports Teams?',
    answer: (
      <>
        Each semester, competing games may hold trials to select the best students to represent Unimelb and MUE. Ensure you keep up to date with announcements in the respective game channels on{' '}
        <a
          href={process.env.MUE_DISCORD_PERMALINK || 'https://discord.com/invite/NHAFvPqTDt'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-MUE-sky-blue hover:text-MUE-sky-blue-hover"
        >
          discord
        </a>.
      </>
    ),
  },
  {
    question: 'How Can I Join The Committee?',
    answer:
      'We will open up committee recruiting at the start of each semester. If you missed out and are really enthusiastic to join us - chuck us a message!',
  },
  {
    question: 'Do I Have To Be A Competitive Player To Join The Club?',
    answer:
      'Our club caters to gamers of all calibres - from super casual to super competitive!',
  },
];

const FrequentlyAskedQuestions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-MUE-dark-blue text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-5xl font-medium mb-8 font-montserrat">FAQ</h1>

        {/* Main Container (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - FAQ */}
          <div className="md:col-span-2">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-MUE-white rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-8 py-4 focus:outline-none text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">
                    {item.question}
                  </span>
                  <span className="ml-2">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="bg-MUE-black px-4 py-3 text-left">
                    <p className="text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Discord / Contact */}
          <div className="px-12 rounded-lg flex flex-col items-end justify-between">
            <h2 className="text-3xl italic text-MUE-yellow text-right font-bold">
              Not What You&apos;re Looking For?
            </h2>
            <p className="text-sm text-MUE-white text-right py-4">
              Shoot us a message, we&apos;ll be more than happy to answer any questions!
            </p>
            <Link
              href="https://discord.gg/NHAFvPqTDt"
              target="_blank"
              className="border-2 border-MUE-yellow hover:border-MUE-yellow-hover text-MUE-yellow font-bold py-3 px-6 rounded-full text-sm shadow-lg hover:bg-MUE-yellow-hover hover:text-MUE-black transition"
            >
              OUR DISCORD
            </Link>
            <Image
                src="/logos/loafy_wave.webp"
                alt="Loafy Wave"
                width={160}
                height={160}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;