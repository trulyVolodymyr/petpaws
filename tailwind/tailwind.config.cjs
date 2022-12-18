/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0f172a',
      'gray-light': '#f3f4f6',
      'gray-ultra-light': '#e5e7eb',
      'gray-medium': '#9ca3af',
      'gray-dark': '#374151',
      ///
      black: '#1D1D1D',
      gray: '#8C8C8C',
      purple: '#B4B7FF',
      opacity: 'rgba(255, 255, 255, 0.6)',
      pink: '#FF868E',
      'pink-light': '#FBE0DC',
      green: '#97EAB9',
      yellow: '#FFD280',
      bodybg: '#F8F8F7'

    },
    fontFamily: {
      main: ['Inter', 'sans-serif']
    },
    extend: {
      2.5: '10px'

    }
  },
  plugins: []
}
