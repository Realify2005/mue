import React from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: JSX.Element | string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How can I officially join MUE?",
    answer: (
      <>
        You can officially become a MUE member for the current year by joining via the{' '}
        <a
          href="https://umsu.unimelb.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300"
        >
          UMSU website
        </a>. Your patronage supports all our activities for the year!
      </>
    ),
  },
  {
    id: 2,
    question: "How can I find other MUE members/gamers?",
    answer: (
      <>
        Our members and all announcements are centralised on the official{' '}
        <a
          href={process.env.MUE_DISCORD_PERMALINK || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300"
        >
          MUE Discord server
        </a>.
      </>
    ),
  },
  {
    id: 3,
    question: "Do I have to be a competitive player to join the club?",
    answer: "Our club caters to gamers of all calibres - from super casual to super competitive!",
  },
  {
    id: 4,
    question: "How do I join MUE's esports teams?",
    answer: (
      <>
        Each semester, competing games may hold trials to select the best students to represent Unimelb and MUE. Ensure you keep up to date with announcements in the respective game channels on{' '}
        <a
          href={process.env.MUE_DISCORD_PERMALINK || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300"
        >
          discord
        </a>.
      </>
    ),
  },
  {
    id: 5,
    question: "How can I join the committee?",
    answer: "We will open up committee recruiting sometime each semester. If you missed out and are really enthusiastic to join us - chuck us a message!",
  },
  {
    id: 6,
    question: "How often do you hold events?",
    answer: "MUE holds weekly gaming get togethers through the semester, alongside larger events and tournaments.",
  },
  {
    id: 7,
    question: "What kind of membership perks do MUE offer?",
    answer: (
      <>
        As an MUE member, you will enjoy a range of exclusive benefits, including:
        <ul className="list-disc ml-6 mt-2">
          <li>Special membership deals from our sponsors.</li>
          <li>Discounts for all MUE club events, with free food and drinks provided to members!</li>
          <li>Free entry into future giveaways, you&apos;ll get a shot at winning keyboards, mice, headsets, monitors, shirts, and more!</li>
          <li>Entry access into tournaments for those interested in the competitive gaming scene!</li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    question: "What games do you have?",
    answer: (
      <>
        We offer events including a wide range of games, from PC (e.g. VALORANT, League of Legends, CS2, Minecraft, Overwatch 2, etc.) to Switch games like Super Smash Bros! Our most popular games include these and more!
        <br /><br />
        We create chats for all games, no matter how niche (e.g. Fighting games, Gacha games, you name it!). Simply put in a game request, and we&apos;ll set up a chat for you to connect with other players.
        <br /><br />
        We often participate in tournaments for several of these games. Join us and compete for Unimelb!
      </>
    ),
  },
];

export default faqs;
