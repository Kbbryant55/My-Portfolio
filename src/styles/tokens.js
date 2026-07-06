/**
 * Warm craft design tokens — single source of truth for Tailwind + CSS variables.
 */
const tokens = {
  colors: {
    // Brand palette
    primary: "#896147",
    secondary: "#BC6A43",
    light: "#FEBF7A",
    dark: "#022C3A",

    // Surfaces
    surface: {
      card: "#BC6A43",
      "card-hover": "#896147",
      form: "rgba(2, 44, 58, 0.92)",
      contact: "#FAF8F5",
      input: "rgba(255, 255, 255, 0.06)",
    },

    // Text
    ink: {
      DEFAULT: "#ffffff",
      muted: "rgba(255, 255, 255, 0.75)",
      subtle: "rgba(255, 255, 255, 0.55)",
    },

    // Borders
    line: {
      DEFAULT: "rgba(255, 255, 255, 0.15)",
      strong: "#022C3A",
      field: "rgba(255, 255, 255, 0.22)",
    },
  },

  boxShadow: {
    card: "0 12px 40px -12px rgba(2, 44, 58, 0.55)",
    elevated: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
    "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.75)",
    form: "0 20px 50px -15px rgba(2, 44, 58, 0.6)",
  },

  borderRadius: {
    card: "1.5rem",
    form: "2rem",
    input: "0.5rem",
  },
};

module.exports = tokens;
