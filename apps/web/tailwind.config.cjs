/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../backend/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6D5AE6',
          600: '#5B49D6',
          700: '#4C3AB8',
        },
      },
      boxShadow: {
        card: '0 6px 24px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        xl: '16px',
      },
    },
  },
  plugins: [],
};

