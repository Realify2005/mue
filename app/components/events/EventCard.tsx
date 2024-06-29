import React from 'react';
import Image from 'next/image';

interface Event {
  affiliatedThirdParties: string;
  tags: string[];
  location: string;
  finalised: boolean;
  date: string;
  posterUrl: string;
  duration: string;
  name: string;
  instagramLink?: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const tagColors: { [key: string]: string } = {
    "📅 Weeklies": 'bg-blue-200',
    "🏆 Tournament": 'bg-orange-200',
    "🌏 Collab": 'bg-purple-200',
    "📚 Trivia": 'bg-green-200',
    // add more tag-to-color mappings as needed
  };

  return (
    <div className="border rounded-lg p-4 shadow-md w-full max-w-md my-2 bg-white">
      <Image
        src={event.posterUrl}
        alt={event.name}
        width={400}
        height={600}
        className="w-full rounded-md"
      />
      <div className="flex flex-wrap my-2">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className={`mr-2 p-1 rounded ${tagColors[tag] || 'bg-gray-200'}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-2">{event.name}</h2>
      <p className="text-gray-600">{formattedDate}</p>
      <p className="font-semibold mt-1">
        <span className="text-gray-700">Duration: </span>{event.duration}
      </p>
      <p className="font-semibold mt-1">
        <span className="text-gray-700">Location: </span>{event.location}
      </p>
      <p className="font-semibold mt-1">
        <span className="text-gray-700">Sponsored by: </span>{event.affiliatedThirdParties}
      </p>
      {event.instagramLink && (
        <a
          href={event.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-2 block"
        >
          Instagram Link
        </a>
      )}
    </div>
  );
}

export default EventCard;
