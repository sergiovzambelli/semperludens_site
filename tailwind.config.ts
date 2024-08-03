import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        nunito: ['var(--font-nunito)'],
        gelica: ['var(--font-gelica)'],
      },
    }
  },
    // theme: {
  //   colors: {
  //     transparent: "transparent",
  //     current: "currentColor",
  //     white: "#ffffff",
  //     black: "#2d2d2d",
  //     blackgradient: "rgba(0, 0, 0, 0.7)",
  //     grey: {
  //       5 : "#f8f8f8",
  //       10 : "#eeeeee",
  //       20 : "#b6b6b6",
  //       30 : "#848484",
  //     },
  //     red : {
  //       10 : "#f85d33",
  //       20 : "#9B153D",
  //       30 : "#881436",
  //     }
  //   },
  plugins: [],
};
export default config;
