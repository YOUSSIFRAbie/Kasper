/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      container: {
        center:true,
      },
      colors: {
        main: {
          a: '#00c7fc',
          bg: 'rgba(0, 199, 252, 50%)',
      },
      }
    },
  },
  plugins: [],
}

