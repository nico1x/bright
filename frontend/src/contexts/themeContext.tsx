import { createContext, useEffect, useState } from 'react';

import { THEME } from 'helpers/constants';

export type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: (darkMode: boolean) => void;
};

export type ThemeContextProviderProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<ThemeContextProviderProps> = ({
    children,
}: ThemeContextProviderProps) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const theme: string | null = localStorage.getItem(THEME);
        if (theme === null) {
            setDarkMode(
                window.matchMedia('(prefers-color-scheme: dark)').matches
            );
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', (e) => setDarkMode(e.matches));

            return () => {
                window
                    .matchMedia('(prefers-color-scheme: dark)')
                    .removeEventListener('change', () => {});
            };
        } else {
            setDarkMode(theme === 'dark');
        }
    }, []);

    useEffect(() => {
        const html: HTMLElement = document.documentElement;
        html.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <ThemeContext.Provider
            value={{ darkMode, toggleDarkMode: setDarkMode }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
