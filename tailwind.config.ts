import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FDF8EE", // Main Background
          sand: "#F4E9D8", // Secondary Surface / Cards
          teal: "#1B4D57", // Deep Ocean Teal (Headings & Primary Text)
          "teal-dark": "#12373F",
          "teal-light": "#25636E",
          terracotta: "#D46A43", // Primary Accent / Buttons
          "terracotta-hover": "#C0562F",
          "terracotta-light": "#E88965",
          green: "#3A7D5C", // Palm Green (Safety / Badges)
          "green-light": "#EAF4EE",
          "green-dark": "#2B5E45",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        vintage: "0 10px 30px -10px rgba(27, 77, 87, 0.12), 0 4px 6px -4px rgba(27, 77, 87, 0.05)",
        "vintage-hover": "0 20px 40px -12px rgba(27, 77, 87, 0.2), 0 8px 12px -4px rgba(27, 77, 87, 0.08)",
        card: "0 4px 20px rgba(212, 106, 67, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
