/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      acme: ["acme", "sans-serif"],
      aladin: ["aladin", "sans-serif"],
      cormorantInfantLight: ["cormorantInfantLight", "sans-serif"],
      cormorantInfantReg: ["cormorantInfantReg", "sans-serif"],
      cormorantInfantBold: ["cormorantInfantBold", "sans-serif"],
      ewert: ["ewert", "sans-serif"],
      frederickaTheGreat: ["frederickaTheGreat", "sans-serif"],
      jomhuria: ["jomhuria", "sans-serif"],
      kalnia: ["kalnia", "sans-serif"],
      pacifico: ["pacifico", "sans-serif"],
      playwrite: ["playwrite", "sans-serif"],
    },
    extend: {
      colors: {
        brightRed: "#fe4f54",
        brightBlue: "#4583EE",
        brightCyan: "#3BD5D3",
        brightOrange: "#FF862e",
        brightYellow: "#ffba38",
        brightGreen: "#8fd33b",
        periwinkle: "#4583ee",
        brightPurple: "#d45df0",
        seafoam: "#93E9BE",
        hotpink: "#f6248a",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "50% 0%" },
          "100%": { backgroundPosition: "50% 100%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      },
      backgroundImage: {
        key: "url('/images/key.jpg')",
      },
    },
  },
  plugins: [],
};
