/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Cinzel', serif"],
        primary: ["'Quattrocento Sans', sans-serif"],
        navbar: ["'Inter', sans-serif"],
      },
      colors: {
        primary: "#293855",
        secondary: "#4165D5",
        tert: "#C3E9FC",
        bluebg: "#EDF4FF",
        copyright: "#3854A4",
      },
    },
  },
  plugins: [],
};
