import PaperLogo from 'assets/paper-logo-type.svg';

import './index.css';

export const Landing = () => {
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
