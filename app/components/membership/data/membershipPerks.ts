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
    imageAlt: "Represent the University in Esports",
    text: "Represent the University in Esports",
  },
  {
    imageSrc: "/photos/membership/exclusive_events.png",
    imageAlt: "Exclusive Events & Tournaments",
    text: "Exclusive Events & Tournaments",
  },
  {
    imageSrc: "/photos/membership/weekly_games_food.png",
    imageAlt: "Enjoy free food during our weeklies event",
    text: "Enjoy free food during our weeklies event",
  },
  {
    imageSrc: "/photos/membership/join_discord.png",
    imageAlt: "Members-only discord role & channel",
    text: "Members-only discord role & channel",
  },
]; 