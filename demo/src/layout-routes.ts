import { LayoutRoute } from 'react-base-routing';
import { AuthLayout, DefaultLayout } from './layouts';
import { AboutPage, ContactsPage, HomePage, LoginPage } from './pages';

export default [
    {
        layout: AuthLayout,
        routes: [
            {
                path: ['/login', '/sign-in'],
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
        ],
    },
] as LayoutRoute[];
