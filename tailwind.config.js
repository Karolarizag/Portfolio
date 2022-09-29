/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
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
          "neutral": "#eee",
          "base-100": "#eee",
          "info": "#cffafe",
          "success": "#99f6e4",
          "warning": "#fef08a",
          "error": "#fca5a5",
          },
      },
      {
        myDarkTheme: {
          "primary": "#FDB9FF",
          "secondary": "#B1EFAC",
          "accent": "#A954AB",
          "neutral": "#181818",
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
