/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        primary: '#6366f1',
        accent: '#22c55e',
        textColor: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}