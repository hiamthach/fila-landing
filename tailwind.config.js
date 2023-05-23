/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2EB6CC',
        'secondary': '#092429',
        'text-body': '#323C52',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'home-banner': "url('/src/assets/imgs/banner.png')",
      },
      container: {
        center: true,
        padding: '1rem',
        maxWidth: '930px',
      },
    },
  },
  plugins: [],
};
