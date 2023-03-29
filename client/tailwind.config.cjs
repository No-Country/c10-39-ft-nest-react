/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#4CAF50",
      "gradone": "#E0E0E0",
      "gradtwo": "#72DFC5",
    }
  },
  plugins: [],
};