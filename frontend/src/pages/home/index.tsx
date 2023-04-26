import { ReactElement } from 'react';

import PaperLogo from 'assets/paper-logo-type.svg';

import './index.css';

export const Home = (): ReactElement => {
    return (
        <>
            <div className="grid logo-container">
                <img
                    src={PaperLogo}
                    className="logo"
                    alt="paper dev studio logo"
                />
            </div>
        </>
    );
};
