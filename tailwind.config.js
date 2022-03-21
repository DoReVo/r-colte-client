/* eslint-env node */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "cursive"],
        "bree-serif": ["Bree Serif", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#4895EF",
          darker: "#4361EE",
        },
      },
      screens: {
        mouse: { raw: "(hover: hover)" },
        touch: { raw: "(hover: none)" },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
