/**
 * Interface for committee role data
 */
export interface Role {
  title: string;
  description: string;
}

/**
 * Array of available committee roles with titles and descriptions
 * @type {Role[]} Array of role objects containing titles and descriptions
 */
export const availableRoles: Role[] = [
  {
    title: "Publicity Coodinator",
    description: "Help shape MUE's image—run socials, create content, and promote epic events!"
  },
  {
    title: "Events Coordinator",
    description: "Plan and run epic events, from tournaments to social nights."
  },
  {
    title: "Technical Coordinator",
    description: "Help manage the club's custom discord bot and website!"
  },
  {
    title: "Games Manager",
    description: "Manage the casual side of our games."
  },
  {
    title: "Esports Manager",
    description: "Manage the esports/competitive side of our games."
  },
  {
    title: "General Committee",
    description: "Oversee the smooth operation of all MUE activities."
  },
]; 