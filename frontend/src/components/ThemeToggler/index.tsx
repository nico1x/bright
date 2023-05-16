import { useContext } from 'react';

import { ReactComponent as MoonIcon } from 'assets/moon.svg';
import { ReactComponent as SunIcon } from 'assets/sun.svg';
import {
    ThemeContextType,
    ThemeProviderProps,
    ThemeContext,
} from 'providers/ThemeProvider';
import { THEME } from 'helpers/constants';

import './index.css';

export const ThemeToggler = ({ children }: ThemeProviderProps) => {
    const { darkMode, toggleDarkMode } = useContext(
        ThemeContext
    ) as ThemeContextType;

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked: boolean = event.target.checked;
        toggleDarkMode(checked);
        localStorage.setItem(THEME, checked ? 'dark' : 'light');
    };

    return (
        <>
            {children}
            <label className="toggle-wrapper" htmlFor="toggle">
                <div className={`toggle ${darkMode ? 'enabled' : 'disabled'}`}>
                    <div className="icons">
                        <SunIcon />
                        <MoonIcon />
                    </div>
                    <input
                        id="toggle"
                        name="toggle"
                        type="checkbox"
                        checked={darkMode}
                        onChange={handleToggle}
                    />
                </div>
            </label>
        </>
    );
};
