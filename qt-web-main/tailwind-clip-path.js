// tailwind-clip-path.js
module.exports = function ({ addUtilities }) {
  addUtilities({
    '.clip-custom': {
      'clip-path': 'polygon(50% 0%, 100% 0, 100% 35%, 100% 84%, 29% 84%, 20% 100%, 0 100%, 0% 70%, 0 0)',
      'border': '3px solid transparent', // Border initially set to transparent
      'transition': 'border-color 0.3s ease', // Smooth transition for border color
    },
    '.group-hover:border-opacity-100': {
      'border-opacity': '100%',
     
    },
  });
};
