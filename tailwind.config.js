/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./screens/**/*.js",
    './Components/**/*.js'
  
  ],  
  theme: {
    extend: {
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
        // fontes personalizadas
        openSans: ["Open Sans", "sans-serif"],
        

      },
    },
  },
  plugins: [],
}

