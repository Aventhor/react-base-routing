import React from 'react';
import Links from '../components/Links';

const DefaultLayout: React.FC = ({ children }: any) => {
    return (
        <main>
            <h4>Default Layout</h4>
            <Links />
            {children}
        </main>
    );
};

export default DefaultLayout;
