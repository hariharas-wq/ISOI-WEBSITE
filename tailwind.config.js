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
        copyright: "rgba(65, 101, 213, 0.62);",
      },
    },
  },
  plugins: [],
};
