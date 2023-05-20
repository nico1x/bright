import { Navigate } from 'react-router-dom';

import LoginForm from 'components/LoginForm';
import { useAuth } from 'providers/AuthProvider';

export const Login = () => {
    const { currentUser } = useAuth();
    return <>{currentUser ? <Navigate to="/home" /> : <LoginForm />}</>;
};
