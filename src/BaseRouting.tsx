import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { BaseRoutingProps } from './interfaces/BaseRoutingProps';
import { LayoutRoute } from './interfaces/LayoutRoute';
import { pathsManager } from './utils';

const BaseRouting: React.FC<BaseRoutingProps> = ({
    routes,
    paths,
    notFoundPage: NotFoundComponentPage,
}) => {
    if (pathsManager.isRoutesArrayEmpty(routes)) {
        throw new Error('Routes array is empty');
    }
    const isLayoutRoutes = pathsManager.isLayoutRoute(routes[0]);

    return (
        <BrowserRouter>
            <Switch>
                {isLayoutRoutes && (
                    <Route
                        exact
                        path={paths || pathsManager.getLayoutPaths(routes)}
                    >
                        {routes.map((route: LayoutRoute, index: number) => {
                            return <Layout key={index} {...route} />;
                        })}
                    </Route>
                )}

                {NotFoundComponentPage && (
                    <Route path="*" component={NotFoundComponentPage} />
                )}
            </Switch>
        </BrowserRouter>
    );
};

export default BaseRouting;
