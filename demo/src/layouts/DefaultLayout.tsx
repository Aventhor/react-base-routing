import React from 'react';

const DefaultLayout = ({ children }: any) => {
    return (
        <main>
            <h4>Default Layout</h4>
            {children}
        </main>
    );
};

export default DefaultLayout;
