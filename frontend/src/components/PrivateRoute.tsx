import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

export default function PrivateRoute() {
    const { currentUser } = useAuth();
    return <>{currentUser ? <Outlet /> : <Navigate to="/login" />}</>;
}
