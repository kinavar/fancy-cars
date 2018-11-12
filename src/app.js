import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store';
import Home from './containers/Home/Home';

import '../node_modules/bootstrap/scss/bootstrap.scss';

const app = () => {
    render(
        <Provider store={store}>
            <Home/>
        </Provider>,
        document.getElementById('app')
    );
};

export default app;
