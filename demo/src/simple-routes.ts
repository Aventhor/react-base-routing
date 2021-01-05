import { AppRoute } from 'react-base-routing';
import { AboutPage, ContactsPage, HomePage, LoginPage } from './pages';

export default [
    {
        path: '/login',
        exact: true,
        component: LoginPage,
    },
    {
        path: '/',
        exact: true,
        component: HomePage,
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
