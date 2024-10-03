/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
        raleway: ['Raleway', 'sans-serif']
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [ require('daisyui')],
}

