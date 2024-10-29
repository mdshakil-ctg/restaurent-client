/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import tailwindScrollbar from 'tailwind-scrollbar';

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
  darkMode: 'class', 
  plugins: [daisyui, tailwindScrollbar],
}
