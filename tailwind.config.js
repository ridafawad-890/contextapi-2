/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', //this is used to enable dark mode in tailwindcss. we can use 'media' or 'class' to enable dark mode. if we use 'media' then it will use the prefers-color-scheme media feature to determine if the user has requested a light or dark color theme. if we use 'class' then we can add a class 'dark' to the html element to enable dark mode.
  theme: {
    extend: {},
  },
  plugins: [],
}

