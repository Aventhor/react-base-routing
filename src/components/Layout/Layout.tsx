import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LayoutRoute } from '../../interfaces/LayoutRoute';

const Layout: React.FC<LayoutRoute> = ({ layout: LayoutComponent, routes }) => {
    const paths = routes.map((x) => x.path);

    const layout = (
        <LayoutComponent>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>
        </LayoutComponent>
    );

    return <Route exact path={paths} children={layout} />;
};

export default Layout;
