import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth.api';
import { useAuthenContext } from '@contexts/authen-context';
import { toast } from 'react-toastify';

const useAuth = (email?: string, password?: string) => {
    const { setAuth } = useAuthenContext();
    const [isLoading, setIsLoading] = useState(false);
    const [helperEmail, setHelperEmail] = useState<string | null>(null);
    const [helperPassword, setHelperPassword] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        setHelperEmail(null);
    }, [email]);

    useEffect(() => {
        setHelperPassword(null);
    }, [password]);

    const handleLogin = async () => {
        if (email === '' || password === '' || !password || !email) {
            if (email === '') {
                setHelperEmail('Please enter email!');
            }
            if (password === '') {
                setHelperPassword('Please enter password!');
            }
            return;
        }
        try {
            setIsLoading(true);
            const response = await login(email, password);
            if (setAuth) {
                const data = response.data;
                setAuth(data);
                localStorage.setItem('auth', JSON.stringify({ data }));
                navigate('/');
            }
        } catch (err: any) {
            toast.error(
                'Login failed, please check your information again!!!',
                {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: 'light',
                    style: { display: 'flex' },
                }
            );
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        helperEmail,
        helperPassword,
        handleLogin,
    };
};

export default useAuth;
