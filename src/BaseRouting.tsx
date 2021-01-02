import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { AppRoute } from './interfaces/AppRoute';
import { BaseRoutingProps } from './interfaces/BaseRoutingProps';
import { LayoutRoute } from './interfaces/LayoutRoute';
import { pathsManager } from './utils';

const BaseRouting: React.FC<BaseRoutingProps> = ({
    routes,
    notFoundPage: NotFoundComponentPage,
    schema = 'layout',
}) => {
    const isLayoutRoutes = pathsManager.isLayoutRoute(routes[0]);
    const isAppRoutes = pathsManager.isAppRoute(routes[0]);

    return (
        <BrowserRouter>
            <Switch>
                {schema === 'layout' && isLayoutRoutes && (
                    <Route
                        exact
                        path={pathsManager.getPaths(routes as LayoutRoute[])}
                    >
                        {(routes as LayoutRoute[]).map(
                            (route: LayoutRoute, index: number) => {
                                return <Layout key={index} {...route} />;
                            }
                        )}
                    </Route>
                )}
                {schema === 'simple' &&
                    isAppRoutes &&
                    (routes as AppRoute[]).map(
                        (route: AppRoute, index: number) => {
                            return <Route key={index} {...route} />;
                        }
                    )}
                {NotFoundComponentPage && (
                    <Route path="*" component={NotFoundComponentPage} />
                )}
            </Switch>
        </BrowserRouter>
    );
};

export default BaseRouting;
