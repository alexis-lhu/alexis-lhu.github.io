/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#FFE4E1",
          100: "#FFB6C1",
          200: "#FFC0CB",
        },
        gray: {
          800: "#2C3E50",
          700: "#34495E",
          600: "#4A5568",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
