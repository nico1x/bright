import { ReactElement } from 'react';

import paperLogo from 'assets/paper-logo-type.svg';

import './index.css';

export const Home = (): ReactElement => {
    return (
        <>
            <div className="grid logo-container">
                <img
                    src={paperLogo}
                    className="logo"
                    alt="paper dev studio logo"
                />
            </div>
        </>
    );
};
