import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { BaseRoutingProps } from './interfaces/BaseRoutingProps';

const BaseRouting: React.FC<BaseRoutingProps> = ({
    routes,
    notFoundPage: NotFoundComponentPage,
}) => {
    const paths: string[] = routes
        .map((layout) => layout.routes.map((route) => route.path))
        .flat(1);
    console.log(paths);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={paths}>
                    {routes.map((route, index) => {
                        return <Layout key={index} {...route} />;
                    })}
                </Route>
                <Route path="*" component={NotFoundComponentPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default BaseRouting;
