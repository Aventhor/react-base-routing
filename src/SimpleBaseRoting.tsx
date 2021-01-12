import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from './interfaces/AppRoute';
import { SimpleBaseRoutingProps } from './interfaces/SimpleBaseRoutingProps';
import { pathsManager } from './utils';

const SimpleBaseRouting: React.FC<SimpleBaseRoutingProps> = ({
    routes,
    paths,
    notFoundPage: NotFoundComponentPage,
}) => {
    if (pathsManager.isRoutesArrayEmpty(routes)) {
        throw new Error('Routes array is empty');
    }

    const isAppRoutes = pathsManager.isAppRoute(routes[0]);

    return (
        <BrowserRouter>
            <Switch>
                {isAppRoutes && (
                    <Route
                        path={paths || pathsManager.getSimplePaths(routes)}
                        exact
                    >
                        {routes.map((route: AppRoute, index: number) => {
                            return <Route key={index} {...route} />;
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

export default SimpleBaseRouting;
