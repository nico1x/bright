import { ReactElement } from 'react';

export const ThemeSwitcher = (): ReactElement => {
    return (
        <button
            className="contrast switcher theme-switcher"
            aria-label="Turn on dark mode"
        >
            <i>Turn on dark mode</i>
        </button>
    );
};
