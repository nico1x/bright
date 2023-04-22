import { ReactElement } from 'react';

import paperLogo from 'assets/paper-logo-type.svg';

import { ThemeSwitcher } from 'components';

import './index.css';

export const Home = (): ReactElement => {
    return (
        <>
            {' '}
            <div>
                <img
                    src={paperLogo}
                    className="logo"
                    alt="paper dev studio logo"
                />
            </div>
            {/* <ThemeSwitcher /> */}
        </>
    );
};
