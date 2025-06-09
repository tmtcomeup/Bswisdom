/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(237, 241, 250)',
          100: 'rgb(219, 227, 245)',
          200: 'rgb(183, 199, 235)',
          300: 'rgb(147, 171, 225)',
          400: 'rgb(111, 143, 215)',
          500: 'rgb(69, 103, 183)',
          600: 'rgb(55, 82, 146)',
          700: 'rgb(41, 62, 110)',
          800: 'rgb(28, 41, 73)',
          900: 'rgb(14, 21, 37)',
        },
        secondary: {
          50: 'rgb(255, 250, 230)',
          100: 'rgb(255, 245, 205)',
          200: 'rgb(255, 236, 153)',
          300: 'rgb(255, 223, 102)',
          400: 'rgb(255, 215, 51)',
          500: 'rgb(255, 223, 102)', // Lightened gold color
          600: 'rgb(184, 134, 11)',
          700: 'rgb(153, 101, 21)',
          800: 'rgb(102, 84, 14)',
          900: 'rgb(51, 42, 7)',
        },
        accent: {
          50: 'rgb(235, 250, 242)',
          100: 'rgb(215, 245, 229)',
          200: 'rgb(175, 235, 203)',
          300: 'rgb(135, 225, 177)',
          400: 'rgb(95, 215, 151)',
          500: 'rgb(46, 204, 113)',
          600: 'rgb(37, 163, 90)',
          700: 'rgb(28, 122, 68)',
          800: 'rgb(18, 82, 45)',
          900: 'rgb(9, 41, 23)',
        },
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
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
  plugins: [],
};