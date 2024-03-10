/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'cusotom-turquoise' : '#4fd1c5',
        'cusotom-gray' : '#f8f9fa',
      },
      backgroundColor: {
        'custom-gray' : '#f8f9fa',
        'custom-turquoise' : '#4fd1c5',
      },
      fontWeight : {
        'custom-bold' : '500'
      },
      borderColor : {
        'custom-turquoise' : '#4fd1c5'
      }
    },
  },
  plugins: [],
}

