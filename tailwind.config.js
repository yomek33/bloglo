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
        purple: "#cc7eb1",
        pink: "#f5b2b2",
        yellow: "#f8e58c",
        lightgreen: "#98d98e",
        mint: "#9EDEC6",
      },
    },
  },
  plugins: [],
};
