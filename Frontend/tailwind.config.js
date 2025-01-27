const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brown Shades
        brown: {
          1: "#BF63CE", // 60
          2: "#C777D4", // 65
          3: "#CF8BDA", // 70
          4: "#DFB2E6", // 80
          5: "#EFD852", // 90
          6: "#F7ECF9", // 95
          7: "#FAF3FB", // 97
          8: "#FDFBFE", // 99
        },
        // Dark Shades
        dark: {
          1: "#0F0F0F", // 6
          2: "#1A1A1A", // 10
          3: "#1F1F1F", // 12
          4: "#262626", // 15
          5: "#333333", // 20
          6: "#404040", // 25
          7: "#4D4D4D", // 30
          8: "#595959", // 35
        },
        // Grey Shades
        grey: {
          1: "#676665", // 40
          2: "#81807E", // 50
          3: "#B3B3B2", // 70
          4: "#CACACE", // 80
          5: "#E6E6E6", // 90
          6: "#F2F2F2", // 95
          7: "#F7F7F7", // 97
          8: "#FCFCFC", // 99
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Set Roboto as the default sans font
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
