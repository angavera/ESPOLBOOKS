/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-button": '#172554',
        "links-hover": '#1e40af'
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const extendUnderline = {
        '.underline': {
            'textDecoration': 'underline',
            'text-decoration-color': '#1e40af',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}

