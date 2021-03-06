[![NPM](https://img.shields.io/npm/v/react-base-routing.svg)](https://www.npmjs.com/package/react-base-routing)

# react base routing

Layout based router for react. Used [react-router-dom](https://www.npmjs.com/package/react-router-dom). Layout state is not reset when navigating to pages of the same layout

## Installation

```
npm i react-base-routing
```

or

```
yarn add react-base-routing
```

## Usage

1. Create `routes.js` with paths schema like this

```js
import { AuthLayout, DefaultLayout } from './layouts';
import { AboutPage, HomePage, LoginPage } from './pages';

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
        ],
    },
];
```

Create your layout. Each layout must have `children` prop to render pages

```js
import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <main>
            <h4>Default Layout</h4>
            {children}
        </main>
    );
};

export default DefaultLayout;
```

Create simple page

```js
import React from 'react';

const LoginPage = () => {
    return <h1>Login Page</h1>;
};

export default LoginPage;
```

2. On your `App.js` include router component

```js
import React from 'react';
import { BaseRouting } from 'react-base-routing';
import routes from './routes';

const App = () => {
    return <BaseRouting routes={routes} />;
};
```

## Advanced

1. You can handle 404 route by passing `notFoundPage` prop to base component

```js
<BaseRouting routes={routes} notFoundPage={NotFoundPage} />
```

> 404 page not use layout. This is only page

2. You can use `SimpleBaseRouting` with simple routing schema (without layouts)

Create simple paths schema like this

```js
import { AboutPage, HomePage, LoginPage } from './pages';

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
];
```

In your `App` include `SimpleBaseRouting` instead `BaseRouting`

```js
import React from 'react';
import { SimpleBaseRouting } from 'react-base-routing';
import routes from './routes';

const App = () => {
    return <SimpleBaseRouting routes={routes} />;
};
```

3. You can pass `paths` array to any Router component

```js
import React from 'react';
import { BaseRouting } from 'react-base-routing';
import routes from './routes';

const App = () => {
    const paths = ['/', '/about'];
    return <BaseRouting routes={routes} paths={paths} />;
};
```

This will tell the router to show a 404 page if there is no page path in the path array.

## Live Demo

See example at this
[link](https://react-base-routing.vercel.app/)

## Code Example

[example](https://github.com/Aventhor/react-base-routing/tree/master/demo)
