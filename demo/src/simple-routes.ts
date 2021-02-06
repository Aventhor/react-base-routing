import { AppRoute } from 'react-base-routing';
import { AboutPage, ContactsPage, HomePage, LoginPage } from './pages';

export default [
    {
        path: ['/login', '/sign-in'],
        exact: true,
        component: LoginPage,
    },
    {
        path: '/',
        exact: true,
        render: () => HomePage({ title: 'HomePage' }),
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/contacts',
        exact: true,
        component: ContactsPage,
    },
] as AppRoute[];
