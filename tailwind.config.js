/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2EB6CC',
        'secondary': '#092429',
        'text-body': '#323C52',
        'grey': '#6f6f6f',
        'divider': '#1C6D7A',
      },
      backgroundColor: {
        light: '#D5F0F5',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'home-banner': "url('/src/assets/imgs/banner.png')",
        'footer': "url('/src/assets/imgs/footer-bg.png')",
      },
      container: {
        center: true,
        padding: '1rem',
        maxWidth: '930px',
      },
      boxShadow: {
        default: '0px 6.7863px 20.3589px rgba(151,151,151,0.2)',
      },
      lineHeight: {
        1: '1.0',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
