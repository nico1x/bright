import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';
import firebase from 'firebase/compat/app';

import { useAuth } from 'providers/AuthProvider';

import './index.css';
import StyledFirebaseAuth from './StyledFirebaseAuth';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/home',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

export const LoginForm = () => {
    const { auth, login } = useAuth();

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;

        login(email, password)
            .then(() => {})
            .catch((error: FirebaseError) => {
                let message = '';

                if (error.code === 'auth/user-not-found')
                    message = 'Invalid login!';

                toast.error(message);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <article>
            <form onSubmit={onSubmitHandler}>
                <h3>Login</h3>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                />

                <fieldset>
                    <div className="grid">
                        <div>
                            <label htmlFor="remember">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                />
                                Remember
                            </label>
                        </div>
                        <div className="forgotPasswordWrapper">
                            <a
                                href="#"
                                className="secondary"
                                id="forgotPassword"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                </fieldset>

                <button aria-busy={loading} type="submit">
                    {!loading && 'Login'}
                </button>
            </form>
            <h6 className="text-center">or</h6>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </article>
    );
};
