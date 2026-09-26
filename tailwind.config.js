/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#285a43',
        'primary-light': '#337a5b',
        ink: '#121212',
        soft: '#f8f8f8',
        softer: '#fcfcfc',
      },
      fontFamily: {
        heading: ['Lato', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        card: '10px 10px 20px 0px rgba(0,0,0,0.06)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
