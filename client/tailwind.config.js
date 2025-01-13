/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "#1E1E1E",
        accent: "#EB5A3C",
        orange:{
          light: "#EB5A3C",
          dark: "#d45035",
        },
        gold:{
          light: "#FFEDAC",
          dark: "#D1B450",
        },
        silver:{
          light: "#EEEEEE",
          dark: "#B4B4B4",
        },
        bronze:{
          light: "#FFE3C8",
          dark: "#A77546",
        },
        success:{
          light: "#B6F3BC",
          dark: "#37AE43",
        },
        failure:{
          light: "#FFCACA",
          dark: "#EB3735",
        }
      },
    },
  },
  plugins: [],
}

