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
        light: "#FEBF7A",
        dark: "#022C3A",
        font: "#6c6c6c",
        border: "#ccc",
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
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
