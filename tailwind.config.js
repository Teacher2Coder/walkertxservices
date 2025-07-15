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
      },
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
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
