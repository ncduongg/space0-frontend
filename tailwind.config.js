/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg':"url('/bg.webp')",
        'top-sale-bg':"url('/bg-1.png')"
      },
      colors:{
        'nav-opacity':'rgb(0,0,0,0.3)'
      }
    },
  },
  plugins: [],
}
