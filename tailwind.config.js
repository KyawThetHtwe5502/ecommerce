/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '0rem',
      },
    },
    fontFamily : {
      san : ['Rubik', 'sans-serif']
    },
    extend: {
      fontFamily :{
        heading : ['Montserrat', 'sans-serif']
      } 
    },
  },
  plugins: [],
}

