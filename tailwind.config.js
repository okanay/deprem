/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '390px',
      // => @media (min-width: 540px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "none" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      fontFamily: {
        Roboto: ["Roboto Condensed", "sans-serif"],
        OpenSans : ['Open Sans', "sans-serif"],
      },
      colors: {
        primary: {
          MoreLight: "#FCF5EE",
          Light: "#FBE8E7",
          DEFAULT: "#F7DDDE",
          Dark: "#FFC4D0",
        },
        secondary: {
          MoreLight: "#DEF5E5",
          Light: "#BCEAD5",
          DEFAULT: "#9ED5C5",
          Dark: "#8EC3B0",
        },
        section: {
          MoreLight: "#faf8f1",
          Light: "#f5f4f0",
          DEFAULT: "#FAF8F1",
          Dark: "#f1eee9",
        },
      },
    },
  },
  plugins: [],
};
