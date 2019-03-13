import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


import './css/style.css';

import Router from './Router';

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

const logger = createLogger();
ReactDOM.render(
    <Provider store={createStore(reducers, {}, applyMiddleware(logger, thunkMiddleware))} >
        <Router />
    </Provider>,document.getElementById('root'));

serviceWorker.unregister();

