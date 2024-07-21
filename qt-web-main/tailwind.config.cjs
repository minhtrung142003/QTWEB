const clipPathPlugin = require('./tailwind-clip-path');
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-100': "#CCE9D7",
        'main-200': '#79C420',
        'main-300': '#00933A',
        'platform': '#945c3c'
      }
      
    },
  },
  plugins: [
    clipPathPlugin,
  ],
};
