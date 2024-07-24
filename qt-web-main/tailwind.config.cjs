const clipPathPlugin = require("./tailwind-clip-path");
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-100": "#CCE9D7",
        "main-200": "#79C420",
        "main-300": "#00933A",
        colorOrgane: "#945c3c",
        colorWhite: "#DBDBDB",
        
      },
      screens: {
        'x768': '768px',
        'xxl': '1920px',
        'x912': '912px',
        'xxxl': '1440px',
        'x3l': '2560px'
      },
    },
  },
  plugins: [clipPathPlugin],
};
