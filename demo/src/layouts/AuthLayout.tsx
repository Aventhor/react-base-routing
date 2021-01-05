import React from 'react';
import Links from '../components/Links';

const AuthLayout: React.FC = ({ children }: React.PropsWithChildren<any>) => {
    return (
        <main>
            <h4>Auth Layout</h4>
            <Links />
            {children}
        </main>
    );
};

export default AuthLayout;
