import { ReactNode } from 'react';

export const Layout = ({children}: {children: ReactNode}) => {

    return (
        <main
            className="layout-container">
            {children}
        </main>
    );
};
