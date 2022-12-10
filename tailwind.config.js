const path = require('path');

module.exports = {
  prefix: '',
  important: true,
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
