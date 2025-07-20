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
    description: "Help shape MUE’s image—run socials, create content, and promote epic events!"
  },
  {
    title: "Events Coordinator",
    description: "Plan and run epic esports events, from tournaments to social nights."
  },
  {
    title: "Technical Coordinator",
    description: "Keep our events running smoothly behind the scenes."
  },
  {
    title: "Games Manager",
    description: "Curate and manage the games for our events."
  },
  {
    title: "General Coordinator",
    description: "Oversee the smooth operation of all MUE activities."
  },

]; 