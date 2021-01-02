import React from 'react';
import ReactDOM from 'react-dom';
import { BaseRouting } from 'react-base-routing';
import routes from './routes';
import { NotFoundPage } from './pages';

const App = () => {
    return <BaseRouting routes={routes} notFoundPage={NotFoundPage} />;
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
