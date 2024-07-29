// tailwind-clip-path.js
module.exports = function ({ addUtilities }) {
  addUtilities({
    '.clip-custom': {
      'clip-path': 'polygon(65% 76%, 100% 76%, 100% 100%, 0 100%, 23% 76%)',
      'clip-path1': 'polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 80%)',
      'border': '3px solid transparent', // Border initially set to transparent
      'transition': 'border-color 0.3s ease', // Smooth transition for border color
    },
    '.group-hover:border-opacity-100': {
      'border-opacity': '100%',
     
    },
  });
};