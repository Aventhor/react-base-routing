import { AboutPage, HomePage, LoginPage } from './pages';

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
];
