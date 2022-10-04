/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite alternate",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translateX(0%%)",
          },
          "25%": {
            transform: "translateX(25%)"
          },
          "50%": {
            transform: "translateY(25%)"
          },
          "75%": {
            transform: "translateX(-25%)"
          },
          "100%": {
            transform: "translateY(-25%) ",
          },
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
          "secondary": "#93C78F",
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
          "secondary": "#93C78F",
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
