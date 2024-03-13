/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          2: "#404657",
          3: "#151719",
        },
        primary: {
          1: "#191D24",
          2: "#76797D",
          3: "#Ffffff",
          4: "#B8B8B8",
        },
        accent: {
          1: "#E0284C",
          2: "#f22a52",
        },
      },
      keyframes: {
        slider: {
          "0%": { translateX: "0%" },
          "100%": { translateX: "-100%" },
        },
      },
      animation: {
        slider: "slider 50s ease infinite",
      },
    },
  },
  plugins: [],
};
