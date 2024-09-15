import http from '@utils/http';

export const placeOrder = (
    userId: string,
    featureList: number[],
    total: string,
    token: string
) =>
    http.post<any>(
        '/place-order',
        {
            userId,
            featureList,
            total,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
    );
