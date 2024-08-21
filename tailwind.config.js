/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          light: "#A6A6A6",
          lighter: "#BFBFBF",
        },
        gray: {
          light: "#736E72",
          dark: "#595659",
          darker: "#403D3E",
        },
      },
    },
    fontFamily: {
      mono: ["JetBrains Mono", "Courier New", "monospace"],
    },
  },
  plugins: [],
};
