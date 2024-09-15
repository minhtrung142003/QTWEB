import { IAuth } from '../../interfaces/IAuth';
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from 'react';
import { jwtDecode } from 'jwt-decode';

interface IAuthenContextProps {
    auth?: IAuth | null;
    setAuth?: Dispatch<SetStateAction<IAuth | null>>;
    userId?: string | null;
}

const AuthenContext = createContext<IAuthenContextProps>({});

interface JwtPayload {
    userId: string;
}
export const AuthenContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [auth, setAuth] = useState<IAuth | null>(() => {
        const storedAuth = localStorage.getItem('auth');
        return storedAuth ? JSON.parse(storedAuth) : null;
    });
    const [userId, setUserId] = useState<string | null>(null);
    const getUserIdFromToken = (token: string): string | null => {
        try {
            const decoded = jwtDecode<JwtPayload>(token);
            return decoded.userId;
        } catch (error) {
            console.error('Token không hợp lệ hoặc đã hết hạn', error);
            return null;
        }
    };
    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
        }
        if (auth?.data) {
            const token = auth.data.accessToken;
            const userId = getUserIdFromToken(token);
            setUserId(userId);
        }
    }, []);
    useEffect(() => {
        if (auth) {
            localStorage.setItem('auth', JSON.stringify(auth));
        } else {
            localStorage.removeItem('auth');
        }
    }, [auth]);

    return (
        <AuthenContext.Provider
            value={{
                auth,
                setAuth,
                userId,
            }}
        >
            {children}
        </AuthenContext.Provider>
    );
};

export const useAuthenContext = () => useContext(AuthenContext);
