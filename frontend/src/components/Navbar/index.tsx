import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';

import { APP_TITLE } from 'helpers/constants';
import { useAuth } from 'providers/AuthProvider';

import './index.css';

export default function Navbar() {
    const { currentUser, logout } = useAuth();

    const onClickLogout = () => {
        logout().catch((error: FirebaseError) => {
            toast.error(error.message);
        });
    };
    return (
        <nav>
            <ul>
                <li>
                    <a href={currentUser ? `home` : `/`}>
                        <strong>{APP_TITLE}</strong>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#" role="button">
                        Button
                    </a>
                </li>
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
