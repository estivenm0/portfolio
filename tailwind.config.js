/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/flyonui/dist/js/*.js',

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flyonui'), 
    require('flyonui/plugin')
  ],
}

