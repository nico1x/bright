import Navbar from 'components/Navbar';

import './index.css';

type LayoutProps = {
    children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
