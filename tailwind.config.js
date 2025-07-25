/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'copperplate-cc': ['"Copperplate CC"', 'serif'],
        'copperplate-gothic': ['"Copperplate Gothic Std 29 BC"', 'serif'],
      },
      colors: {
        primary: {
          50: '#fef8f6',
          100: '#feeee8',
          200: '#fdd9c7',
          300: '#fcb99c',
          400: '#f9906b',
          500: '#f56a3a',
          600: '#DC4405',
          700: '#b13604',
          800: '#8f2d04',
          900: '#6b2203',
        },
        accent: {
          50: '#f1f2f9',
          100: '#e3e6f3',
          200: '#ced3ea',
          300: '#adb6dc',
          400: '#8791cb',
          500: '#020c45',
          600: '#010a3a',
          700: '#01082f',
          800: '#010625',
          900: '#01041a',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'radial-gradient-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'radial-gradient-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'radial-gradient-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'radial-gradient-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
        'radial-gradient-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'radial-gradient-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'radial-gradient-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'radial-gradient-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'radial-custom': 'radial-gradient(ellipse at 50% 75%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
} 
