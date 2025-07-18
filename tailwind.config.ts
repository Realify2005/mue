import type { Config } from "tailwindcss";

const flowbite = require('flowbite-react/tailwind');

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'solid': '10px 10px 0 0 rgb(0 0 0)',
        'hidden': '5px 5px 0 0 rgb(0 0 0)',
      }, 
      width: {
        'adjust': 'calc(100vw - 3rem)',
      },
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'MUE-dark-blue': '#000F46',
        'MUE-dark-dark-blue': '#010519',
        'MUE-dark-dark-blue-content': "#000619",
        'MUE-dark-blue-box': "#000929",
        'MUE-esports-dark-blue-box': "#080F2C",
        'MUE-sky-blue': '#46C8F0',
        'MUE-sky-blue-hover': '#3CAACB',
        'MUE-ocean-blue': '#297B95',
        'MUE-light-blue': '#838FBB',
        'MUE-white': '#FAF9F6',
        'MUE-gray': '#8188a2',
        'MUE-black': '#0B1215',
        'MUE-green': '#9FB826',
        'MUE-lime': '#BFD93F',
        'MUE-yellow': '#FFD629',
        'MUE-yellow-hover': '#967D13',
        'MUE-pink': '#EB7BBE',
        'MUE-footer-blue': '#0D1B50',

        'MUE-home-section-alt-bg-color': '#01030D',
      },
      rotate: {
        '15': '15deg',
        '-15': '-15deg',
      },
      screens: {
        'xl-about-hero-section': '1160px',
        '2xl-about-hero-section': '1600px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
