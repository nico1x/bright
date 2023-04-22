import React, { useContext, useEffect, useState } from 'react';

import { THEME } from 'helpers/constants';

import {
    ThemeContextType,
    ThemeContextProviderProps,
} from 'contexts/themeContext';

import { ThemeContext } from 'contexts/themeContext';

import './index.css';

export const ThemeToggler: React.FC<ThemeContextProviderProps> = ({
    children,
}) => {
    const [slide, setSlide] = useState<'slide-in' | 'slide-out' | ''>('');

    const { darkMode, toggleDarkMode } = useContext(
        ThemeContext
    ) as ThemeContextType;

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked: boolean = event.target.checked;
        toggleDarkMode(checked);
        setSlide(checked ? 'slide-out' : 'slide-in');
        localStorage.setItem(THEME, checked ? 'dark' : 'light');
    };

    return (
        <>
            {children}
            <label className="toggler" htmlFor="switch">
                <div className={`label-container ${slide}`}>
                    <small>{darkMode ? 'Dark Mode' : 'Light Mode'}</small>
                </div>
                <input
                    type="checkbox"
                    id="switch"
                    name="switch"
                    role="switch"
                    checked={darkMode}
                    onChange={handleToggle}
                />
            </label>
        </>
    );
};
