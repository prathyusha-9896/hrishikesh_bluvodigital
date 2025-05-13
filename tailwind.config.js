/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        letterSpacing: {
          tightest: '-0.02em',
        },
        fontFamily: {
          ramillas: ['"TTRamillas"', 'serif'], // ensure quotes
        },    
        screens: {
        'max-1972': { 'max': '1972px' }, // Custom upper limit
        },
      },
    },
    plugins: [],
  };
