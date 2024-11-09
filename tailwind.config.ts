import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        searchBorder :{
          default :'#CECECE'
        },
        buttonBg :{
           default: "#62D597",
        }
      },
      fontFamily: {
        custom: ['Rubik', 'sans-serif'], // Replace 'YourFontFamily' with your font's name
      },

    },
  },
  plugins: [],
};
export default config;
