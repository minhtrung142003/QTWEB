import http from '@utils/http';

export const login = (username: string, password: string) =>
    http.post<any>(
        '/login',
        {
            username,
            password,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
