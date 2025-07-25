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
          50: '#fef7f5',
          100: '#feeee9',
          200: '#fdd4c7',
          300: '#fab5a0',
          400: '#f78966',
          500: '#D64309',
          600: '#c13808',
          700: '#a12f07',
          800: '#812605',
          900: '#611d04',
        },
        accent: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d5ff',
          300: '#a3b9ff',
          400: '#7a94ff',
          500: '#0033A0',
          600: '#002e90',
          700: '#002980',
          800: '#002370',
          900: '#001e60',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
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
