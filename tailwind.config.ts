import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#4b4b4b",
      grey: "#d9d8e2",
      blackgradient: "rgba(0, 0, 0, 0.7)",
      blue: { 
        50 : "#38658e",
        60 : "#23547c",
        70 : "#133b5b",
      },
      red : {
        50 : "#983f41",
        60 : "#88313a",
      },
      yellow: "#e8bd60",
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        nunito: ['var(--font-nunito)'],
        gelica: ['var(--font-gelica)'],
      },
    }
  },
  plugins: [],
};
export default config;
