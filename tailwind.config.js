/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wood: "url('./images/wood.png')",
        felt: "url('./images/felt.jpg')",
      },
      colors: {
        "theme-dark-green": "#386641",
        "theme-green": "#6A994E",
        "theme-light-green": "#A7C957",
        "theme-cream": "#F2E8CF",
        "theme-red": "#BC4749",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
