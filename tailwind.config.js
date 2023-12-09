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
        'primary-green-4': '#0F2900',

      },
      backgroundImage: {
        'back-banner':'url("/src/assets/backbanner.png")',
        'bg-main-menu':'url("/src/assets/backmain.png")',
        'bg-not-found':'url("/src/assets/blackempty.png")',

      },
      dropShadow:{
        'shadow-logo':'5px 2px 3px rgba(0,0,0,0.4)'
      },
      screens:{
        'sm':'560px',
        'md':'920px',
      },
      animation:{
        fadeDown:'fadeDown ease-in-out 5s linear'
      },
      keyframes:{
        fadeDown:{
          '0%':{opacity:0,transform:'translateY(-10px)'},
          '100%':{opacity:1,transform:'translateY(0px)'}
        }
      }

    },
  },
  plugins: [],
}

