/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: colors.black,
          secondary: "#1f2937",
          tertiary: "#374151",
        },
        text: {
          primary: "#f9fafb",
          secondary: "#6b7280",
          tertiary: colors.white,
          a: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
};
