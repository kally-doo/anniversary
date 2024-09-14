import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'lg': '1001px',
      // => @media (min-width: 1000px) { ... }
    },
    extend: {
      backgroundImage: {
        'heart': "url('/svg/heart.svg')",
      },
      spacing: {
        '5px': '5px',
        '25px': '25px',
        '70px': '70px',
        '250px': '250px',
        '400px': '400px',
        '500px': '500px',
        '1000px': '1000px',
        '13pc': '13%'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
