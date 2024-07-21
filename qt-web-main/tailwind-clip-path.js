// tailwind-clip-path.js
module.exports = function({ addUtilities }) {
  addUtilities({
    '.clip-custom': {
      'clip-path': 'polygon(0% 0%, 100% 0%, 100% 82%, 68% 82%, 31% 82%, 22% 100%, 0 100%)'
    }
  });
};
