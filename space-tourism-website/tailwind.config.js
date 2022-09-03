/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2.5': '0.625rem',
        '15': '3.75rem',
        '22': '5.5rem',
        '37.5': '9.375rem',
        '40.5': '10.125rem',
        89: '22.25rem',
        111.5: '27.875rem',
        '112.5': '28.125rem',
        118: '29.5rem',
        131.5: '32.875rem',
        135.5: '33.875rem',
        143.25: '35.8125rem',
        '207.5': '51.875rem',
      },
      colors: {
        black: '#0b0d17',
        purple: '#d0d6f9',
        'gray-10': '#979797',
        'white-shadow': 'rgba(255,255,255,0.04)',
        'white-shadow-10': 'rgba(255,255,255,0.25)',
        'white-shadow-20': 'rgba(255,255,255,0.5)',
      },
      fontSize: {
        '3.5xl': '28px',
        '4.5xl': '40px',
        '5.5xl': '56px',
        '7.5xl': '80px',
        '10.5xl': '150px',
      },
      letterSpacing: {
        'xl': '2.7px',
      },
      backdropBlur: {
        '4xl': '80px',
      },
      borderWidth: {
        '3': '3px',
        sm: '1.5rem',
        md: '3rem',
        lg: '5.5rem',
      },
      boxShadow: {
        explore: 'drop-shadow(100px 10px 100px rgba(0, 0, 0, 0.25))',
      },
      ringWidth: {
        5.5: '1.375rem',
        11: '2.75rem',
        22: '5.5rem',
      }
    },
  },
  plugins: [],
}