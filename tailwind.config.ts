import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#22212C",
        pink: "#FF80BF",
        purple: "#9580FF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
