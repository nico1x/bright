import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';

import { APP_TITLE } from 'helpers/constants';
import { useAuth } from 'providers/AuthProvider';

import './index.css';

export default function Navbar() {
    const { currentUser, logout } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const onClickLogout = () => {
        logout()
            .then(() => {
                navigate('/');
            })
            .catch((error: FirebaseError) => {
                toast.error(error.message);
            });
    };

    const NavLink = ({
        label,
        loginRequired = false,
        path,
    }: {
        label: string;
        loginRequired?: boolean;
        path: string;
    }) =>
        // TODO: simplify this
        loginRequired ? (
            currentUser ? (
                <li>
                    <Link
                        role={location.pathname === path ? 'button' : ''}
                        to={path}
                    >
                        {label}
                    </Link>
                </li>
            ) : (
                <></>
            )
        ) : (
            <li>
                <Link
                    role={location.pathname === path ? 'button' : ''}
                    to={path}
                >
                    {label}
                </Link>
            </li>
        );

    return (
        <nav>
            <ul>
                {/* use NavLink below */}
                <li>
                    <Link to={currentUser ? '/home' : '/'}>
                        <strong>{APP_TITLE}</strong>
                    </Link>
                </li>
            </ul>
            <ul>
                <NavLink label="Home" loginRequired={true} path="/home" />
                <NavLink label="Link 1" path="/link-1" />
                <NavLink label="Link 2" path="/link-2" />
                {/* use NavLink below */}
                <li>
                    {currentUser ? (
                        <a href="#" onClick={onClickLogout}>
                            Logout
                        </a>
                    ) : (
                        <a href="/login">Login</a>
                    )}
                </li>
            </ul>
        </nav>
    );
}
