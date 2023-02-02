/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#896147",
        secondary: "#BC6A43",
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
      fontFamily: {
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      backgroundImage: {
        mosaic: "url('../../public/background-1.jpg')",
      },
      screens: {
        phone: { max: "576px" },

        laptop: { max: "960px" },

        desktop: { max: "1440px" },
      },
    },
  },
  plugins: [],
};
