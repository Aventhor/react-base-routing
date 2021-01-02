import { AuthLayout, DefaultLayout } from './layouts';
import { AboutPage, HomePage, LoginPage } from './pages';

export default [
    {
        layout: AuthLayout,
        routes: [
            {
                path: '/login',
                exact: true,
                component: LoginPage,
            },
        ],
    },
    {
        layout: DefaultLayout,
        routes: [
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
        ],
    },
];
