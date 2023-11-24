/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodoni:['Bodoni Moda','sans-serif']
      },
      colors:{
        'primary-red-0':'#B60C0C',
        'primary-red-1': '#FF0000',
        'primary-red-2': '#5C0606',
        'primary-red-3': '#210707',
        'primary-green-0': '#3B9E00',
        'primary-green-1': '#5BF600',
        'primary-green-2': '#57EB00',
        'primary-green-3': '#1A4600',
        'primary-green-4': '#0F2900'
      },
      backgroundImage: {
        'back-banner':'url("./src/assets/backbanner.png")'
      }
    },
  },
  plugins: [],
}

