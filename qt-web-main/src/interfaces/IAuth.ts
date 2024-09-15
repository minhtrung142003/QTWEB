import { IUser } from './IUser';

export interface IAuth {
    message: string;
    data?: {
        accessToken: string;
        refreshToken: string;
        user: IUser | null;
    };
}
