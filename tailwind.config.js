/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rosa: {
          principal: '#E8AFAF',
          acento: '#D97B7B',
          light: '#F5D5D5',
        },
        cafe: {
          DEFAULT: '#5A3E36',
          light: '#7A5C52',
        },
        verde: {
          DEFAULT: '#7A9E7E',
          claro: '#DCE8DE',
          dark: '#5A7E5E',
        },
        beige: '#F5E9E2',
        crema: '#FAF6F3',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Lora', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'petal': 'petal 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        petal: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(0)' },
          '50%': { transform: 'rotate(3deg) translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
