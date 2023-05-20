import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateEmail as firebaseUpdateEmail,
    updatePassword as firebaseUpdatePassword,
    Auth,
    User as FirebaseUser,
    UserCredential,
} from 'firebase/auth';

import { auth } from 'helpers/firebase';

type AuthContextType = {
    auth: Auth;
    currentUser: FirebaseUser | null;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    updateEmail: (email: string) => Promise<void>;
    updatePassword: (password: string) => Promise<void>;
};

type AuthProviderProps = {
    children?: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = (): AuthContextType => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    function login(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(): Promise<void> {
        return signOut(auth);
    }

    function resetPassword(email: string): Promise<void> {
        return sendPasswordResetEmail(auth, email);
    }

    function signUp(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function updateEmail(email: string): Promise<void> {
        return firebaseUpdateEmail(currentUser as FirebaseUser, email);
    }

    function updatePassword(password: string): Promise<void> {
        return firebaseUpdatePassword(currentUser as FirebaseUser, password);
    }

    const value = {
        auth,
        currentUser,
        login,
        logout,
        resetPassword,
        signUp,
        updateEmail,
        updatePassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
            {isLoading && (
                <h1
                    aria-busy="true"
                    style={{
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-25%, -50%)',
                        position: 'absolute',
                    }}
                />
            )}
        </AuthContext.Provider>
    );
};
