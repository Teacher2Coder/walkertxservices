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
          50: '#fdf4f4',
          100: '#fce8e8',
          200: '#f7d1d1',
          300: '#f0b0b0',
          400: '#e68585',
          500: '#800020',
          600: '#701c1c',
          700: '#5f1616',
          800: '#4e1111',
          900: '#3d0d0d',
        },
        accent: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c8c8c8',
          400: '#a8a8a8',
          500: '#888888',
          600: '#666666',
          700: '#4a4a4a',
          800: '#2e2e2e',
          900: '#1a1a1a',
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
