/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#0c0c0e',
        surface: '#141416',
        border: '#1e1e22',
        amber: '#f59e0b',
        emerald: '#10b981',
        muted: '#6b6b7b',
        light: '#e8e4dc',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}