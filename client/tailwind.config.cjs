/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        segoeScript: ['Segoe Script', 'cursive'],
      },
      backgroundImage: {
        'tenis': "url('https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVuaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')",
      }
    },
    colors: {
      "white": "white",
      "primary": "#4CAF50",
      "secondary": "#F5F5F5",
      "gradone": "#E0E0E0",
      "gradtwo": "#72DFC5",
    }
  },
  plugins: [],
};


