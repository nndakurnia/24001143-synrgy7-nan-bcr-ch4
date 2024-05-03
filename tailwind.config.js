/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: '#F1F3FF',
        banner: '#0D28A6',
        button: '#5CB85F',
        abu: '#D4D4D4',
        neutral02: '#D0D0D0',
        neutral03: '#8A8A8A',
        neutral04: '#3C3C3C',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      },
      fontSize: {
        'h1': ['36px', {
          lineHeight: '54px',
          fontWeight: '700',
        }],
        'h2': ['24px', {
          lineHeight: '36px',
          fontWeight: '700',
        }],
        'plight': ['14px', {
          lineHeight: '20px',
          fontWeight: '300',
        }],
        'preg': ['14px', {
          lineHeight: '20px',
          fontWeight: '400',
        }],
        'title': ['16px', {
          lineHeight: '24px',
          fontWeight: '700',
        }],
        'button': ['14px', {
          lineHeight: '20px',
          fontWeight: '700',
        }],
        'slight': ['12px', {
          lineHeight: '18px',
          fontWeight: '400',
        }],
      }
    },
  },
  plugins: [],
}
