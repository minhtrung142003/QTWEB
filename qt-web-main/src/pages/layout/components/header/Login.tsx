import { Link, useNavigate } from 'react-router-dom';
import { useAuthenContext } from '@contexts/authen-context';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const { auth } = useAuthenContext();
    const [openUserAction, setOpenUserAction] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        auth ? setIsLogin(true) : setIsLogin(false);
    }, [auth]);
    const handleLogOut = () => {
        localStorage.removeItem('auth');
        navigate('/login');
        toast.success('Log out successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: 'light',
        });
    };
    return (
        <>
            <button
                className="rounded-[60px] p-2 h-[38px] flex items-center ml-1 text-white select-none relative"
                style={{
                    background: '#939ba7',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.55)',
                }}
            >
                {isLogin ? (
                    <>
                        <span
                            onClick={() => setOpenUserAction(!openUserAction)}
                        >
                            Admin
                        </span>
                        <div
                            className={`header_user-action ${
                                openUserAction ? 'open' : ''
                            }`}
                            onClick={handleLogOut}
                        >
                            Log Out
                        </div>
                    </>
                ) : (
                    <Link to={'/login'}>Login</Link>
                )}
            </button>
        </>
    );
}
