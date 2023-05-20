import Navbar from 'components/Navbar';

export type LayoutProps = {
    children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
