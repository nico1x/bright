import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import '@picocss/pico/css/pico.min.css';

import { ThemeToggler } from 'components/ThemeToggler';
import { AuthProvider } from 'providers/AuthProvider';
import { ThemeProvider } from 'providers/ThemeProvider';

import './main.css';
import App from './App';

const root = document.getElementById('root') as HTMLElement;
root.classList.add('container-fluid');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <ThemeProvider>
                    <ThemeToggler>
                        <App />
                    </ThemeToggler>
                </ThemeProvider>
            </AuthProvider>
        </Router>
    </React.StrictMode>
);
