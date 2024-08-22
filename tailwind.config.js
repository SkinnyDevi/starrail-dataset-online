/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-ocean": "#0a0f1a",
        "nether-red": "#f9313f",
        dominant: "#12153b",
        secondary: "#4542c8",
        accent: "#b31922",
      },
    },
  },
  plugins: [],
};
