module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // orange: '#FA6F52',
        orange: '#FF7222',
        'orange-dark': '#AC4633',
        // 'orange-light': '#FF9079',
        'orange-light': '#FF8D4D',
        pink: '#FFE4FC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
