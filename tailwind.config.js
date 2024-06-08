/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {fontFamily: 
      {
      google: ['Poppins', 'sans-serif'],
    },
    boxShadow:
    {
      '5xl':  '0 5px 5px rgba(0, 0, 0, 0.2)'
    }
  },
},
  plugins: [],
}

