import type { Config } from "tailwindcss";

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
      }
    },
  },
  plugins: [],
};
export default config;
