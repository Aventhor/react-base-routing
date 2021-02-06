import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LayoutRoute } from '../../interfaces/LayoutRoute';
import { pathsManager } from '../../utils';

const Layout: React.FC<LayoutRoute> = ({ layout: LayoutComponent, routes }) => {
    const paths = pathsManager.getPathsArray(routes);

    const layout = (
        <LayoutComponent>
            <Switch>
                {routes.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
            </Switch>
        </LayoutComponent>
    );

    return <Route exact path={paths} children={layout} />;
};

export default Layout;
