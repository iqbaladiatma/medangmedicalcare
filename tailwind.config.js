/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3E144C',
        secondary: '#F3F4F6',
      },
    },
  },
  plugins: [],
};