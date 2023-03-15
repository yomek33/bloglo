/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#89c3eb",
        purple: "#CCCCFF",
        pink: {
          100: "#f5b2b2",
          200: "#FAA0A0",
          300: "#f7b7b7",
        },
        yellow: "#f8e58c",
        lightgreen: "#98d98e",
        mint: "#9EDEC6",
        navy: "#191970",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
