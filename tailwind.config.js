/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'lz-black': '#0B0C10',
        'lz-dark-gray': '#1F2833',
        'lz-light-gray': '#C5C6C7',
        'lz-accent': '#66FCF1',
        'lz-accent-dim': '#45A29E',
      }
    },
  },
  plugins: [],
}