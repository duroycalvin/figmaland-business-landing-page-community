/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary": "#2091F9",
        "secondary": "#2DC071",
        "primary-text": "#252B42",
        "second-text": "#374754",
        "light-text": "#FFFFFF",
        "dark-bg": "#252B42",
        "light-bg": "#FFFFFF",
        "gradient-bg": "#222B32",
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: '48px',
          lineHeight: '84px',
          letterSpacing: '0.2px'
        },
        'h2': {
          fontSize: '48px',
          fontWeight: 'normal',
          lineHeight: '55px',
          letterSpacing: '0.2px'
        },
        'h3': {
          fontSize: '20px',
          fontWeight: 'bold',
          lineHeight: '28px',
          letterSpacing: '0.1px'
        },
        'h4': {
          fontSize: '28px',
          fontWeight: 'normal',
          lineHeight: '40px',
          letterSpacing: '0.2px'
        },
        'h5': {
          fontSize: '16px',
          fontWeight: 'normal',
          lineHeight: '23px',
          letterSpacing: '0.1px'
        },
        'button': {
          fontSize: '20px',
          fontWeight: 'normal',
          lineHeight: '20px',
          letterSpacing: '0.2px'
        },
        'p': {
          fontSize: '18px',
          fontWeight: 'normal',
          lineHeight: '25px',
          letterSpacing: '0.2px'
        },
        'a': {
          fontSize: '15px',
          fontWeight: 'normal',
          lineHeight: '28px',
          letterSpacing: '0.2px'
        },
        '.mobile-menu': {
          fontFamily: {
            sans: ['Roboto', 'Graphik', 'sans-serif'],
          },
          fontSize: '30px',
          fontWeight: 'normal',
          lineHeight: '45px',
          letterSpacing: '0.2px'
        }
      })
    })
  ],
}

