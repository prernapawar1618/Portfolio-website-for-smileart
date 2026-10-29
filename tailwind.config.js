/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F5',
          100: '#F7F3ED',
          200: '#EFE8DE',
          300: '#EAE2D7',
          400: '#D5C8B8',
          500: '#A99B8C',
          600: '#7E7062',
          700: '#544A40',
          800: '#2F2923',
          900: '#191919',
        },
        charcoal: {
          DEFAULT: '#141414',
          950: '#0A0A0A',
          900: '#121212',
          850: '#181818',
          800: '#1F1F1F',
          700: '#2E2E2E',
          600: '#404040',
          500: '#666666',
        },
        gold: {
          light: '#E8D5B5',
          DEFAULT: '#C5A880',
          dark: '#A68452',
          antique: '#9B7B4B',
        },
        cream: '#EAE2D7',
        taupe: '#A99B8C',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'cinematic': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};

