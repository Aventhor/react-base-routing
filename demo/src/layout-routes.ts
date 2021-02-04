import { LayoutRoute } from 'react-base-routing';
import { AuthLayout, DefaultLayout } from './layouts';
import { AboutPage, ContactsPage, HomePage, LoginPage } from './pages';

export default [
    {
        layout: AuthLayout,
        routes: [
            {
                path: '/login',
                exact: true,
                render: () => LoginPage({}),
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
            {
                path: '/contacts',
                exact: true,
                component: ContactsPage,
            },
        ],
    },
] as LayoutRoute[];
