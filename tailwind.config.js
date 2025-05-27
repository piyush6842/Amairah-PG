/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      scale: {
        '190': '1.90',
      },
      transitionDuration: {
        '6000': '6000ms',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeInFromBottom: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInFromBottom: 'fadeInFromBottom 1s ease-out forwards',
      },
      // Extend delay values if you want specific delay timing
      transitionDelay: {
        0: '0ms',
        300: '300ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
};
