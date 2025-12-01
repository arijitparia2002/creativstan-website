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
        wine: {
          50: '#fdf4f5',
          100: '#fbe8eb',
          200: '#f6d5db',
          300: '#eeb3be',
          400: '#e38799',
          500: '#d25c77',
          600: '#b83d5b',
          700: '#9b2d4a',
          800: '#822840',
          900: '#6f2539',
          950: '#3e101a',
        },
        dark: {
          900: '#0E0E0E',
          800: '#1A1A1A',
          700: '#2A2A2A',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
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
          '0%': { boxShadow: '0 0 5px #b83d5b, 0 0 10px #b83d5b' },
          '100%': { boxShadow: '0 0 20px #b83d5b, 0 0 30px #b83d5b, 0 0 40px #b83d5b' },
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
