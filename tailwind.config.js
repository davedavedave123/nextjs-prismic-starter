module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: '#FAC93C',
        pink: '#FFE4FC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
