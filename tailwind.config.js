/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D0A31",       // Deep purple for primary text and backgrounds
        secondary: "#F8F8F8",     // Off-white for contrast areas
        accent: "#5E1A64",        // Medium purple for accents
        purple: {
          light: "#8A3793",       // Light purple from logo
          DEFAULT: "#5E1A64",     // Medium purple from logo
          dark: "#2D0A31",        // Dark purple from logo
        },
        neutral: "#3A2A3C",       // Purple-tinted neutral
        lightNeutral: "#E5DCE6",  // Light purple-tinted neutral
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to bottom, #2D0A31, #5E1A64, #8A3793)',
      },
    },
  },
  plugins: [],
  important: true,
};