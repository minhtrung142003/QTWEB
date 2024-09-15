import http from '@utils/http';

export const getFeatures = () =>
    http.get<any>('/features', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
