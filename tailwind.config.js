/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      backgroundImage: {
        'hero': "url('/images/blob-bg.svg')",
        'scribble':  "url('/images/scribble1.svg')",
        'register':  "url('/images/register.svg')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
