import { ReactNode, useLayoutEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const Layout = ({children}: {children: ReactNode}) => {

    return (
        <main
            className="layout-container">
            {children}
        </main>
    );
};
