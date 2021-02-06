import React from 'react';

type Props = { title: string };

const HomePage = ({ title }: Props): React.ReactNode => {
    return <h1>{title}</h1>;
};

export default HomePage;
