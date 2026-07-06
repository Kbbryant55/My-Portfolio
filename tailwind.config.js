/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const tokens = require("./src/styles/tokens");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        phone: "1.25rem",
      },
      screens: {
        DEFAULT: "100%",
        lg: "1100px",
      },
    },
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        light: tokens.colors.light,
        dark: tokens.colors.dark,
        surface: tokens.colors.surface,
        ink: tokens.colors.ink,
        line: tokens.colors.line,
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
      },
      fontFamily: {
        display: ["var(--font-display)", "Oswald", "sans-serif"],
        body: ["var(--font-body)", "Open Sans", "sans-serif"],
      },
      backgroundImage: {
        mosaic: "url('../../public/background-1.jpg')",
        scrim:
          "linear-gradient(to bottom, rgba(2, 44, 58, 0.72), rgba(2, 44, 58, 0.88))",
      },
      boxShadow: tokens.boxShadow,
      borderRadius: {
        card: tokens.borderRadius.card,
        form: tokens.borderRadius.form,
        input: tokens.borderRadius.input,
      },
      screens: {
        phone: { max: "576px" },
        laptop: { max: "960px" },
        desktop: { max: "1440px" },
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "check-draw": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.65s ease-out forwards",
        "scale-in": "scale-in 0.45s ease-out forwards",
        "slide-down": "slide-down 0.28s ease-out forwards",
        "check-draw": "check-draw 0.4s ease-out 0.2s forwards",
      },
    },
  },
  plugins: [],
};
