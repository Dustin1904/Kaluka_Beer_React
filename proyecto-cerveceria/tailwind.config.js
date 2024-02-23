/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  content: ["./src/**/*.{html, js, jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

