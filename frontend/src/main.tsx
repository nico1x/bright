import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'contexts/themeContext';
import { ThemeToggler } from 'components';

import App from './App';

import '@picocss/pico/css/pico.min.css';
import './main.css';

const root = document.getElementById('root') as HTMLElement;
root.classList.add('container-fluid');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ThemeProvider>
            <ThemeToggler>
                <App />
            </ThemeToggler>
        </ThemeProvider>
    </React.StrictMode>
);
