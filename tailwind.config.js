const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-button-uno": "#1db954",
        "green-button-dos": "#1ed760",
        "error": "#f15252",
        "gray-uno": "#181818",
        "gray-dos": "#1a1a1a",
        "gray-tres": "#282828",
        "gray-cuatro": "#333333",
        "gray-seis": "#2f2f2f",
        "gray-siete": "#3a3a3a",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
