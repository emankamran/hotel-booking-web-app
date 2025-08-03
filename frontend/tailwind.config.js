/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',                    // ← for root HTML
    './src/**/*.{js,ts,jsx,tsx}',      // ← for React/TSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059669' // emerald-600 color
      }
    },
  },
  plugins: [],
}
