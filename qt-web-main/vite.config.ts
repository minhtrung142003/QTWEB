import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@interfaces': path.resolve(__dirname, './src/interfaces'),
            '@modules': path.resolve(__dirname, './src/modules'),
            '@contexts': path.resolve(__dirname, './src/contexts'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@services': path.resolve(__dirname, './src/services'),
            '@context': path.resolve(__dirname, './src/context'),
            '@axios': path.resolve(__dirname, './src/axios'),
            '@themes': path.resolve(__dirname, './src/themes'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@configs': path.resolve(__dirname, './src/configs'),
            '@apis': path.resolve(__dirname, './src/api'),
        },
    },

    server: {
        port: 3000,
    },
});
