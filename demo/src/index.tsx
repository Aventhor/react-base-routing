import React from 'react';
import ReactDOM from 'react-dom';
import { BaseRouting, SimpleBaseRouting } from 'react-base-routing';
import layoutRoutes from './layout-routes';
import simpleRoutes from './simple-routes';
import { NotFoundPage } from './pages';

const App: React.FC = () => {
    return <BaseRouting routes={layoutRoutes} notFoundPage={NotFoundPage} />;
};

/*eslint-disable */
const AppWithSimpleRoutes: React.FC = () => {
    return (
        <SimpleBaseRouting routes={simpleRoutes} notFoundPage={NotFoundPage} />
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
