/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '6xl': '0px 0px 16px -8px rgba(0,0,0,0.68)',
      }
    },
  },
  plugins: [],
}