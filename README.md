[![NPM](https://img.shields.io/npm/v/react-base-routing.svg)](https://www.npmjs.com/package/react-base-routing)

# react base routing

Layout based router for react. Used [react-router-dom](https://www.npmjs.com/package/react-router-dom). Layout state is not reset when navigating to pages of the same layout

## Installation

```
npm i react-base-routing
```

or

```
yarn react-base-routing
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

2. You can use `BaseRouting` with simple routing schema (without layouts)

-   create simple paths schema like this

```js
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
```

-   in `App.js` set `schema` prop to `simple`

```js
import React from 'react';
import { BaseRouting } from 'react-base-routing';
import routes from './routes';

const App = () => {
    return <BaseRouting routes={routes} schema="simple" />;
};
```

## Code Example

[example](https://github.com/Aventhor/react-base-routing/tree/master/demo)
