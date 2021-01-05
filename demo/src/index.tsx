import React from 'react';
import ReactDOM from 'react-dom';
import { BaseRouting } from 'react-base-routing';
import layoutRoutes from './layout-routes';
import simpleRoutes from './simple-routes';
import { NotFoundPage } from './pages';

const App: React.FC = () => {
    return <BaseRouting routes={layoutRoutes} notFoundPage={NotFoundPage} />;
};

const AppWithSimpleRoutes: React.FC = () => {
    return (
        <BaseRouting
            routes={simpleRoutes}
            notFoundPage={NotFoundPage}
            schema="simple"
        />
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
