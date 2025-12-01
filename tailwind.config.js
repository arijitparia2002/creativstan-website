/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#264653',
          teal: '#2A9D8F',
          yellow: '#E9C46A',
          orange: '#F4A261',
          coral: '#E76F51',
        },
        dark: {
          900: '#0E0E0E',
          800: '#1A1A1A',
          700: '#2A2A2A',
        }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #2A9D8F, 0 0 10px #2A9D8F' },
          '100%': { boxShadow: '0 0 20px #2A9D8F, 0 0 30px #2A9D8F, 0 0 40px #2A9D8F' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

module.exports = config
