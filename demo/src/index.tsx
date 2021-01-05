import React from 'react';
import ReactDOM from 'react-dom';
import { BaseRouting } from 'react-base-routing';
import layoutRoutes from './layout-routes';
import simpleRoutes from './simple-routes';
import { NotFoundPage } from './pages';

const App: React.FC = () => {
    return <BaseRouting routes={layoutRoutes} notFoundPage={NotFoundPage} />;
};

<<<<<<< HEAD
/*eslint-disable */
const AppWithSimpleRoutes: React.FC = () => {
    return (
        <BaseRouting
            routes={simpleRoutes}
            notFoundPage={NotFoundPage}
            schema="simple"
        />
    );
};
=======
// const AppWithSimpleRoutes: React.FC = () => {
//     return (
//         <BaseRouting
//             routes={simpleRoutes}
//             notFoundPage={NotFoundPage}
//             schema="simple"
//         />
//     );
// };
>>>>>>> bfac362e49c8e6d2411518325119d5c65ff2732e

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
