/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        move: "move 4s ease-in-out infinite alternate"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        move: {
          "0%": {
            transform: "translateX(-25%)"
          },
          "100%": {
            transform: "translateX(25%)"
          }
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLightTheme: {
          "primary": "#A954AB",
          "secondary": "#B1EFAC",
          "accent": "#FDB9FF",
          "neutral": "#CC97C4",
          "base-100": "#eee",
          "info": "#cffafe",
          "success": "#99f6e4",
          "warning": "#fef08a",
          "error": "#fca5a5",
          },
      },
      {
        myDarkTheme: {
          "primary": "#A954AB",
          "secondary": "#B1EFAC",
          "accent": "#FDB9FF",
          "neutral": "#CC97C4",
          "base-100": "#181818",
          "info": "#cffafe",
          "success": "#99f6e4",
          "warning": "#fef08a",
          "error": "#fca5a5",
          },
      },
    ],
  },
}
