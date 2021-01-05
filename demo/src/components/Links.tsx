import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Links.module.css';

const Links: React.FC = () => {
    const links = [
        {
            path: '/login',
            name: 'Login',
        },
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/about',
            name: 'About',
        },
        {
            path: '/contacts',
            name: 'Contacts',
        },
    ];

    return (
        <ul className={styles.list}>
            {links.map((link) => (
                <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Links;
