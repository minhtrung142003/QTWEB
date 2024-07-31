module.exports = {
    content: ['./src/**/*.{html,js,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'active-icon': '0px 0px 20px #22d3ee',
                'demo-active': '2px 2px 0px rgba(148, 92, 60, 0.5)',
                'custom-shadow': '4px 4px rgba(0, 0, 0, 1)',
                'active-btn': '4px 4px rgba(112, 70, 45, 0.4)', // Gộp cả định nghĩa này vào một chỗ
                custom: '2px 2px 0px rgba(148, 92, 60, 0.5)',
                'hover': '0 8px 20px rgba(148, 92, 60, 0.6)',   
            },
            colors: {
                'main-100': '#CCE9D7',
                'main-200': '#79C420',
                'main-300': '#00933A',
                'active-color': '#945C3C',
                'button-bg': 'rgba(255, 255, 255, 0.6)',
                colorOrgane: '#945c3c',
                colorWhite: '#DBDBDB',
            },
            dropShadow: {
                'card-layout': '4px 4px rgba(249,115,22,0.4)',
                'solution-shadow': '6px 6px 10px rgba(148, 92, 60, 0.4)',
            },
            transitionProperty: {
                border: 'border',
            },
            screens: {
                x768: '768px',
                xxl: '1920px',
                x912: '912px',
                x820: '820px',
                x884: '884px',
                xxxl: '1440px',
                x3l: '2560px',
                x24: '2496px',
                laptop: '1368px',
            },
            fillOpacity: {
                'hover-10': '0.1',
                'default-70': '0.7',
            },
            gridTemplateColumns: {
                24: 'repeat(24, minmax(0, 1fr))',
            },
            zIndex: {
                '-1': '-1',
            },
            borderRadius: {
                customborder: '20px 4px 20px 4px', // top-left, top-right, bottom-right, bottom-left
            },
            backgroundImage: {
                'custom-gradient':
                    'linear-gradient(180deg, rgba(248, 248, 248, 0.75) 18.7%, rgba(217, 217, 217, 0.75) 100%)',
            },
            gridTemplateColumns: {
                '3/1': '75% 25%',
                'custom-3': '0.9fr 0.9fr 0.6fr',
            },
            clipPath: {
                'custom-triangle': 'polygon(100% 52%, 68% 0, 68% 100%)',
            },
          
        },
        plugins: ['@tailwindcss/clip-path'],
    },
};
/* Vector 46 */
