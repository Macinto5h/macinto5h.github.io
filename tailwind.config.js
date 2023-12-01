/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk"],
  theme: {
    fontFamily: {
      sans: ['Jura', 'sans-serif']
    },
    extend: {
      colors: {
        isabelline: '#f9f4f1',
        oxford: '#030029',
        irresistible: '#aa4465',
        cadmium: '#f7934c'
      }
    },
  },
  plugins: [],
}

