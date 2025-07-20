/**
 * Interface for membership perk data
 */
export interface Perk {
  imageSrc: string;
  imageAlt: string;
  text: string;
}

/**
 * Array of membership perks with images and descriptions
 * @type {Perk[]} Array of perk objects containing image sources, alt text, and descriptions
 */
export const membershipPerks: Perk[] = [
  {
    imageSrc: "/photos/membership/meet_likeminded.png",
    imageAlt: "Meet like minded individuals",
    text: "Meet like minded individuals",
  },
  {
    imageSrc: "/photos/membership/competitive_casual_gaming.png",
    imageAlt: "Competitive & Casual Gaming",
    text: "Competitive & Casual Gaming",
  },
  {
    imageSrc: "/photos/membership/exclusive_events.png",
    imageAlt: "Exclusive Events & Tournaments",
    text: "Exclusive Events & Tournaments",
  },
  {
    imageSrc: "/photos/membership/weekly_games_food.png",
    imageAlt: "Weekly games & free food",
    text: "Weekly games & free food",
  },
  {
    imageSrc: "/photos/membership/join_discord.png",
    imageAlt: "Join our discord for more !!",
    text: "Join our discord for more !!",
  },
]; 